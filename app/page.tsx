import FAQAccordion, { FAQItem } from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    img: "/owl.svg",
    href: "",
  },
  {
    id: 2,
    img: "/telegram.svg",
    href: "",
  },
  {
    id: 3,
    img: "/buy.svg",
    href: "",
  },
  {
    id: 4,
    img: "/twit.svg",
    href: "",
  },
];

const solItems = [
  {
    title: "Download Phantom wallet:",
    img: "",
  },
  {
    title: "Get some SOL and send to phantom wallet:",
    img: "",
  },
  {
    title: "SWAP SOL for CALA:",
    img: "",
  },
  {
    title: "BREATHE:",
    img: "",
  },
];

const faqData: FAQItem[] = [
  { question: "Altcoin", answer: "..." },
  { question: "Ape in/Aping", answer: "..." },
  { question: "Bagholder", answer: "..." },
  { question: "Crypto Winter", answer: "..." },
  { question: "DeFi", answer: "..." },
  { question: "Diamond Hands", answer: "..." },
  { question: "DYOR", answer: "..." },
  { question: "Fiat", answer: "..." },
  { question: "FOMO", answer: "..." },
  { question: "FUD", answer: "..." },
  { question: "Gas Fees", answer: "..." },
  { question: "HODL", answer: "..." },
  { question: "ICO", answer: "..." },
  { question: "Jeet", answer: "..." },
  { question: "Lambo", answer: "..." },
  { question: "Liquidity", answer: "..." },
  { question: "Maxi", answer: "..." },
  { question: "Maximalist", answer: "..." },
  { question: "Moon/Mooning", answer: "..." },
  { question: "NFT", answer: "..." },
  { question: "NGMI", answer: "..." },
  { question: "Paper Hands", answer: "..." },
  { question: "Rug Pull", answer: "..." },
  { question: "Satoshi Nakamoto", answer: "..." },
  { question: "Shill", answer: "..." },
  { question: "Stablecoin", answer: "..." },
  { question: "Tokenomics", answer: "..." },
  { question: "WAGMI", answer: "..." },
  { question: "Whale", answer: "..." },
  { question: "Yield Farming", answer: "..." },
];
export default function Home() {
  return (
    <div className="py-8 px-8 lg:px-[88px] max-w-[1440px] mx-auto w-full flex flex-col gap-16 lg:gap-[126px]">
      <div className="flex items-center gap-4 justify-center w-full">
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
      <div className="w-full mx-auto max-w-[760px] max-h-[351.047px] overflow-hidden h-full bg-[#ece6d9] rounded-xl flex items-center justify-center ">
        <Image
          src={"/cat.svg"}
          alt="cat"
          width={296}
          height={319.404}
          className="w-[296px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-8 lg:gap-14 max-w-[476px] mx-auto">
        <button className="button ">BUY $CALA</button>
        <button className="button">COPY CA</button>
        <div className="px-2">
          <Image
            src={"/WE GO MEOW.svg"}
            alt="we go meow"
            width={496}
            height={78}
            className="w-[496px] h-[78px] "
          />
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
      <div className="w-full flex items-center justify-center">
        <Image
          src={"/howtobuy.svg"}
          alt="we go meow"
          width={496}
          height={78}
          className="max-w-[1176px] w-full h-full max-h-[126px] shadow-md max-lg:py-2"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {solItems.map((item, key) => (
          <div
            key={key}
            className="bg-[#605d58] border-4 border-white shadow-xl rounded-xl px-4 py-8 min-h-[239.296px]"
          >
            <div className="flex items-start justify-start flex-col gap-2.5">
              <h2 className="text-sm leading-[32px] text-white">
                {item.title}
              </h2>
              <div className="w-full h-1 bg-white"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <h2 className="text-2xl leading-8 font-semibold text-[#1E2025]">
          Frequently used crypto terms
        </h2>
        <p className="text-base leading-6 font-normal">We go meow!!!</p>
        <FAQAccordion faqData={faqData} />
      </div>

      <div className="w-full flex items-center justify-center mb-20">
        <Image src={"/footer.svg"} alt="nav_item" width={1060} height={184} />
      </div>
    </div>
  );
}
