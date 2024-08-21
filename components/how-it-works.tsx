import { ClipboardPenLine, Shapes, Waypoints } from "lucide-react";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="relative mx-auto mt-24 max-w-6xl space-y-14 px-8 md:mt-32">
        <p className="flex items-center justify-center text-2xl font-bold">
          How It <span className="ml-1.5 text-[#FF6F61]"> Rolls</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-y-6 md:flex md:flex-row md:gap-6 lg:gap-20">
          <div className="transform space-y-3 rounded-xl bg-gray-100 p-5 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="flex items-center gap-x-3">
              <ClipboardPenLine className="h-7 w-7 text-[#FF6F61]" />
              <span className="hidden text-lg lg:block">
                Input Your Information
              </span>
              <span className="text-lg lg:hidden">Input Your Info.</span>
            </div>
            <p className="text-gray-500">
              Enter your personal details, work experience, education, skills,
              and achievements.
            </p>
          </div>
          <Image
            src="./ex2.svg"
            alt=""
            width={90}
            height={90}
            className="absolute right-[62%] top-8 hidden -rotate-[25deg] select-none lg:block"
          />
          <div className="transform space-y-3 rounded-xl bg-gray-100 p-5 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="flex items-center gap-x-3">
              <Shapes className="h-7 w-7 text-[#FF6F61]" />
              <span className="hidden text-lg lg:block">
                Customize Your Resume
              </span>
              <span className="text-lg lg:hidden">Resume adjustment</span>
            </div>
            <p className="text-gray-500">
              Personalize your resume with AI-powered content suggestions for
              improvements.
            </p>
          </div>
          <Image
            src="./ex2.svg"
            alt=""
            width={90}
            height={90}
            className="absolute left-[64%] top-8 hidden -rotate-[25deg] select-none lg:block"
          />
          <div className="transform space-y-3 rounded-xl bg-gray-100 p-5 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="flex items-center gap-x-3">
              <Waypoints className="h-7 w-7 text-[#FF6F61]" />
              <span className="text-lg lg:hidden">Export and Share</span>
            </div>
            <p className="text-gray-500">
              Review your resume, make final adjustments, and export it to share
              with employers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
