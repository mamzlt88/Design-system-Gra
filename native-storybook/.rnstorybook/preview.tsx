import type { Preview } from '@storybook/react-native';
import { View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: '#F8F7F3', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default preview;
