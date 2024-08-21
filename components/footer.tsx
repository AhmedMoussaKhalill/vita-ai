import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const font = Caveat({
  subsets: ["latin"],
  weight: "variable",
});

const Footer = () => {
  return (
    <>
      <footer className="relative mx-auto mt-24 hidden max-w-7xl px-5 md:block">
        <div className="flex flex-col">
          <div
            className={cn(
              "select-none text-[40px] font-extrabold tracking-wider text-[#FF6F61]",
              font.className,
            )}
          >
            Vita.AI
          </div>
          <div className="flex justify-between">
            <p className="text-base">Elite AI Resume Builder</p>
            <div className="flex items-center gap-x-5">
              <Link
                href="/"
                className="transform transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="transform transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]"
              >
                About
              </Link>
              <Link
                href="/"
                className="transform transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]"
              >
                Login
              </Link>
              <p>hello@vita.io</p>
            </div>
          </div>
          <div className="flex justify-between pb-5 pt-12">
            <div className="flex items-center gap-x-10">
              <p>
                &#169; 2024 <span className="text-[#FF6F61]">Vita</span>. All
                rights reserved.
              </p>
              <Link href="/" className="underline">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-x-5">
              <Link href="/">
                <Icons.meta className="h-6 w-6" />
              </Link>
              <Link href="/">
                <Icons.X className="h-6 w-6" />
              </Link>
              <Link href="/">
                <Icons.linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
