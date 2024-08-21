import { Button } from "@nextui-org/button";
import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative mx-auto max-w-[1450px] px-8">
      <div className="mx-auto mt-20 flex justify-center">
        <Link
          href="/"
          className="mb-8 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 shadow-md transition-all hover:bg-gray-200 dark:bg-[#313038] dark:text-white dark:hover:bg-zinc-800"
        >
          <div className="relative inline-flex">
            <div className="ml-2 mr-2 rounded-full bg-[#FF6F61] px-1 py-1"></div>
            <div className="absolute left-0 top-0 ml-2 mr-2 animate-ping rounded-full bg-[#FF6F61] px-1 py-1"></div>
            <div className="absolute left-0 top-0 ml-2 mr-2 animate-pulse rounded-full bg-[#FF6F61] px-1 py-1"></div>
          </div>
          <span className="text-sm font-medium">Vita.AI is now public !</span>
        </Link>
      </div>
      <div className="absolute right-[80%] top-2 hidden w-40 skew-y-3 animate-upAndDown cursor-pointer select-none rounded-xl bg-gray-100 p-3 text-center shadow-md md:hidden lg:block">
        <p>About</p>
      </div>
      <div className="absolute right-[76%] top-44 hidden w-40 -skew-y-3 animate-DownAndup cursor-pointer select-none rounded-xl bg-gray-100 p-3 text-center shadow-md md:hidden lg:block">
        <p>Skills</p>
      </div>
      <div className="absolute left-[81%] top-14 hidden w-40 -skew-y-3 animate-DownAndup cursor-pointer select-none rounded-xl bg-gray-100 p-3 text-center shadow-md md:hidden lg:block">
        <p>Education</p>
      </div>

      <div className="absolute left-[76%] top-56 hidden w-40 skew-y-3 animate-upAndDown cursor-pointer select-none rounded-xl bg-gray-100 p-3 text-center shadow-md md:hidden lg:block">
        <p>Work Experience</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative mx-auto max-w-[1450px]">
          <Image
            src="./ex1.svg"
            alt=""
            width={150}
            height={150}
            className="absolute -top-[88px] left-[93%] hidden w-40 select-none sm:block"
          />
          <h1 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Build Your Resume
            <span className="pr-1.5 text-[#F76C5E]"> With AI</span>
          </h1>
        </div>
        <p className="mb-8 px-5 text-sm font-normal text-gray-500 dark:text-[#d0d5db] sm:px-16 md:text-lg lg:text-xl xl:px-48">
          Easily Create an Impressive Resume Using Our AI-Enhanced Builder
        </p>
        <Button className="mr-3 bg-[#F76C5E] px-6 text-white" variant="shadow">
          Get Started
          <Navigation className="fill ml-1 h-3.5 w-3.5 fill-white" />
        </Button>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root md:mt-24">
          <div className="-m-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 md:-m-2 lg:-m-4 lg:rounded-3xl lg:p-4">
            <Image
              src="/hero.svg"
              alt="example"
              width={1364}
              height={866}
              quality={100}
              className="rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10 md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
