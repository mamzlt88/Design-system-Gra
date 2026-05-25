import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const snapshotPath = path.join(rootDir, 'design/figma-file.snapshot.json');
const outDir = path.join(rootDir, 'src/assets/avatars');
const tokenPath = '/private/tmp/figma_token';
const fileKey = 'LuOSourQp644YKhg0MrCE0';
const componentSetId = '1640:11011';

const sizeKeyMap = {
  Big: 'big',
  Medium: 'medium',
  Small: 'small',
  'X-Small': 'xSmall',
};

function findNode(node, nodeId) {
  if (!node || typeof node !== 'object') return null;
  if (node.id === nodeId) return node;

  for (const child of node.children || []) {
    const result = findNode(child, nodeId);
    if (result) return result;
  }

  return null;
}

function parseVariant(name) {
  const size = name.match(/Size=([^,]+)/)?.[1];
  const type = name.match(/Type=([^,]+)/)?.[1];
  const avatar = name.match(/Avatar=(.+)$/)?.[1];

  if (!size || type !== 'Avatar' || !avatar || avatar === 'None') return null;

  return {
    avatar,
    size: sizeKeyMap[size],
  };
}

async function main() {
  const [snapshotSource, tokenSource] = await Promise.all([
    fs.readFile(snapshotPath, 'utf8'),
    fs.readFile(tokenPath, 'utf8'),
  ]);
  const snapshot = JSON.parse(snapshotSource);
  const token = tokenSource.trim();
  const componentSet = findNode(snapshot.document, componentSetId);

  if (!componentSet) {
    throw new Error(`Could not find Figma component set ${componentSetId}`);
  }

  const targets = componentSet.children
    .map((child) => {
      const variant = parseVariant(child.name);
      const avatarLayer = child.children?.find((node) => node.name === 'Avatar');
      return variant && avatarLayer ? { ...variant, componentNodeId: child.id, nodeId: avatarLayer.id } : null;
    })
    .filter(Boolean)
    .sort((a, b) => `${a.avatar}-${a.size}`.localeCompare(`${b.avatar}-${b.size}`));

  await fs.mkdir(outDir, { recursive: true });

  const query = new URLSearchParams({
    ids: targets.map((target) => target.nodeId).join(','),
    format: 'png',
    scale: '3',
    use_absolute_bounds: 'true',
  });
  const response = await fetch(`https://api.figma.com/v1/images/${fileKey}?${query}`, {
    headers: { 'X-Figma-Token': token },
  });

  if (!response.ok) {
    throw new Error(`Figma image API failed ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json();
  if (payload.err) {
    throw new Error(`Figma export error: ${payload.err}`);
  }

  const manifest = [];
  for (const target of targets) {
    const exportUrl = payload.images?.[target.nodeId];
    if (!exportUrl) {
      throw new Error(`Missing export URL for ${target.nodeId}`);
    }

    const assetResponse = await fetch(exportUrl);
    if (!assetResponse.ok) {
      throw new Error(`Download failed for ${target.nodeId}: ${assetResponse.status}`);
    }

    const bytes = Buffer.from(await assetResponse.arrayBuffer());
    const file = `avatar-${target.avatar}-${target.size}.png`;
    await fs.writeFile(path.join(outDir, file), bytes);
    manifest.push({ ...target, file, bytes: bytes.length });
  }

  await fs.writeFile(path.join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Exported ${manifest.length} UserAvatar PNG assets to ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
