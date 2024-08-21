"use client";

import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "home", icon: Icons.home, label: "Home" },
    { href: "about", icon: Icons.meta, label: "Meta" },
    { href: "projects", icon: Icons.X, label: "X" },
    { href: "reviews", icon: Icons.linkedin, label: "Linkedin" },
  ],
};

export function MobileNav() {
  const handleNavItemClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto flex origin-bottom pb-3 md:hidden lg:hidden">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleNavItemClick(item.href)}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-6 text-zinc-300" />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
