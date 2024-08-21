"use client";
import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/button";
import { Icons } from "./icons";

const font = Caveat({
  subsets: ["latin"],
  weight: "variable",
});

const NavBar = () => {
  return (
    <>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-center px-5 py-4 md:justify-between">
        <div
          className={cn(
            "select-none text-4xl font-extrabold text-[#FF6F61] md:text-[40px] md:tracking-wider",
            font.className,
          )}
        >
          Vita.<span>AI</span>
        </div>

        <div className="hidden items-center gap-x-5 md:flex">
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
          <Button className="ml-3 bg-[#F76C5E] text-white" variant="shadow">
            <Icons.user className="mb-[2px] h-[21px] w-[21px]" /> Free Signup
          </Button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
