export const testimonials = [
  {
    id: 0,
    question: "為什麼我該選擇新葉銀行？",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 1,
    question: "信用卡的年費是多少？",
    answer: "The annual fee for the credit card is $100.",
  },
  {
    id: 2,
    question: "回饋金有多少上限？",
    answer: "The cashback limit is $500 per year.",
  },
  {
    id: 3,
    question: "智慧卡支援哪些電子票證？",
    asnwer: "The smart card supports EZ-Link and NETS FlashPay.",
  },
  {
    id: 4,
    question: "支援哪些行動支付？",
    answer: "Apple Pay, Google Pay, and Samsung Pay are supported.",
  },
];

export const routes = [
  {
    name: "信用卡",
    path: "/credit-card",
    children: [
      {
        name: "介紹",
        path: "/introduction",
      },
      {
        name: "特約商店",
        path: "/partner-stores",
      },
      {
        name: "活動",
        path: "/activities",
      },
      {
        name: "行動支付",
        path: "/mobile-payment",
      },
    ],
  },
  {
    name: "儲蓄",
    path: "/savings",
    children: [
      {
        name: "定期存款",
        path: "/savings/fixed-deposit",
      },
      {
        name: "活期存款",
        path: "/savings/current-deposit",
      },
      {
        name: "加密貨幣存款",
        path: "/savings/cryptocurrency-deposit",
      },
    ],
  },
  {
    name: "資訊",
    path: "/information",
    children: [
      {
        name: "關於本銀行",
        path: "/information/about-us",
      },
      {
        name: "據點",
        path: "/information/locations",
      },
      {
        name: "自動櫃員機",
        path: "/information/atms",
      },
      {
        name: "支援服務",
        path: "/information/support",
      },
    ],
  },
];

export const cards = [
  {
    id: 0,
    title: "簽帳金融卡",
    description:
      "有多少、用多少，回饋即時入帳，是即刻踏入 數位金融新生活的不二首選。",
    brand: {
      linear_card_color:
        "214deg, #E4FF32 12.97%, #D6EF34 32.51%, #D6EF34 50.92%",
      bg: "#9DB10C",
    },
  },
  {
    id: 1,
    title: "簽帳金融卡",
    description:
      "有多少、用多少，回饋即時入帳，是即刻踏入 數位金融新生活的不二首選。",
    brand: {
      linear_card_color: "207deg, #FFF 13.39%, #F7F7F7 25.26%, #EEE 44.62%",
      bg: "#D0D0CD",
    },
  },
  {
    id: 2,
    title: "簽帳金融卡",
    description:
      "有多少、用多少，回饋即時入帳，是即刻踏入 數位金融新生活的不二首選。",
    brand: {
      linear_card_color:
        "229deg, #2D2D2D 7.88%, #2E2E2E 41.79%, #2D2D2D 78.49%",
      bg: "#131313",
    },
  },
];

export const services = [
  {
    id: 0,
    title: "行動與網路銀行",
    description:
      "新葉銀行專為瞬息萬變的 21 世紀打造。我們高度最佳化的網路、行動銀行服務，能成為節奏快速的現代生活中所有人的良伴。",
  },
  {
    id: 1,
    title: "儲蓄",
    description:
      "新葉銀行專為瞬息萬變的 21 世紀打造。我們高度最佳化的網路、行動銀行服務，能成為節奏快速的現代生活中所有人的良伴。",
  },
  {
    id: 2,
    title: "簽帳卡與信用卡",
    description: "簽帳卡與信用卡",
  },

  {
    id: 4,
    title: "加密貨幣交易",
    description: "加密貨幣交易",
  },
  {
    id: 5,
    title: "行動支付",
    description: "",
  },
];

import nature from "@/assets/images/brands/nature.png";
import starCircle from "@/assets/images/brands/starcircle.png";
import redfox from "@/assets/images/brands/redfox.png";
import eletric from "@/assets/images/brands/eletric.png";
import moon from "@/assets/images/brands/moon.png";

export const partnerbrands = [
  {
    id: 0,
    name: "Nature",
    image: nature.src,
  },
  {
    id: 1,
    name: "Star Circle",
    image: starCircle.src,
  },
  {
    id: 2,
    name: "Red Fox",
    image: redfox.src,
  },
  {
    id: 3,
    name: "Eletric",
    image: eletric.src,
  },
  {
    id: 4,
    name: "Moon",
    image: moon.src,
  },
];
