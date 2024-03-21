import {
  notificationIcon,
  whisperIcon,
  bitsIcon,
  channelIcon,
  videoIcon,
  creatorIcon,
  subscriptionIcon,
  dropsIcon,
  settingsIcon,
  languageIcon,
  logoutIcon,
  profilePic,
} from "./Icons";

export const NAV_ITEMS_LEFT = [
  {
    name: "General",
    items: [
      "About",
      "Advertisers",
      "Blog",
      "Developers",
      "Download Apps",
      "Gift Card",
      "Jobs",
      "Music on Twitch",
      "Partners",
    ],
  },
  {
    name: "Help & Legal",
    items: [
      "Accessibility Statement",
      "Ad Choices",
      "Community Guidelines",
      "Cookie Policy",
      "Help",
      "Privacy Policy",
      "Terms",
    ],
  },
] as const;

export const NAV_ITEMS_RIGHT = [
  {
    name: "Notifications",
    iconPath: notificationIcon,
    hasSubmenu: false,
  },
  {
    name: "Whispers",
    iconPath: whisperIcon,
    hasSubmenu: false,
  },
  {
    name: "Get Bits",
    iconPath: bitsIcon,
    hasSubmenu: false,
  },
  {
    name: "Profile Pic",
    iconPath: profilePic,
    hasSubmenu: false,
    submenuItems: [
      {
        items: [
          {
            name: "parth.webdev",
            iconPath: profilePic,
          },
        ],
      },
      {
        items: [
          {
            name: "Channel",
            iconPath: channelIcon,
          },
          {
            name: "Video Producer",
            iconPath: videoIcon,
          },
          {
            name: "Creator Dashboard",
            iconPath: creatorIcon,
          },
        ],
      },
      {
        items: [
          {
            name: "Subscription",
            iconPath: subscriptionIcon,
          },
          {
            name: "Drops & Rewards",
            iconPath: dropsIcon,
          },
        ],
      },
      {
        items: [
          {
            name: "Settings",
            iconPath: settingsIcon,
          },
          {
            name: "Language",
            iconPath: languageIcon,
          },
          {
            name: "Log out",
            iconPath: logoutIcon,
          },
        ],
      },
    ],
  },
] as const;
