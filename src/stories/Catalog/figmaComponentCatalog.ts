export type FigmaComponentCatalogItem = {
  name: string;
  componentName: string;
  nodeId: string;
  nodeType: string;
  level: string;
  family: string;
  status: string;
  variantAxes: Record<string, string[]>;
  childCount: number;
  descendantCount: number;
};

export const figmaComponentCatalog: FigmaComponentCatalogItem[] = [
  {
    "name": "Languge Selector",
    "componentName": "LanguageSelector",
    "nodeId": "9274:12691",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Accordions",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Selected"
      ]
    },
    "childCount": 3,
    "descendantCount": 19
  },
  {
    "name": "SubDetails Group",
    "componentName": "SubDetailsGroup",
    "nodeId": "7538:3968",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Accordions",
    "status": "implemented",
    "variantAxes": {
      "No.Rows": [
        "1",
        "2",
        "3"
      ]
    },
    "childCount": 3,
    "descendantCount": 21
  },
  {
    "name": "Color Indicator",
    "componentName": "ColorIndicator",
    "nodeId": "9097:6463",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Badges and Indicators",
    "status": "implemented",
    "variantAxes": {
      "Color": [
        "Red",
        "Yellow",
        "Green",
        "Aquamarine",
        "Blue",
        "Brand"
      ]
    },
    "childCount": 6,
    "descendantCount": 6
  },
  {
    "name": "Notification Badge",
    "componentName": "NotificationBadge",
    "nodeId": "7509:2356",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Badges and Indicators",
    "status": "implemented",
    "variantAxes": {
      "Size": [
        "Small",
        "Single Digit",
        "Multiple Digits"
      ]
    },
    "childCount": 3,
    "descendantCount": 5
  },
  {
    "name": "Status Badge",
    "componentName": "StatusBadge",
    "nodeId": "7483:6154",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Badges and Indicators",
    "status": "implemented",
    "variantAxes": {
      "Style": [
        "Default",
        "Emphasized"
      ],
      "Status": [
        "Informative",
        "Success",
        "Warning",
        "Attention",
        "Critical",
        "Progress",
        "Loading"
      ]
    },
    "childCount": 13,
    "descendantCount": 25
  },
  {
    "name": "Buttons",
    "componentName": "Button",
    "nodeId": "50:6188",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "Style": [
        "Filled",
        "Outlined",
        "Text"
      ],
      "Type": [
        "Primary",
        "Secondary",
        "Red",
        "Warning",
        "Green",
        "Standard"
      ],
      "State": [
        "Enabled",
        "Pressed",
        "Disabled"
      ],
      "Dark_Mode": [
        "No",
        "Yes"
      ]
    },
    "childCount": 78,
    "descendantCount": 624
  },
  {
    "name": "03 Icon Button",
    "componentName": "IconButton",
    "nodeId": "91:4104",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "Style": [
        "Filled",
        "Tonal",
        "Outlined",
        "Outlined Accent",
        "Filled Red",
        "Standard",
        "Standard Inverse"
      ],
      "State": [
        "Enabled",
        "Pressed",
        "Disabled"
      ],
      "Dark Mode": [
        "No",
        "Yes"
      ]
    },
    "childCount": 39,
    "descendantCount": 195
  },
  {
    "name": "Amount Selector",
    "componentName": "AmountSelector",
    "nodeId": "8273:7829",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Initial",
        "Default"
      ]
    },
    "childCount": 2,
    "descendantCount": 23
  },
  {
    "name": "Document Upload Slot",
    "componentName": "DocumentUploadSlot",
    "nodeId": "9304:2207",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Uploaded"
      ],
      "Type": [
        "N/A",
        "Optional",
        "Required"
      ]
    },
    "childCount": 5,
    "descendantCount": 33
  },
  {
    "name": "External Link Button",
    "componentName": "ExternalLinkButton",
    "nodeId": "9182:7501",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Enabled",
        "Pressed"
      ],
      "Text_Size": [
        "Large",
        "Medium"
      ]
    },
    "childCount": 4,
    "descendantCount": 20
  },
  {
    "name": "Pill Buttons",
    "componentName": "PillButton",
    "nodeId": "8363:4304",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Enabled",
        "Selected",
        "Pressed"
      ]
    },
    "childCount": 3,
    "descendantCount": 6
  },
  {
    "name": "Value Adjuster Button",
    "componentName": "ValueAdjusterButton",
    "nodeId": "8510:11062",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Decrease",
        "Increase"
      ],
      "State": [
        "Enabled",
        "Pressed",
        "Disabled"
      ]
    },
    "childCount": 6,
    "descendantCount": 24
  },
  {
    "name": "Notification Icon",
    "componentName": "NotificationIcon",
    "nodeId": "2870:5575",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Cards",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Requested Loan",
        "Loan Renewal",
        "Loan Approval Pending",
        "Weekly Payment",
        "Center Meeting"
      ]
    },
    "childCount": 5,
    "descendantCount": 32
  },
  {
    "name": "Checkbox & Radio Button",
    "componentName": "CheckboxButton / RadioButton",
    "nodeId": "7521:6940",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Checkbox & Radio Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Default",
        "Selected",
        "Disabled"
      ],
      "Type": [
        "Radio Text",
        "Radio",
        "Square",
        "Square Red"
      ]
    },
    "childCount": 11,
    "descendantCount": 52
  },
  {
    "name": "Language Image",
    "componentName": "LanguageImage",
    "nodeId": "7878:11296",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Dropdowns",
    "status": "implemented",
    "variantAxes": {
      "Language": [
        "Spanish",
        "English"
      ]
    },
    "childCount": 2,
    "descendantCount": 4
  },
  {
    "name": "Icon Containers",
    "componentName": "IconContainer",
    "nodeId": "9084:6053",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Icon Containers",
    "status": "implemented",
    "variantAxes": {
      "Color": [
        "Red",
        "Yellow",
        "Green",
        "Brand",
        "Blue",
        "Purple",
        "Pink"
      ],
      "Style": [
        "Default",
        "Emphasized"
      ]
    },
    "childCount": 14,
    "descendantCount": 56
  },
  {
    "name": "Savings Goal",
    "componentName": "SavingsGoal",
    "nodeId": "8550:10588",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Illustrations",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Completed",
        "In Progress"
      ]
    },
    "childCount": 2,
    "descendantCount": 28
  },
  {
    "name": "Checkbox List",
    "componentName": "CheckboxList",
    "nodeId": "7673:5287",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Lists",
    "status": "implemented",
    "variantAxes": {
      "No.Items": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    },
    "childCount": 7,
    "descendantCount": 240
  },
  {
    "name": "Status Indicator",
    "componentName": "StatusIndicator",
    "nodeId": "7873:607",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Lists",
    "status": "implemented",
    "variantAxes": {
      "Status": [
        "Attention",
        "Neutral",
        "Completed"
      ]
    },
    "childCount": 3,
    "descendantCount": 12
  },
  {
    "name": "Circular Spinner",
    "componentName": "CircularSpinner",
    "nodeId": "9476:242",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Loading & Progress Indicators",
    "status": "implemented",
    "variantAxes": {
      "Size": [
        "Small",
        "Medium",
        "Large"
      ],
      "Rotation": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    "childCount": 12,
    "descendantCount": 36
  },
  {
    "name": "Segmented Spinner",
    "componentName": "SegmentedSpinner",
    "nodeId": "9761:597",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Loading & Progress Indicators",
    "status": "implemented",
    "variantAxes": {
      "Rotation": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    "childCount": 4,
    "descendantCount": 36
  },
  {
    "name": "Logo Variations",
    "componentName": "Logo",
    "nodeId": "2760:487",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Logo",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Full",
        "Icon only"
      ]
    },
    "childCount": 2,
    "descendantCount": 4
  },
  {
    "name": "Savings Program Logo",
    "componentName": "SavingsProgramLogo",
    "nodeId": "8625:10563",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Logo",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Small",
        "Medium"
      ]
    },
    "childCount": 2,
    "descendantCount": 4
  },
  {
    "name": "Option Selection Bottom Sheet",
    "componentName": "OptionSelectionBottomSheet",
    "nodeId": "7622:5376",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Modals & Bottom Sheets",
    "status": "implemented",
    "variantAxes": {
      "No. Options": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    "childCount": 4,
    "descendantCount": 181
  },
  {
    "name": "Action Bar",
    "componentName": "ActionBar",
    "nodeId": "8387:10564",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Navigation Bars",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Dual Actions",
        "Single Action"
      ]
    },
    "childCount": 2,
    "descendantCount": 32
  },
  {
    "name": "Home Indicator",
    "componentName": "HomeIndicator",
    "nodeId": "7407:2043",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Navigation Bars",
    "status": "unmapped",
    "variantAxes": {
      "Dark Mode": [
        "False",
        "True"
      ]
    },
    "childCount": 2,
    "descendantCount": 4
  },
  {
    "name": "Status Bar",
    "componentName": "StatusBar",
    "nodeId": "7407:2080",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Navigation Bars",
    "status": "unmapped",
    "variantAxes": {
      "Dark Mode": [
        "False",
        "True"
      ]
    },
    "childCount": 2,
    "descendantCount": 40
  },
  {
    "name": "Switch",
    "componentName": "Switch",
    "nodeId": "7521:6965",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Switches",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Off",
        "On",
        "Disabled On",
        "Disabled Off"
      ],
      "Dark_Mode": [
        "No"
      ]
    },
    "childCount": 4,
    "descendantCount": 15
  },
  {
    "name": "OTP Input",
    "componentName": "OTPInput",
    "nodeId": "7878:736",
    "nodeType": "COMPONENT",
    "level": "atoms",
    "family": "Text Fields",
    "status": "implemented",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 9
  },
  {
    "name": "OTP Input Box",
    "componentName": "OTPInputBox",
    "nodeId": "7878:668",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "Text Fields",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Enabled",
        "Active",
        "Filled",
        "Filled Error",
        "Active Error"
      ]
    },
    "childCount": 5,
    "descendantCount": 11
  },
  {
    "name": "Avatar",
    "componentName": "GuidanceAvatar",
    "nodeId": "7475:443",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "User Guidance",
    "status": "implemented",
    "variantAxes": {
      "Type_Avatar": [
        "1",
        "2"
      ]
    },
    "childCount": 2,
    "descendantCount": 46
  },
  {
    "name": "Tooltip",
    "componentName": "Tooltip",
    "nodeId": "7443:9977",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "User Guidance",
    "status": "implemented",
    "variantAxes": {
      "Arrow_Placement": [
        "Bottom",
        "Top"
      ],
      "Arrow_Alignment": [
        "Middle",
        "Left",
        "Right"
      ]
    },
    "childCount": 6,
    "descendantCount": 126
  },
  {
    "name": "Avatar",
    "componentName": "UserAvatar",
    "nodeId": "1640:11011",
    "nodeType": "COMPONENT_SET",
    "level": "atoms",
    "family": "User Representation",
    "status": "implemented",
    "variantAxes": {
      "Size": [
        "Big",
        "Medium",
        "Small",
        "X-Small"
      ],
      "Type": [
        "Initials",
        "Avatar"
      ],
      "Avatar": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "None"
      ]
    },
    "childCount": 28,
    "descendantCount": 70
  },
  {
    "name": "SubDetail Row",
    "componentName": "SubDetailRow",
    "nodeId": "7619:3946",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Accordions",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Default",
        "Bold",
        "Accent",
        "Pending"
      ]
    },
    "childCount": 4,
    "descendantCount": 16
  },
  {
    "name": "Action Card",
    "componentName": "ActionCard",
    "nodeId": "7624:3431",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Selected"
      ]
    },
    "childCount": 2,
    "descendantCount": 62
  },
  {
    "name": "Activity Card",
    "componentName": "ActivityCard",
    "nodeId": "8551:12531",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "List",
        "Empty",
        "Loading"
      ]
    },
    "childCount": 3,
    "descendantCount": 110
  },
  {
    "name": "Anti Discrimantion Policy Card",
    "componentName": "AntiDiscrimantionPolicyCard",
    "nodeId": "7619:20527",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Language": [
        "English",
        "Spanish"
      ]
    },
    "childCount": 2,
    "descendantCount": 6
  },
  {
    "name": "Approval Status Cards",
    "componentName": "ApprovalStatusCards",
    "nodeId": "7555:2189",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Approved",
        "Rejected",
        "On Hold"
      ]
    },
    "childCount": 3,
    "descendantCount": 39
  },
  {
    "name": "Approvals Disabled Cards",
    "componentName": "ApprovalsDisabledCards",
    "nodeId": "7619:29339",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 137
  },
  {
    "name": "Attendance Cards",
    "componentName": "AttendanceCards",
    "nodeId": "7554:1968",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Excellent",
        "Good",
        "Okay",
        "Needs Improvement",
        "No Attendance",
        "Disabled"
      ],
      "Style": [
        "Small",
        "Large"
      ]
    },
    "childCount": 10,
    "descendantCount": 133
  },
  {
    "name": "Attendance Report Card",
    "componentName": "AttendanceReportCard",
    "nodeId": "7521:6294",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 5,
    "descendantCount": 205
  },
  {
    "name": "Callout Card",
    "componentName": "CalloutCard",
    "nodeId": "8617:11246",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Size": [
        "Large",
        "Medium",
        "Small"
      ],
      "Style": [
        "Filled Outlined",
        "Filled"
      ],
      "Background": [
        "Accent",
        "Neutral"
      ]
    },
    "childCount": 12,
    "descendantCount": 128
  },
  {
    "name": "Center Payment Overview Card",
    "componentName": "CenterPaymentOverviewCard",
    "nodeId": "7521:8595",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 4,
    "descendantCount": 141
  },
  {
    "name": "Contact Info Card RAF V1",
    "componentName": "ContactInfoCardRAFV1",
    "nodeId": "8041:6017",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Mobile",
        "Tablet/Desktop"
      ]
    },
    "childCount": 2,
    "descendantCount": 276
  },
  {
    "name": "Contact Info Card RAF V2",
    "componentName": "ContactInfoCardRAFV2",
    "nodeId": "9622:5649",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Mobile",
        "Tablet/Desktop"
      ]
    },
    "childCount": 2,
    "descendantCount": 357
  },
  {
    "name": "Credit Details Card",
    "componentName": "CreditDetailsCard",
    "nodeId": "9238:6627",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 67
  },
  {
    "name": "Credit Score Card",
    "componentName": "CreditScoreCard",
    "nodeId": "9236:8712",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Available",
        "Unavailable",
        "Loading"
      ]
    },
    "childCount": 3,
    "descendantCount": 70
  },
  {
    "name": "Disbursement Card",
    "componentName": "DisbursementCard",
    "nodeId": "7619:29835",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 120
  },
  {
    "name": "Feedback Card RAF",
    "componentName": "FeedbackCardRAF",
    "nodeId": "8050:7370",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Tablet/Desktop",
        "Mobile"
      ],
      "State": [
        "Default",
        "Loading"
      ]
    },
    "childCount": 4,
    "descendantCount": 60
  },
  {
    "name": "Goal Progress Cards",
    "componentName": "GoalProgressCards",
    "nodeId": "8550:11176",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Types": [
        "In Progress",
        "Completed",
        "Loading"
      ]
    },
    "childCount": 3,
    "descendantCount": 82
  },
  {
    "name": "Interactive Callout Card",
    "componentName": "InteractiveCalloutCard",
    "nodeId": "9231:6014",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed"
      ]
    },
    "childCount": 2,
    "descendantCount": 24
  },
  {
    "name": "Leaderboard SubCard",
    "componentName": "LeaderboardSubCard",
    "nodeId": "7521:5841",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 3,
    "descendantCount": 49
  },
  {
    "name": "Loan Details Card",
    "componentName": "LoanDetailsCard",
    "nodeId": "8677:11870",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 47
  },
  {
    "name": "Loan Proposal Cards",
    "componentName": "LoanProposalCards",
    "nodeId": "7619:17054",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 133
  },
  {
    "name": "Loan Proposal Details Card",
    "componentName": "LoanProposalDetailsCard",
    "nodeId": "8276:5391",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Info Editable",
        "Single Media",
        "Media Gallery",
        "Info Static"
      ]
    },
    "childCount": 4,
    "descendantCount": 92
  },
  {
    "name": "Loan Request Progress Cards",
    "componentName": "LoanRequestProgressCards",
    "nodeId": "9896:6422",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Loan Amount Change",
        "Vertical Steps",
        "Center Approval"
      ]
    },
    "childCount": 3,
    "descendantCount": 266
  },
  {
    "name": "Loan Status Card",
    "componentName": "LoanStatusCard",
    "nodeId": "7428:9418",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Balance": [
        "Without Interest",
        "With & Without Interest",
        "Disabled",
        "Zero - Completed",
        "Loading"
      ]
    },
    "childCount": 5,
    "descendantCount": 197
  },
  {
    "name": "On Time Percentages SubCard",
    "componentName": "OnTimePercentagesSubCard",
    "nodeId": "7521:5733",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 14
  },
  {
    "name": "Pay Off Card",
    "componentName": "PayOffCard",
    "nodeId": "9832:6788",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 3,
    "descendantCount": 25
  },
  {
    "name": "Payments Cards",
    "componentName": "PaymentsCards",
    "nodeId": "7619:20969",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Welcome & Installment",
        "Payment Complete",
        "Overpayment",
        "Overdue & Incomplete",
        "Zero Balance",
        "Error",
        "Loading"
      ]
    },
    "childCount": 7,
    "descendantCount": 823
  },
  {
    "name": "Pending Approval Cards",
    "componentName": "PendingApprovalCards",
    "nodeId": "7555:3956",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Enabled",
        "Disabled No Content",
        "Disabled Content"
      ]
    },
    "childCount": 3,
    "descendantCount": 171
  },
  {
    "name": "Proof of Investment Cards",
    "componentName": "ProofOfInvestmentCards",
    "nodeId": "7562:4411",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Submit",
        "Complete",
        "Submitting",
        "Error",
        "In Progress"
      ]
    },
    "childCount": 5,
    "descendantCount": 515
  },
  {
    "name": "Questionnaire Cards",
    "componentName": "QuestionnaireCards",
    "nodeId": "8200:6108",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Dropdown",
        "Text Field",
        "Radio",
        "Checkbox",
        "Information"
      ]
    },
    "childCount": 5,
    "descendantCount": 327
  },
  {
    "name": "Repayment Progress Card",
    "componentName": "RepaymentProgressCard",
    "nodeId": "9595:8939",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 4,
    "descendantCount": 36
  },
  {
    "name": "Status Card",
    "componentName": "StatusCard",
    "nodeId": "8626:10325",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 5
  },
  {
    "name": "Card Decoration",
    "componentName": "CardDecoration",
    "nodeId": "7526:3503",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Cards Decoration",
    "status": "unmapped",
    "variantAxes": {
      "Zone": [
        "Side",
        "Corner",
        "Top"
      ],
      "Position": [
        "Right",
        "Left"
      ],
      "Color": [
        "Brand",
        "Yellow",
        "Green",
        "Orange",
        "Red"
      ]
    },
    "childCount": 30,
    "descendantCount": 130
  },
  {
    "name": "Item",
    "componentName": "Item",
    "nodeId": "2270:9246",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Dropdowns",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Disabled"
      ]
    },
    "childCount": 3,
    "descendantCount": 6
  },
  {
    "name": "Items List",
    "componentName": "ItemsList",
    "nodeId": "8841:5874",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Dropdowns",
    "status": "unmapped",
    "variantAxes": {
      "No. Items": [
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "childCount": 4,
    "descendantCount": 32
  },
  {
    "name": "Leaderboard List Item",
    "componentName": "LeaderboardListItem",
    "nodeId": "7505:2956",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "List Items",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 10
  },
  {
    "name": "Transaction list item",
    "componentName": "TransactionListItem",
    "nodeId": "8550:14691",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "List Items",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Deposit",
        "Withdraw",
        "Reward",
        "Loading"
      ]
    },
    "childCount": 4,
    "descendantCount": 44
  },
  {
    "name": "Status Item",
    "componentName": "StatusItem",
    "nodeId": "9848:1378",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Lists",
    "status": "unmapped",
    "variantAxes": {
      "Status": [
        "Completed",
        "Neutral",
        "Attention"
      ]
    },
    "childCount": 3,
    "descendantCount": 58
  },
  {
    "name": "Uploading Items",
    "componentName": "UploadingItems",
    "nodeId": "7570:3595",
    "nodeType": "COMPONENT",
    "level": "molecules",
    "family": "Loading & Progress Indicators",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 6
  },
  {
    "name": "Action List Item",
    "componentName": "ActionListItem",
    "nodeId": "7478:10062",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Selected",
        "Disabled"
      ]
    },
    "childCount": 3,
    "descendantCount": 19
  },
  {
    "name": "Radio Option",
    "componentName": "RadioOption",
    "nodeId": "7623:2272",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Options",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Icon & Description",
        "Avatar"
      ],
      "State": [
        "Default",
        "Pressed",
        "Selected"
      ]
    },
    "childCount": 6,
    "descendantCount": 62
  },
  {
    "name": "Resources Card",
    "componentName": "ResourcesCard",
    "nodeId": "7619:31510",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Resources",
    "status": "unmapped",
    "variantAxes": {
      "States": [
        "Default",
        "Selected"
      ]
    },
    "childCount": 2,
    "descendantCount": 20
  },
  {
    "name": "Search Bar",
    "componentName": "SearchBar",
    "nodeId": "771:4707",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Search Bar",
    "status": "unmapped",
    "variantAxes": {
      "Style": [
        "Light",
        "Dark"
      ],
      "State": [
        "Default",
        "Active",
        "Typing",
        "Filled"
      ]
    },
    "childCount": 8,
    "descendantCount": 92
  },
  {
    "name": "Pill Tabs",
    "componentName": "PillTabs",
    "nodeId": "8362:11310",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Tabs",
    "status": "unmapped",
    "variantAxes": {
      "Tab": [
        "Tab 1",
        "Tab 2",
        "Tab 3",
        "Tab 4"
      ]
    },
    "childCount": 4,
    "descendantCount": 36
  },
  {
    "name": "Segmented Tabs",
    "componentName": "SegmentedTabs",
    "nodeId": "1685:314",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Tabs",
    "status": "unmapped",
    "variantAxes": {
      "Size": [
        "Big",
        "Medium",
        "Small"
      ],
      "Action": [
        "1",
        "2",
        "3"
      ]
    },
    "childCount": 7,
    "descendantCount": 41
  },
  {
    "name": "Password Group Validations",
    "componentName": "PasswordGroupValidations",
    "nodeId": "7460:1057",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Text Fields",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Validations",
        "Requirements Met"
      ]
    },
    "childCount": 2,
    "descendantCount": 31
  },
  {
    "name": "Password Validation",
    "componentName": "PasswordValidation",
    "nodeId": "7452:10660",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Text Fields",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Met Condition",
        "Unmet Condition",
        "Default"
      ]
    },
    "childCount": 3,
    "descendantCount": 15
  },
  {
    "name": "Text Field",
    "componentName": "TextField",
    "nodeId": "7395:1170",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Text Fields",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Enabled",
        "Active",
        "Error",
        "Error Active",
        "Filled",
        "Disabled"
      ]
    },
    "childCount": 6,
    "descendantCount": 194
  },
  {
    "name": "Text Field Box",
    "componentName": "TextFieldBox",
    "nodeId": "2410:9899",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Text Fields",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Medium",
        "Small"
      ],
      "State": [
        "Default",
        "Active",
        "Filled",
        "Error max length",
        "Error required"
      ]
    },
    "childCount": 10,
    "descendantCount": 74
  },
  {
    "name": "Toast",
    "componentName": "Toast",
    "nodeId": "224:4635",
    "nodeType": "COMPONENT_SET",
    "level": "molecules",
    "family": "Toast",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Success",
        "Error",
        "Standard"
      ],
      "Size": [
        "Small",
        "Large"
      ],
      "Dark Mode": [
        "No",
        "Yes"
      ]
    },
    "childCount": 12,
    "descendantCount": 96
  },
  {
    "name": "Information Button",
    "componentName": "InformationButton",
    "nodeId": "7521:7432",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Buttons",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Enabled",
        "Pressed",
        "Tooltip Open"
      ],
      "Text_Size": [
        "Medium",
        "Small"
      ]
    },
    "childCount": 6,
    "descendantCount": 30
  },
  {
    "name": "Informational Card",
    "componentName": "InformationalCard",
    "nodeId": "9243:9011",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Cards",
    "status": "implemented",
    "variantAxes": {
      "Bg_Color": [
        "Blue",
        "Yellow"
      ]
    },
    "childCount": 2,
    "descendantCount": 149
  },
  {
    "name": "App Header",
    "componentName": "AppHeader",
    "nodeId": "7591:5064",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Headers Variations",
    "status": "implemented",
    "variantAxes": {
      "Size": [
        "Large",
        "Medium",
        "Medium Rounded",
        "Small"
      ],
      "Type": [
        "Standard",
        "Informative",
        "Navigational",
        "Profile"
      ]
    },
    "childCount": 13,
    "descendantCount": 805
  },
  {
    "name": "Web Header",
    "componentName": "WebHeader",
    "nodeId": "7994:1560",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Headers Variations",
    "status": "implemented",
    "variantAxes": {
      "Size": [
        "Mobile",
        "Tablet/Desktop"
      ],
      "State": [
        "Default",
        "Loading"
      ]
    },
    "childCount": 4,
    "descendantCount": 28
  },
  {
    "name": "Loan Approval In Progress",
    "componentName": "LoanApprovalInProgress",
    "nodeId": "7575:11565",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Illustrations",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Center Appro. In Progress",
        "Center Appro. On Hold",
        "Amount Needs Approval",
        "Resubmit Documents"
      ]
    },
    "childCount": 4,
    "descendantCount": 445
  },
  {
    "name": "Navigational List Item",
    "componentName": "NavigationalListItem",
    "nodeId": "7428:8728",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "List Items",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed"
      ],
      "Leading": [
        "Icon container",
        "Icon plain",
        "None"
      ]
    },
    "childCount": 6,
    "descendantCount": 50
  },
  {
    "name": "Side Bar Item",
    "componentName": "SideBarItem",
    "nodeId": "7878:9372",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "List Items",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed"
      ],
      "Pressed_Style": [
        "N/A",
        "Standard",
        "Emphasis"
      ]
    },
    "childCount": 3,
    "descendantCount": 24
  },
  {
    "name": "Navigational List",
    "componentName": "NavigationalList",
    "nodeId": "9229:6313",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Lists",
    "status": "implemented",
    "variantAxes": {
      "No.Items": [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    },
    "childCount": 6,
    "descendantCount": 297
  },
  {
    "name": "Standard Bottom Sheet",
    "componentName": "StandardBottomSheet",
    "nodeId": "7482:653",
    "nodeType": "COMPONENT",
    "level": "organisms",
    "family": "Modals & Bottom Sheets",
    "status": "implemented",
    "variantAxes": {},
    "childCount": 3,
    "descendantCount": 25
  },
  {
    "name": "Standard Modal",
    "componentName": "StandardModal",
    "nodeId": "7478:9775",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Modals & Bottom Sheets",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Verical Actions",
        "Horizontal Actions",
        "Bullets",
        "Illustration",
        "Media Top"
      ]
    },
    "childCount": 5,
    "descendantCount": 179
  },
  {
    "name": "Navigation Bar",
    "componentName": "NavigationBar",
    "nodeId": "7407:2558",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Navigation Bars",
    "status": "implemented",
    "variantAxes": {
      "Language": [
        "English",
        "Spanish"
      ],
      "Section": [
        "My Loan",
        "Payments",
        "New Loan",
        "Approvals",
        "Resources",
        "None"
      ]
    },
    "childCount": 12,
    "descendantCount": 450
  },
  {
    "name": "Section Nav Bar",
    "componentName": "SectionBar",
    "nodeId": "7752:2780",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Navigation Bars",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Selected",
        "Default"
      ]
    },
    "childCount": 2,
    "descendantCount": 14
  },
  {
    "name": "Side Bar",
    "componentName": "SideBar",
    "nodeId": "9275:1994",
    "nodeType": "COMPONENT",
    "level": "organisms",
    "family": "Side Bar",
    "status": "implemented",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 102
  },
  {
    "name": "Attendance Report Rows",
    "componentName": "AttendanceReportRows",
    "nodeId": "7486:956",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Content",
        "Header"
      ]
    },
    "childCount": 2,
    "descendantCount": 11
  },
  {
    "name": "Last Payments Rows",
    "componentName": "LastPaymentsRows",
    "nodeId": "8745:10511",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Title",
        "Header",
        "Content"
      ]
    },
    "childCount": 3,
    "descendantCount": 18
  },
  {
    "name": "Mambu Webview Table",
    "componentName": "MambuWebviewTable",
    "nodeId": "8066:5933",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Content",
        "Header",
        "Total"
      ],
      "Size": [
        "Small",
        "Medium"
      ]
    },
    "childCount": 6,
    "descendantCount": 34
  },
  {
    "name": "Past Loans Rows",
    "componentName": "PastLoansRows",
    "nodeId": "7484:1084",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Content",
        "Header"
      ]
    },
    "childCount": 2,
    "descendantCount": 14
  },
  {
    "name": "Payment State Rows/Table Header",
    "componentName": "PaymentStateRowsTableHeader",
    "nodeId": "7483:6447",
    "nodeType": "COMPONENT",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {},
    "childCount": 3,
    "descendantCount": 8
  },
  {
    "name": "Payment Status Row",
    "componentName": "PaymentStatusRow",
    "nodeId": "7484:1012",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "State": [
        "Open",
        "Closed"
      ]
    },
    "childCount": 2,
    "descendantCount": 40
  },
  {
    "name": "Pending Balance Rows",
    "componentName": "PendingBalanceRows",
    "nodeId": "7489:926",
    "nodeType": "COMPONENT_SET",
    "level": "organisms",
    "family": "Tables",
    "status": "implemented",
    "variantAxes": {
      "Type": [
        "Payment Content",
        "Header",
        "Interest Content"
      ]
    },
    "childCount": 3,
    "descendantCount": 21
  },
  {
    "name": "Entry Card RAF",
    "componentName": "EntryCardRAF",
    "nodeId": "7869:3270",
    "nodeType": "COMPONENT_SET",
    "level": "pages",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Selected"
      ]
    },
    "childCount": 2,
    "descendantCount": 40
  },
  {
    "name": "Info Card RAF",
    "componentName": "InfoCardRAF",
    "nodeId": "7997:7159",
    "nodeType": "COMPONENT_SET",
    "level": "pages",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Size": [
        "Large",
        "Medium",
        "Small",
        "Size4",
        "Size5",
        "Size6"
      ],
      "State": [
        "Default",
        "Loading"
      ]
    },
    "childCount": 6,
    "descendantCount": 2358
  },
  {
    "name": "Profile Info Card",
    "componentName": "ProfileInfoCard",
    "nodeId": "7856:3258",
    "nodeType": "COMPONENT_SET",
    "level": "pages",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Expanded"
      ]
    },
    "childCount": 2,
    "descendantCount": 100
  },
  {
    "name": "Info Card",
    "componentName": "InfoCard",
    "nodeId": "7623:2553",
    "nodeType": "COMPONENT_SET",
    "level": "pages",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Informative",
        "Selectable"
      ]
    },
    "childCount": 2,
    "descendantCount": 40
  },
  {
    "name": "Navigational Bottom Sheet",
    "componentName": "NavigationalBottomSheet",
    "nodeId": "7623:2618",
    "nodeType": "COMPONENT_SET",
    "level": "pages",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Content Summary",
        "Text Field Box",
        "List",
        "Loading List",
        "Loading Full"
      ]
    },
    "childCount": 5,
    "descendantCount": 259
  },
  {
    "name": "Avatar Profile",
    "componentName": "AvatarProfile",
    "nodeId": "7874:467",
    "nodeType": "COMPONENT",
    "level": "pages",
    "family": "User Representation",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 8
  },
  {
    "name": "Accordion",
    "componentName": "Accordion",
    "nodeId": "7538:2205",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Accordions",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Open",
        "Disabled"
      ]
    },
    "childCount": 4,
    "descendantCount": 72
  },
  {
    "name": "Detail Group",
    "componentName": "DetailGroup",
    "nodeId": "7642:3343",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Accordions",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Neutral",
        "Highlight",
        "Alert"
      ]
    },
    "childCount": 3,
    "descendantCount": 59
  },
  {
    "name": "Language Accordion",
    "componentName": "LanguageAccordion",
    "nodeId": "9274:12332",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Accordions",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Open"
      ]
    },
    "childCount": 3,
    "descendantCount": 41
  },
  {
    "name": "Notification before",
    "componentName": "NotificationBefore",
    "nodeId": "2870:5753",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Cards",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Resquested Loan",
        "Loan Approval Pending",
        "Weekly Payment",
        "Loan Renewal",
        "Center Meeting"
      ],
      "State": [
        "Read",
        "Unread"
      ]
    },
    "childCount": 10,
    "descendantCount": 149
  },
  {
    "name": "Attendance Indicator",
    "componentName": "AttendanceIndicator",
    "nodeId": "7415:11628",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Data Visualization",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Excellent - Star Member",
        "Good",
        "Okay",
        "Needs Improvement",
        "Pending"
      ]
    },
    "childCount": 5,
    "descendantCount": 553
  },
  {
    "name": "Credit Donut Graph",
    "componentName": "CreditDonutGraph",
    "nodeId": "9320:6548",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Data Visualization",
    "status": "unmapped",
    "variantAxes": {
      "Language": [
        "Spanish",
        "English"
      ]
    },
    "childCount": 2,
    "descendantCount": 57
  },
  {
    "name": "Credit Score Gauge (Half Donut)",
    "componentName": "CreditScoreGaugeHalfDonut",
    "nodeId": "9201:8581",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Data Visualization",
    "status": "unmapped",
    "variantAxes": {
      "Score_Range": [
        "None",
        "Excellent Max",
        "Excellent",
        "Very Good",
        "Good",
        "Fair",
        "Poor",
        "Loading"
      ]
    },
    "childCount": 8,
    "descendantCount": 134
  },
  {
    "name": "Dropdown",
    "componentName": "Dropdown",
    "nodeId": "2270:9220",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Dropdowns",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Enabled",
        "Pressed",
        "Open",
        "Selected",
        "Error",
        "Error Disabled",
        "Disabled"
      ]
    },
    "childCount": 7,
    "descendantCount": 63
  },
  {
    "name": "Language Dropdown Open",
    "componentName": "LanguageDropdownOpen",
    "nodeId": "7991:467",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Dropdowns",
    "status": "unmapped",
    "variantAxes": {
      "State": [
        "Default",
        "Pressed",
        "Open",
        "Open Pressed 1",
        "Open Pressed 2",
        "Loading"
      ]
    },
    "childCount": 6,
    "descendantCount": 59
  },
  {
    "name": "Approvals Disabled",
    "componentName": "ApprovalsDisabled",
    "nodeId": "7619:24001",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Purpose": [
        "Not Eligible",
        "Overdue Payment"
      ]
    },
    "childCount": 2,
    "descendantCount": 224
  },
  {
    "name": "Credit Announcement Illustration",
    "componentName": "CreditAnnouncementIllustration",
    "nodeId": "9244:9896",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 23
  },
  {
    "name": "Credit Collection Illustration",
    "componentName": "CreditCollectionIllustration",
    "nodeId": "9296:6309",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 10
  },
  {
    "name": "Credit Insights Illustration",
    "componentName": "CreditInsightsIllustration",
    "nodeId": "9243:8891",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 116
  },
  {
    "name": "Credit Report Illustration",
    "componentName": "CreditReportIllustration",
    "nodeId": "9243:6981",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 29
  },
  {
    "name": "Disbursement",
    "componentName": "Disbursement",
    "nodeId": "7619:22497",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Ready",
        "Disbursed",
        "Pending",
        "Error"
      ]
    },
    "childCount": 4,
    "descendantCount": 423
  },
  {
    "name": "Empty State Loan Approvals in Progress",
    "componentName": "EmptyStateLoanApprovalsInProgress",
    "nodeId": "9858:7482",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 5,
    "descendantCount": 132
  },
  {
    "name": "Error Loading Info",
    "componentName": "ErrorLoadingInfo",
    "nodeId": "8809:10936",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Error Persists",
        "Error"
      ]
    },
    "childCount": 2,
    "descendantCount": 345
  },
  {
    "name": "Feedback",
    "componentName": "Feedback",
    "nodeId": "7996:63819",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Success",
        "Error",
        "Information"
      ],
      "Size": [
        "Small",
        "Medium",
        "Large"
      ]
    },
    "childCount": 9,
    "descendantCount": 81
  },
  {
    "name": "Instruction Illustration",
    "componentName": "InstructionIllustration",
    "nodeId": "8291:8919",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Proof of Address",
        "ID",
        "Proof of Investment"
      ]
    },
    "childCount": 3,
    "descendantCount": 103
  },
  {
    "name": "Inviter-Recom. a Friend",
    "componentName": "InviterRecomAFriend",
    "nodeId": "7868:3350",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Shortcut",
        "Invite"
      ]
    },
    "childCount": 2,
    "descendantCount": 491
  },
  {
    "name": "Loan Progress",
    "componentName": "LoanProgress",
    "nodeId": "9894:13516",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Loan Amount Change",
        "Center Approval"
      ]
    },
    "childCount": 2,
    "descendantCount": 212
  },
  {
    "name": "Loan Proposal",
    "componentName": "LoanProposal",
    "nodeId": "1958:3239",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Loan Amount",
        "Questionnaire",
        "Questionnaire Complete",
        "ID Verification",
        "Proof of Address",
        "Continue Process",
        "Vertical Steps"
      ]
    },
    "childCount": 7,
    "descendantCount": 824
  },
  {
    "name": "New feature Announcement",
    "componentName": "NewFeatureAnnouncement",
    "nodeId": "7868:3385",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 6,
    "descendantCount": 20
  },
  {
    "name": "Onboarding",
    "componentName": "Onboarding",
    "nodeId": "8110:49471",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Community",
        "Grameen Experience",
        "Manage Loan",
        "Request & Approve",
        "Resources"
      ]
    },
    "childCount": 5,
    "descendantCount": 1411
  },
  {
    "name": "Overpayment Assignment Error",
    "componentName": "OverpaymentAssignmentError",
    "nodeId": "9346:1107",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Error Persists",
        "Error"
      ]
    },
    "childCount": 2,
    "descendantCount": 216
  },
  {
    "name": "Payment Overview",
    "componentName": "PaymentOverview",
    "nodeId": "7423:9744",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Complete",
        "In Progress"
      ]
    },
    "childCount": 2,
    "descendantCount": 282
  },
  {
    "name": "Payments",
    "componentName": "Payments",
    "nodeId": "7423:5944",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Next Weekly Payment",
        "Payment Complete"
      ]
    },
    "childCount": 2,
    "descendantCount": 376
  },
  {
    "name": "Proof of Investment",
    "componentName": "ProofOfInvestment",
    "nodeId": "7619:17950",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Submit",
        "Submitting",
        "Error",
        "Error Persists",
        "Complete"
      ]
    },
    "childCount": 5,
    "descendantCount": 431
  },
  {
    "name": "Recipient Info-Recom. a Friend",
    "componentName": "RecipientInfoRecomAFriend",
    "nodeId": "7996:69716",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Center",
        "Journey",
        "Grameen App"
      ],
      "Size": [
        "Large",
        "Medium",
        "Small"
      ]
    },
    "childCount": 9,
    "descendantCount": 4338
  },
  {
    "name": "Savings Beneficiary",
    "componentName": "SavingsBeneficiary",
    "nodeId": "8626:387",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 178
  },
  {
    "name": "Savings Locked",
    "componentName": "SavingsLocked",
    "nodeId": "9656:434",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 5,
    "descendantCount": 9
  },
  {
    "name": "Sign In",
    "componentName": "SignIn",
    "nodeId": "8110:49472",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 1,
    "descendantCount": 298
  },
  {
    "name": "Update or Maintenance",
    "componentName": "UpdateOrMaintenance",
    "nodeId": "9610:1333",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 3,
    "descendantCount": 120
  },
  {
    "name": "Zero Balance",
    "componentName": "ZeroBalance",
    "nodeId": "7619:24960",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Illustrations",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Eligible",
        "Not Eligible",
        "Vertcial Steps"
      ]
    },
    "childCount": 3,
    "descendantCount": 413
  },
  {
    "name": "Bullet List",
    "componentName": "BulletList",
    "nodeId": "7636:3915",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Lists",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Default",
        "Emphasized"
      ],
      "Marker": [
        "Accent",
        "Neutral",
        "Icon"
      ],
      "No. Bullets": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "childCount": 30,
    "descendantCount": 384
  },
  {
    "name": "Transaction List",
    "componentName": "TransactionList",
    "nodeId": "8550:14845",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Lists",
    "status": "unmapped",
    "variantAxes": {
      "No. Rows": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "childCount": 5,
    "descendantCount": 180
  },
  {
    "name": "Vertical Steps",
    "componentName": "VerticalSteps",
    "nodeId": "9189:602",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Lists",
    "status": "unmapped",
    "variantAxes": {
      "Size": [
        "Small",
        "Medium"
      ],
      "No.Step": [
        "1",
        "2",
        "3"
      ]
    },
    "childCount": 6,
    "descendantCount": 91
  },
  {
    "name": "Circular Progress Higlight",
    "componentName": "CircularProgressHiglight",
    "nodeId": "9592:5667",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Loading & Progress Indicators",
    "status": "unmapped",
    "variantAxes": {
      "Style": [
        "Teal",
        "Blue"
      ],
      "Progress": [
        "0%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%"
      ]
    },
    "childCount": 22,
    "descendantCount": 146
  },
  {
    "name": "Circular Progress Standard",
    "componentName": "CircularProgressStandard",
    "nodeId": "7427:8130",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Loading & Progress Indicators",
    "status": "unmapped",
    "variantAxes": {
      "Size": [
        "Small",
        "Medium",
        "Large"
      ],
      "Progress": [
        "0%",
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%"
      ]
    },
    "childCount": 33,
    "descendantCount": 219
  },
  {
    "name": "Member Progress Bar",
    "componentName": "MemberProgressBar",
    "nodeId": "7413:182",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Loading & Progress Indicators",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Large",
        "Medium",
        "Small"
      ],
      "Status": [
        "Excellent",
        "Good",
        "Okay",
        "Needs Improvement",
        "Pending"
      ]
    },
    "childCount": 15,
    "descendantCount": 41
  },
  {
    "name": "Progress Bar",
    "componentName": "ProgressBar",
    "nodeId": "7414:792",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Loading & Progress Indicators",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Large",
        "Medium",
        "Small"
      ],
      "Percentage": [
        "100%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "0%"
      ]
    },
    "childCount": 33,
    "descendantCount": 95
  },
  {
    "name": "Action Bottom Sheet",
    "componentName": "ActionBottomSheet",
    "nodeId": "9286:11281",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Default",
        "Item 1 Selected",
        "Item 2 Selected",
        "Informational",
        "Loading",
        "Status Outcome"
      ]
    },
    "childCount": 6,
    "descendantCount": 253
  },
  {
    "name": "Confirmation Bottom Sheet",
    "componentName": "ConfirmationBottomSheet",
    "nodeId": "9869:8177",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Standard",
        "Attention"
      ]
    },
    "childCount": 2,
    "descendantCount": 70
  },
  {
    "name": "Error Handling",
    "componentName": "ErrorHandling",
    "nodeId": "7483:941",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Warning",
        "Standard",
        "Drastic Error",
        "Fatal Error"
      ]
    },
    "childCount": 4,
    "descendantCount": 68
  },
  {
    "name": "NPS Bottom Sheet",
    "componentName": "NPSBottomSheet",
    "nodeId": "7673:5354",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Modals & Bottom Sheets",
    "status": "unmapped",
    "variantAxes": {
      "Content": [
        "Checkbox List",
        "Date Picker",
        "Light NPS",
        "Dark NPS",
        "Additional Comments NPS",
        "Success NPS"
      ]
    },
    "childCount": 6,
    "descendantCount": 594
  },
  {
    "name": "Options",
    "componentName": "Options",
    "nodeId": "7622:5290",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Options",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Navigate",
        "Select",
        "Agreement"
      ],
      "Text_Style": [
        "Emphasized",
        "Standard"
      ],
      "Selection_Type": [
        "Radio",
        "Checkbox",
        "N/A"
      ],
      "State": [
        "Default",
        "Pressed",
        "Selected"
      ]
    },
    "childCount": 13,
    "descendantCount": 129
  },
  {
    "name": "Rating Slider",
    "componentName": "RatingSlider",
    "nodeId": "7671:3685",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Sliders",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Dark",
        "Light"
      ],
      "Position": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Default"
      ]
    },
    "childCount": 24,
    "descendantCount": 572
  },
  {
    "name": "Value Slider",
    "componentName": "ValueSlider",
    "nodeId": "7674:4259",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Sliders",
    "status": "unmapped",
    "variantAxes": {
      "Position": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
      ]
    },
    "childCount": 11,
    "descendantCount": 173
  },
  {
    "name": "Stepper",
    "componentName": "Stepper",
    "nodeId": "7411:510",
    "nodeType": "COMPONENT_SET",
    "level": "needs_review",
    "family": "Stepper",
    "status": "unmapped",
    "variantAxes": {
      "Type": [
        "Light",
        "Dark"
      ],
      "No. Step": [
        "1",
        "2",
        "3"
      ]
    },
    "childCount": 6,
    "descendantCount": 150
  },
  {
    "name": "Message Bubble",
    "componentName": "MessageBubble",
    "nodeId": "7475:706",
    "nodeType": "COMPONENT",
    "level": "needs_review",
    "family": "User Guidance",
    "status": "unmapped",
    "variantAxes": {},
    "childCount": 2,
    "descendantCount": 43
  }
];
