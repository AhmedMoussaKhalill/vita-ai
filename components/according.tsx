"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

const AccordingSection = () => {
  return (
    <>
      <div className="relative mx-auto mt-24 max-w-7xl space-y-7 px-8">
        <p className="flex items-center justify-center text-2xl font-bold">
          The<span className="ml-1.5 text-[#FF6F61]">FAQs</span>
        </p>
        <div className="md:px-16">
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="How can an AI resume builder help me?"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              aperiam.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How can I improve my resume with your service?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              fugiat?
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can AI help tailor my resume for specific job applications?"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, quisquam?
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="What role does AI play in crafting a standout resume?"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, amet?
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title="How can AI ensure my resume meets industry standards?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia, sequi.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AccordingSection;
