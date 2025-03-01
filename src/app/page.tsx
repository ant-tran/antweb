"use client"
import React from 'react';
import WorkExperience from './components/WorkExperience';
import { Button } from '@/components/ui/button';
import { FileUser } from "lucide-react";
import TooltipButton from './components/TooltipButton';
import { ScrollArea } from '@/components/ui/scroll-area';

const Home = () => (
  <div className="min-h-screen">
    <div className="h-dvh flex flex-col lg:flex-row gap-4 p-4">
      {/* First Column */}
      <div className="flex flex-col lg:w-1/5 gap-4 lg:min-w-[30dvh]">
        <div className="bg-[var(--color-black-1)] w-full rounded-3xl overflow-hidden shadow-lg min-h-[60dvh] lg:block hidden">
          <img src="me.jpg" alt="Anthony Tran" className="object-cover h-full w-full transform scale-200 -translate-y-30" />
        </div>

        <div className="bg-[var(--color-black-1)] w-full rounded-3xl p-8 flex flex-col justify-between lg:max-h-[40dvh] h-full">
          <div>
            {/* name and work */}
            <h3 className="text-[var(--color-white-1)] text-2xl font-bold">Anthony Tran</h3>
            <p className="text-[var(--color-black-2)] text-2xl">Software Engineer @ PayPal</p>

            <div className="mt-10">
              {/* contact details */}
              <div className='grid grid-cols-2 gap-auto'>
                <div className='space-y-2'>
                  <p className="text-[var(--color-white-1)]">Website</p>
                  <p className="text-[var(--color-white-1)]">Email</p>
                  <p className="text-[var(--color-white-1)]">Phone</p>
                </div>
                <div className='space-y-2 text-right'>
                  <p className="text-[var(--color-black-2)]">www.ant-tran.com</p>
                  <p className="text-[var(--color-black-2)]">ant.tran97@gmail.com</p>
                  <p className="text-[var(--color-black-2)]">402 840 9866</p>
                </div>
              </div>

              {/* socials */}
              <div className="flex mt-4 space-x-1">
                <a href="https://github.com/ant-tran" className='rounded-full' target="_blank" rel="noopener noreferrer">
                  <Button className='rounded-full' variant="ghost" size="icon"><img src="github.svg" alt='github' /></Button>
                </a>
                <a href="https://linkedin.com/in/ant-tran" className='rounded-full' target="_blank" rel="noopener noreferrer">
                  <Button className='rounded-full' variant="ghost" size="icon"><img src="linkedin.svg" alt='linkedin' /></Button>
                </a>
              </div>
            </div>
          </div>

          {/* download resume */}
          <div>
            <Button className='w-full mt-4 rounded-full' variant="outlineSecondary" size="xl">
              <a href="AT-RESUME2025.pdf" download className="flex items-center justify-between w-full">
                <span className='text-xl'>Download Resume</span>
                <FileUser />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col lg:w-4/5 gap-4 lg:min-w-[60dvh]">
        <div className="bg-[var(--color-black-1)] w-full rounded-3xl p-8 sm:min-h-auto lg:min-h-[85dvh]">
          {/* ScrollArea Wrapper */}
          <ScrollArea className="h-full overflow-y-auto">
            <div className="lg:max-w-[200dvh]">
              <WorkExperience />
            </div>
          </ScrollArea>
        </div>

        <div className="bg-[var(--color-black-1)] w-full rounded-3xl p-8 min-h-[10dvh] h-full">
          <div className="flex items-center gap-4">
            {/* Sticky Stack Header */}
            <h3 className="text-white text-2xl font-bold mr-4 sticky top-0 bg-[var(--color-black-1)] p-4 z-10 w-[150px]">
              Stack
            </h3>

            {/* Scrollable container with horizontal overflow */}
            <div
              className="flex gap-4 overflow-x-auto lg:w-full scrollable-container"
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.preventDefault();
                  e.currentTarget.scrollLeft += e.deltaY; // Scroll horizontally based on the mouse wheel
                }
              }}
            >
              <TooltipButton src="JS.svg" alt="JavaScript" label="JavaScript" />
              <TooltipButton src="React.svg" alt="React" label="React" />
              <TooltipButton src="TS.svg" alt="TypeScript" label="TypeScript" />
              <TooltipButton src="VSCode.svg" alt="VSCode" label="Visual Studio Code" />
              <TooltipButton src="Node.svg" alt="Node" label="Node" />
              <TooltipButton src="Jest.svg" alt="Jest" label="Jest" />
              <TooltipButton src="Cypress.svg" alt="Cypress" label="Cypress" />
              <TooltipButton src="Playwright.svg" alt="Playwright" label="Playwright" />
              <TooltipButton src="Postman.svg" alt="Postman" label="Postman" />
              <TooltipButton src="Figma.svg" alt="Figma" label="Figma" />
              <TooltipButton src="Jenkins.svg" alt="Jenkins" label="Jenkins" />
              <TooltipButton src="Oracle.svg" alt="Oracle" label="Oracle" />
              <TooltipButton src="Gemini.svg" alt="Gemini" label="Gemini" />
              <TooltipButton src="Microsoft_Power_Automate.svg" alt="Microsoft Power Automate" label="Microsoft Power Automate" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Home;