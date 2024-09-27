"use client";

import FAQAccordion, { FAQItem } from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

const navItems = [
  {
    id: 1,
    img: "/owl.svg",
    href: "http://Dexscreener.com",
  },
  {
    id: 2,
    img: "/telegram.svg",
    href: "https://t.me/+hF1u_RMmV8ozNDIx",
  },
  {
    id: 3,
    img: "/buy.svg",
    href: "http://Jup.ag",
  },
  {
    id: 4,
    img: "/twit.svg",
    href: "https://x.com/calibratesolana?s=09",
  },
];

const solItems = [
  {
    title: "Download Phantom wallet:",
    img: "/solitem1.jpg",
  },
  {
    title: "Get some SOL and send to phantom wallet:",
    img: "/solitem2.jpg",
  },
  {
    title: "SWAP SOL for Calibrate:",
    img: "/solitem3.jpg",
  },
  {
    title: "BREATHE:",
    img: "/solitem4.jpg",
  },
];

const faqData: FAQItem[] = [
  { question: "Altcoin", answer: "Any cryptocurrency that isn’t Bitcoin." },
  {
    question: "Ape in/Aping",
    answer: "Jumping into a crypto investment with little to no research.",
  },
  {
    question: "Bagholder",
    answer:
      "Someone holding a large amount of a coin, especially if its value has plummeted.",
  },
  {
    question: "Crypto Winter",
    answer:
      "A prolonged period of stagnant or declining market prices in the cryptocurrency world.",
  },
  {
    question: "DeFi",
    answer:
      "Decentralized Finance - financial services with no central authority.",
  },
  {
    question: "Diamond Hands",
    answer:
      "Holding an investment despite potential losses or volatility, believing in its eventual profit.",
  },
  {
    question: "DYOR",
    answer:
      "Do Your Own Research - a disclaimer advising investors to research before investing.",
  },
  {
    question: "Fiat",
    answer: "Government-issued currency, not backed by a physical commodity.",
  },
  {
    question: "FOMO",
    answer:
      "Fear Of Missing Out - the anxiety that an exciting or interesting event is currently happening elsewhere, often aroused by posts seen on social media.",
  },
  {
    question: "FUD",
    answer:
      "Fear, Uncertainty, Doubt - spreading negativity or doubt without basis to manipulate the market.",
  },
  {
    question: "Gas Fees",
    answer: "Transaction fees on a blockchain, particularly Ethereum.",
  },
  {
    question: "HODL",
    answer:
      "Originally a misspelling of “hold,” now a term for holding a cryptocurrency long-term rather than selling it. The origins stem from OG Bitcoin forum: BitcoinTalk.",
  },
  {
    question: "ICO",
    answer:
      "Initial Coin Offering - a fundraising mechanism for new projects, similar to an initial public offering in the stock market.",
  },
  {
    question: "Jeet",
    answer:
      "Person who quickly sells when market gets rough. Origin from Indian name “Pajeet”.",
  },
  {
    question: "Lambo",
    answer:
      "Short for Lamborghini, symbolizing the ultimate crypto success fantasy.",
  },
  {
    question: "Liquidity",
    answer:
      "The ease with which a cryptocurrency can be bought and sold without affecting its price.",
  },
  {
    question: "Maxi",
    answer:
      "Shortened form of a maximalist, especially referring to proponents of a specific cryptocurrency.",
  },
  {
    question: "Maximalist",
    answer:
      "A person who believes 'XYZ' crypto is the only cryptocurrency worth investing in.",
  },
  {
    question: "Moon/Mooning",
    answer: "A dramatic rise in a cryptocurrency’s price.",
  },
  {
    question: "NFT",
    answer:
      "Non-Fungible Token - a unique digital item such as art, collectibles, or in-game items.",
  },
  {
    question: "NGMI",
    answer:
      "Not Gonna Make It - pessimism about the future success of a project or individual in the crypto space.",
  },
  {
    question: "Paper Hands",
    answer:
      "Selling off cryptocurrencies at the first sign of a price drop, opposite of diamond hands.",
  },
  {
    question: "Rug Pull",
    answer:
      "A scam where developers abandon a project and run away with investors’ funds.",
  },
  {
    question: "Satoshi Nakamoto",
    answer: "The pseudonymous creator(s) of Bitcoin.",
  },
  {
    question: "Shill",
    answer: "Promoting a crypto project for personal gain.",
  },
  {
    question: "Stablecoin",
    answer:
      "A cryptocurrency pegged to a stable asset, like the US dollar, to minimize price volatility.",
  },
  {
    question: "Tokenomics",
    answer:
      "The economics of a cryptocurrency, including supply, distribution, and how it can be used.",
  },
  {
    question: "WAGMI",
    answer:
      "We’re All Gonna Make It; communal optimism in the crypto community.",
  },
  {
    question: "Whale",
    answer:
      "An investor with a large amount of cryptocurrency, capable of moving the market.",
  },
  {
    question: "Yield Farming",
    answer:
      "Earning interest or rewards by locking up cryptocurrencies, often in DeFi applications.",
  },
];
export default function Home() {
  // const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   const text = "GDDWwLFabmv5Dc7hkZQMjJsmfyw41krWhQw7LN2R43yF";
  //   navigator.clipboard.writeText(text).then(() => {
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   });
  // };
  return (
    <div className="py-8 lg:px-[88px] max-w-[1440px] mx-auto w-full flex flex-col gap-16 lg:gap-[126px] ">
      <div className="flex  items-center gap-4 justify-center w-full">
        {navItems.map((item, key) => (
          <Link href={`${item.href}`} target="_blank" key={key}>
            <Image
              src={item.img}
              alt="nav_item"
              width={50}
              height={50}
              className="max-lg:h-8 max-lg:w-8"
            />
          </Link>
        ))}
      </div>
      <div className="w-full  px-8 mx-auto max-w-[760px] max-h-[351.047px] overflow-hidden h-full bg-[#ece6d9] rounded-xl flex items-center justify-center ">
        <Image
          src={"/heroimage.jpg"}
          alt="cat"
          width={296}
          height={319.404}
          className="w-[296px] object-contain"
        />
      </div>
      <div className="flex  px-8 flex-col gap-8 lg:gap-14 max-w-[476px] mx-auto">
        {/* <Link
          href={
            "https://jup.ag/swap/GDDWwLFabmv5Dc7hkZQMjJsmfyw41krWhQw7LN2R43yF-SOL"
          }
          target="_blank"
        >
          <button className="button w-full">BUY </button>
        </Link>
        <button onClick={handleCopy} className="button">
          {copied ? "Copied!" : " COPY CA "}
        </button> */}
        <div className="px-2 ">
          <div className="w-full flex items-center justify-center">
            <video
              src="/catvideo.mp4"
              muted
              controls
              className="max-w-[496px] w-full max-h-[305px] h-full"
            ></video>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[42px] font-semibold">HOW TO BUY</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14  px-8">
        {solItems.map((item, key) => (
          <div
            key={key}
            className="bg-[#605d58] border-4 border-white shadow-xl rounded-xl px-4 py-8 min-h-[239.296px]"
          >
            <img
              src={item.img}
              alt=""
              className="aspect-video object-cover origin-top"
            />
            <div className="flex items-start justify-start flex-col gap-2.5 mt-4">
              <h2 className="text-sm leading-[32px] text-white">
                {item.title}
              </h2>
              <div className="w-full h-1 bg-white"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 bg-black bg-opacity-75 p-4 lg:py-8 px-8 rounded-md">
        <h2 className="text-3xl leading-8 font-semibold">What is Calibrate</h2>
        <FAQAccordion faqData={faqData} />
      </div>

      <div className="w-full flex items-center justify-center mb-20 ">
        <Image src={"/footer.svg"} alt="nav_item" width={1060} height={184} />
      </div>
    </div>
  );
}
