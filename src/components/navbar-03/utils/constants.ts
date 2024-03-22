import {
  channelIcon,
  videoIcon,
  creatorIcon,
  subscriptionIcon,
  dropsIcon,
  settingsIcon,
  languageIcon,
  logoutIcon,
  profilePic,
  notificationIcon,
  whisperIcon,
  bitsIcon,
  adIcon,
} from "./Icons";

interface DropdownItem {
  label: string;
  iconPath?: string;
}

export interface Dropdown {
  section?: string;
  items: DropdownItem[];
}

export const RIGHT_NAV_ITEMS = [
  {
    name: "Notifications",
    iconPath: notificationIcon,
  },
  {
    name: "Whispers",
    iconPath: whisperIcon,
  },
  {
    name: "Get Bits",
    iconPath: bitsIcon,
  },
  {
    name: "Get Ad-Free",
    iconPath: adIcon,
  },
];

export const MORE_MENU_DROPDOWN: Dropdown[] = [
  {
    section: "General",
    items: [
      { label: "About" },
      { label: "Advertisers" },
      { label: "Blog" },
      { label: "Developers" },
      { label: "Download Apps" },
      { label: "Gift Card" },
      { label: "Jobs" },
      { label: "Music on Twitch" },
      { label: "Partners" },
    ],
  },
  {
    section: "Help & Legal",
    items: [
      { label: "Accessibility Statement" },
      { label: "Ad Choices" },
      { label: "Community Guidelines" },
      { label: "Cookie Policy" },
      { label: "Help" },
      { label: "Privacy Policy" },
      { label: "Terms" },
    ],
  },
];

export const PROFILE_MENU_DROPDOWN: Dropdown[] = [
  {
    items: [{ label: "parthwebdev", iconPath: profilePic }],
  },
  {
    items: [
      { label: "Channel", iconPath: channelIcon },
      { label: "Video Producer", iconPath: videoIcon },
      { label: "Creator Dashboard", iconPath: creatorIcon },
    ],
  },
  {
    items: [
      { label: "Subscription", iconPath: subscriptionIcon },
      { label: "Drops & Rewards", iconPath: dropsIcon },
    ],
  },
  {
    items: [
      { label: "Settings", iconPath: settingsIcon },
      { label: "Language", iconPath: languageIcon },
      { label: "Log out", iconPath: logoutIcon },
    ],
  },
];
