import React, { useContext, useState } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your section components
import { ElementCreate } from "./sections/overview";
import { Prizes } from "./sections/prizes";
import { Judges } from "./sections/judges";
import Schdule from "./sections/schdule";
import { useMyContext } from "../../context/createHackContext";

export const CreateHackPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const {createHackData,setCreateHackData}=useMyContext()

  const navigationItems = [
    {
      id: "overview",
      label: "Overview",
      icon: "/figmaAssets/frame-2.svg",
    },
    {
      id: "prizes",
      label: "Prizes",
      icon: "/figmaAssets/frame.svg",
    },
    {
      id: "judges",
      label: "Judges",
      icon: "/figmaAssets/frame.svg",
    },
    {
      id : "schdule",
      label : "Schdule",
      icon : "/figmaAssets/frame.svg"
    }
  ];

  // Get current section index
  const currentSectionIndex = navigationItems.findIndex(item => item.id === activeSection);
  
  // Navigation functions
  const goToNext = () => {
    if (currentSectionIndex < navigationItems.length - 1) {
      setActiveSection(navigationItems[currentSectionIndex + 1].id);
    }
  };

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      setActiveSection(navigationItems[currentSectionIndex - 1].id);
    }
  };

  // Check if buttons should be disabled
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === navigationItems.length - 1;

  const renderCurrentSection = () => {
    switch (activeSection) {
      case "overview":
        return <ElementCreate />;
      case "prizes":
        return <Prizes />;
      case "judges":
        return <Judges/>;
      case "schdule":
        return <Schdule />
      default:
        return <ElementCreate />;
    }
  };

  return (
    <>
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 w-[216px] h-full bg-[#1b1a1d] border-r border-[#242425] z-10">
        {/* Header */}
        <div className="flex items-center gap-2 p-6 pt-8">
          <XIcon className="w-5 h-5 text-white" />
          <div className="text-white text-base font-normal">
            Save hackathon draft & quit
          </div>
        </div>

        {/* Top separator line */}
        <div className="w-full h-px bg-[#242425] mb-6" />

        {/* Navigation */}
        <nav className="px-4">
          {navigationItems.map((item, index) => {
            const active = activeSection === item.id;
            return (
              <div key={index} className="relative mb-6">
                {/* Active indicator background */}
                {active && (
                  <div className="absolute inset-0 w-52 h-[41px] bg-[#0092ff] rounded-md opacity-20" />
                )}
                
                <div 
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2 p-2 cursor-pointer"
                >
                  <img className="w-4 h-4" alt="Frame" src={item.icon} />
                  <span
                    className={`text-sm font-${active ? "semibold" : "normal"} ${
                      active ? "text-[#0092ff]" : "text-[#949fa8]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Progress indicator */}
        <div className="absolute left-0 top-20 w-[119px] h-1">
          <img
            className="w-full h-full"
            alt="Rectangle"
            src="/figmaAssets/rectangle-21.svg"
          />
        </div>
      </div>

      {/* Top header */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-[#1b1a1d] border-b border-[#242425] z-5">
        {/* Main title */}
        <h1 className="absolute top-[30px] left-[calc(50%_-_86px)] text-white text-lg font-bold">
          Add hackathon info
        </h1>

        {/* Preview and Publish buttons */}
        <div className="absolute top-[17px] right-8 flex gap-4">
          <Button
            variant="link"
            className="text-[#0092ff] text-[13.7px] font-bold p-0 h-auto"
          >
            Preview publication
          </Button>
          <Button className="bg-[#0092ff] text-white text-[13.7px] font-bold px-4 py-3 rounded-lg opacity-40">
            Publish Hackathon
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className=" pt-20 p-8 bg-[#1b1a1d] min-h-screen">
        {renderCurrentSection()}
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center gap-40">
          <Button 
            onClick={goToPrevious}
            disabled={isFirstSection}
            className={`px-8 py-3 ${
              isFirstSection 
                ? 'bg-blue-500 text-white cursor-not-allowed' 
                : 'bg-[#0092ff] text-white hover:bg-[#0092ff]/90'
            }`}
          >
            Previous
          </Button>
          <Button 
            onClick={goToNext}
            disabled={isLastSection}
            className={`px-8 py-3 ${
              isLastSection 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-[#0092ff] text-white hover:bg-[#0092ff]/90'
            }`}
          >
            {isLastSection ? 'Create Hackathon' : 'Next'}
          </Button>
        </div>
      </div>
    </>
  );
};