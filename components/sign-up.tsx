"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { Icons } from "./icons";

const OpenButton = () => {
  return (
    <>
      <Button className="ml-3 bg-[#F76C5E] text-white" variant="shadow">
        <Icons.user className="mb-[2px] h-[21px] w-[21px]" /> Free Signup
      </Button>
    </>
  );
};

export default OpenButton;
