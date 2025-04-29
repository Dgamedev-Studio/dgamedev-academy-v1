'use client';

import React, { useState } from 'react';
import { useTranslations } from "next-intl";

// Individual Accordion Item Component
const AccordionItem = ({ title, content, id }) => {


  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-white w-full">
      <button
        className={`accordion-button flex justify-between gap-1 items-center ${isOpen ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        <span className="font-bold font-main text-lg leading-[27px] text-left">
          {title}
        </span>
        <div className="arrow w-9 h-9 flex shrink-0">
          <img
            src="/assets/icons/arrow-circle-down.svg"
            className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
            alt="icon"
          />
        </div>
      </button>
      <div 
        id={id} 
        className={`accordion-content ${isOpen ? '' : 'hide'}`}
        style={{ 
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <p className="leading-[30px] text-cp-light-grey pt-[14px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function FAQPage() {
  
    const t = useTranslations("HomePage.FAQ");
  // FAQ data
  const faqItems = [
    {
      id: "accordion-faq-1",
      title: t('Question1.Q'),
      content: t('Question1.A')
    },
    {
      id: "accordion-faq-2",
      title: t('Question2.Q'),
      content: t('Question2.A')
    },
    {
      id: "accordion-faq-3",
      title: t('Question3.Q'),
      content: t('Question3.A')
    },
    {
      id: "accordion-faq-4",
      title: t('Question4.Q'),
      content: t('Question4.A')
    }
  ];

  return (
    <div id="FAQ" className="w-full py-10 px-[10px] my-24">
      <div className="container max-w-[1000px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[50px] sm:gap-[70px] items-center">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-bold text-4xl leading-[45px] font-main">
                {t('Title')}
              </h2>
            </div>
            <a
              href="contact.html"
              className="px-5 py-3 bg-amber-600 rounded-xl text-white w-fit font-bold font-main"
            >
              {t('ButtonContact')}
            </a>
          </div>
          <div className="flex flex-col gap-[30px] sm:w-[603px] shrink-0 font-main">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
