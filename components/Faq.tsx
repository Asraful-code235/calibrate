"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqData: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-4">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-black">
          <button
            className="flex justify-between items-center w-full py-4"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className=" pb-4 text-base font-medium ">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
