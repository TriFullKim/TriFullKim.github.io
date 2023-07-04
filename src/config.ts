import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "http://blog.kth01.xyz/",
  author: "Taehoon Kim",
  desc: "이것저것 그냥 블로그",
  title: "TriFullKim",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["ko-KR"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 203,
  height: 65,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/TriFullKim",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TriFullKim",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/trifullkim/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:iam@kth01.xyz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/TriFullKim",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
