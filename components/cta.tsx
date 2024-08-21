import Image from "next/image";
import React from "react";
import CtaButton from "./cta-button";

const CTASection = () => {
  return (
    <>
      <div className="relative mx-auto mb-24 mt-24 max-w-7xl px-8 md:mb-0">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-gray-100 p-7 shadow-md md:flex md:flex-col md:rounded-3xl md:p-16 lg:flex lg:flex-row">
          <div className="space-y-3 md:space-y-5">
            <p className="hidden text-center text-lg font-bold md:hidden md:text-5xl lg:block lg:text-start">
              Ready to Secure Your Dream Job <br /> with
              <span className="text-[#FF6F61]">AI-Powered</span> Resumes?
            </p>
            <p className="text-center text-xl font-bold md:text-5xl lg:hidden">
              Secure Your Dream Job <br /> with
              <span className="text-[#FF6F61]">AI-Powered</span> Resumes?
            </p>
            <p className="text-center text-sm text-gray-500 md:text-2xl lg:text-start lg:text-lg">
              Master Your Career Destiny.
            </p>
          </div>
          <div className="mt-3.5 md:mt-4 lg:mt-0">
            <CtaButton />
          </div>
        </div>
        <Image
          src="./ex3.svg"
          alt=""
          width={160}
          height={160}
          className="absolute left-[87%] top-10 hidden select-none md:hidden lg:block"
        />
      </div>
    </>
  );
};

export default CTASection;
