import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-cp-black w-full relative overflow-hidden mt-20">
  <div className="container max-w-[1130px] mx-auto flex flex-wrap gap-y-4 items-center justify-between pt-[100px] pb-[220px] relative z-10">
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 h-[43px] overflow-hidden">
          <img
            src="/assets/logo/logo.svg"
            className="object-contain w-full h-full"
            alt="logo"
          />
        </div>
        <div className="flex flex-col">
          <p
            id="CompanyName"
            className="font-extrabold text-xl leading-[30px] text-white"
          >
            DGAMEDEV Academy
          </p>
          <p id="CompanyTagline" className="text-sm text-white">
            Build 
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="">
          <div className="w-6 h-6 flex shrink-0 overflow-hidden">
            <img
              src="/assets/icons/youtube.svg"
              className="w-full h-full object-contain"
              alt="youtube"
            />
          </div>
        </a>
        <a href="">
          <div className="w-6 h-6 flex shrink-0 overflow-hidden">
            <img
              src="/assets/icons/whatsapp.svg"
              className="w-full h-full object-contain"
              alt="whatsapp"
            />
          </div>
        </a>
        <a href="">
          <div className="w-6 h-6 flex shrink-0 overflow-hidden">
            <img
              src="/assets/icons/facebook.svg"
              className="w-full h-full object-contain"
              alt="facebook"
            />
          </div>
        </a>
        <a href="">
          <div className="w-6 h-6 flex shrink-0 overflow-hidden">
            <img
              src="/assets/icons/instagram.svg"
              className="w-full h-full object-contain"
              alt="instagram"
            />
          </div>
        </a>
      </div>
    </div>
    <div className="flex flex-wrap gap-[50px]">
      <div className="flex flex-col w-[200px] gap-3">
        <p className="font-bold text-lg text-white">Products</p>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          General Contract
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Building Assessment
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          3D Paper Builder
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Legal Constructions
        </a>
      </div>
      <div className="flex flex-col w-[200px] gap-3">
        <p className="font-bold text-lg text-white">About</p>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          We’re Hiring
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Our Big Purposes
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Investor Relations
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Media Press
        </a>
      </div>
      <div className="flex flex-col w-[200px] gap-3">
        <p className="font-bold text-lg text-white">Useful Links</p>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Privacy &amp; Policy
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Terms &amp; Conditions
        </a>
        <a
          href="contact.html"
          className="text-white hover:text-white transition-all duration-300"
        >
          Contact Us
        </a>
        <a
          href=""
          className="text-white hover:text-white transition-all duration-300"
        >
          Download Template
        </a>
      </div>
    </div>
  </div>
  <div className="absolute -bottom-[135px] w-full">
    <p className="font-extrabold text-[140px] leading-[375px] text-center text-white opacity-5">
      DGAMEDEV ACADEMY
    </p>
  </div>
</footer>

  )
}
