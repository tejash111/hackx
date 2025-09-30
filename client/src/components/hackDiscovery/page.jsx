import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PastHackathonsSection } from "./section/PastHackathonsSection";
import { RegistrationInfoSection } from "./section/RegistrationInfoSection";
import { UpcomingHackathonsSection } from "./section/UpcomingHackathonsSection";
import Sidebar from "../sidebar";

export const ElementAllHackatons = () => {
  const navigationItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "Quest", active: false },
  ];

  const certificationItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "My Certifications",
      active: false,
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Explore Course",
      active: false,
    },
  ];

  const dashboardItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "Dashboard", active: false },
    {
      icon: "/figmaAssets/frame-10.svg",
      label: "Explore Hackatons",
      active: true,
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Project Archive",
      active: false,
    },
  ];

  const communityItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Community Events",
      active: false,
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Learning Camps",
      active: false,
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Discussion & Support",
      active: false,
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Advocate Program",
      active: false,
    },
    { icon: "/figmaAssets/frame-1.svg", label: "More", active: false },
  ];

  const filterOptions = [
    { label: "Total Prize", value: "All" },
    { label: "Ecosystem", value: "All" },
    { label: "Tech Stack", value: "All" },
    { label: "Status", value: "Live, Upcoming" },
  ];

  const paginationDots = [{ active: true }, { active: false }, { active: false }];

  return (
    <div className="bg-[#1b1a1d] w-full min-w-[1728px] min-h-screen relative flex">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[79px] border-b border-[#242425] flex items-center justify-between px-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2 px-6 py-5 bg-[#16161b] rounded-[10px] border border-[#242425] w-[1040px] h-12">
            <SearchIcon className="w-5 h-5 text-[#949fa8]" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#949fa8] text-base">
              Search for researches and audits on HackX
            </span>
          </div>

          {/* Header Right */}
          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6"
              alt="Frame"
              src="/figmaAssets/frame-5.svg"
            />
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-[#472915] text-white [font-family:'Inter',Helvetica] font-normal text-base">
                C
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <img
            className="w-[1100px] h-[404px] mx-auto mt-6"
            alt="Hero image"
            src="/figmaAssets/hero-image.png"
          />

          {/* Featured Badge */}
          <Badge className="absolute top-8 left-[230px] bg-white text-[#0092ff] rounded-[32px] px-2 py-1.5 h-auto">
            <div className="w-4 h-4 mr-2 relative">
              <img
                className="absolute w-[37.50%] h-[37.50%] top-[56.25%] left-[31.25%]"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />
              <img
                className="absolute top-px left-[3px] w-[9px] h-[9px]"
                alt="Subtract"
                src="/figmaAssets/subtract.svg"
              />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-bold text-sm">
              Featured
            </span>
          </Badge>

          {/* Start Register Button */}
          <Button className="absolute top-[347px] left-[672px] bg-white text-black hover:bg-gray-100 h-auto px-4 py-3">
            <span className="[font-family:'Inter',Helvetica] font-medium text-sm mr-2">
              Start Register
            </span>
            <img className="w-4 h-4" alt="Frame" src="/figmaAssets/frame.svg" />
          </Button>

          {/* Pagination Dots */}
          <div className="absolute top-[365px] right-[272px] flex gap-3">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-[3px] ${
                  dot.active ? "bg-white" : "bg-white opacity-30"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="px-[206px] py-12">
          {/* Title and Description */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl mb-4">
                Explore Hackathons
              </h1>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-sm leading-[22px] w-[405px]">
                Welcome to your hackathon dashboard! Manage projects, invite
                teammates, and track your hackathon journey with ease — all in
                one place.
              </p>
            </div>
            <Button className="bg-[#0092ff] hover:bg-[#0082e6] text-white h-auto px-4 py-3">
              <img
                className="w-4 h-4 mr-2"
                alt="Frame"
                src="/figmaAssets/frame-9.svg"
              />
              <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                Host a Hackaton
              </span>
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-8">
            {filterOptions.map((filter, index) => (
              <div
                key={index}
                className="px-2.5 py-2 rounded-md border border-[#2b3740] flex items-center gap-2"
              >
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#949fa8] text-sm">
                  {filter.label}
                </span>
                <div className="flex items-center gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    {filter.value}
                  </span>
                  <img
                    className="w-[9px] h-[5px]"
                    alt="Vector"
                    src="/figmaAssets/vector-1.svg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Registration Info Section */}
          <RegistrationInfoSection />

          {/* Upcoming Hackathons Section */}
          <UpcomingHackathonsSection />

          {/* Past Hackathons Section */}
          <div className="mt-12">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl mb-6">
              Past Hackathons
            </h2>
            <PastHackathonsSection />
          </div>
        </section>
      </main>
    </div>
  );
};