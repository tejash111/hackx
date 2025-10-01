import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Overview } from "./sections/overview";
import { TechStackSection } from "./sections/TechStackSection";
import { HackathonSubmissionSection } from "./sections/HackathonSubmissionSection";

const navigationItems = [
  {
    icon: "/figmaAssets/frame-1.svg",
    label: "Overview",
    id: "overview",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    label: "Tech Stack",
    id: "techstack",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Hackathon",
    id: "hackathon",
  },
];

export const ElementCreateProject = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "techstack":
        return <TechStackSection />;
      case "hackathon":
        return <HackathonSubmissionSection />;
      default:
        return (
          <div className="flex flex-col gap-6">
            <Overview />
        
          </div>
        );
    }
  };

  return (
    <div className="bg-[#1b1a1d] w-full max-w-[1728px] min-h-screen relative">
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <XIcon className="w-5 h-5 text-white" />
          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base">
            Save project draft & quit
          </span>
        </div>

        <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
          Create New Project
        </h1>

        <div className="flex items-center gap-4">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#f44e4e] text-[13.7px]">
            0% completed
          </span>
          <Button className="bg-[#0092ff] hover:bg-[#0092ff]/80 h-auto px-4 py-3 rounded-lg opacity-40">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[13.7px]">
              Create Project
            </span>
          </Button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-[216px] border-r border-gray-800 p-6">
          <nav className="flex flex-col gap-6">
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setActiveSection(item.id)}
              >
                <img className="w-4 h-4" alt={item.label} src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] text-sm ${
                    activeSection === item.id
                      ? "font-semibold text-[#0092ff]"
                      : "font-normal text-[#949fa8]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
