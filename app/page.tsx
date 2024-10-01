"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(videoTimeout);
  }, []);
  return (
    <div>
      {!isLoading ? (
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
            <h2 className="text-3xl leading-8 font-semibold">
              What is Calibrate
            </h2>
            {/* <FAQAccordion faqData={faqData} /> */}
            <audio controls className="w-full">
              <source src="/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="w-full flex items-center justify-center mb-20 ">
            <Image
              src={"/footer.svg"}
              alt="nav_item"
              width={1060}
              height={184}
            />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            src="/loading.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover"
            onEnded={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
}
