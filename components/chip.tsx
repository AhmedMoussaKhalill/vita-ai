import Link from "next/link";
import React from "react";

const ChipIt = () => {
  return (
    <>
      <Link
        href="/"
        className="inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 shadow-md hover:bg-gray-200 dark:bg-[#313038] dark:text-white dark:hover:bg-zinc-800"
      >
        <div className="relative inline-flex">
          <div className="ml-2 mr-2 rounded-full bg-[#FF6F61] px-1 py-1"></div>
          <div className="absolute left-0 top-0 ml-2 mr-2 animate-ping rounded-full bg-[#FF6F61] px-1 py-1"></div>
          <div className="absolute left-0 top-0 ml-2 mr-2 animate-pulse rounded-full bg-[#FF6F61] px-1 py-1"></div>
        </div>
        <span className="text-sm font-medium">2,500,228</span>
      </Link>
    </>
  );
};

export default ChipIt;
