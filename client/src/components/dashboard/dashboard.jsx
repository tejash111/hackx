import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ActiveProjectsSection } from "./sections/ActiveProjectsSection";
import { OpenVotingSection } from "./sections/OpenVotingSection";
import { RegisteredHackathonsSection } from "./sections/RegisteredHackathonsSection";
import { UpcomingHackathonsSection } from "./sections/UpcomingHackathonsSection";
import { useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "Quest",
    active: false,
    textColor: "text-[#949fa8]",
  },
];

const certificationItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "My Certifications",
    active: false,
    textColor: "text-[#949fa8]",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Explore Course",
    active: false,
    textColor: "text-[#949fa8]",
   
  },
];

const dashboardItems = [
  {
    icon: "/figmaAssets/frame-5.svg",
    label: "Dashboard",
    active: true,
    textColor: "text-[#0092ff]",
  },
  {
    icon: "/figmaAssets/frame-8.svg",
    label: "Explore Hackatons",
    active: false,
    textColor: "text-[#949fa8]",
     link:"/hackathon"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Project Archive",
    active: false,
    textColor: "text-[#949fa8]",
  },
];

const communityItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "Community Events",
    active: false,
    textColor: "text-[#949fa8]",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Learning Camps",
    active: false,
    textColor: "text-[#949fa8]",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Discussion & Support",
    active: false,
    textColor: "text-[#949fa8]",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Advocate Program",
    active: false,
    textColor: "text-[#949fa8]",
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "More",
    active: false,
    textColor: "text-[#949fa8]",
  },
];

export const ElementDashboard = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-[#1b1a1d] w-full max-w-[1728px] min-h-screen flex">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-[#242425]">
          <div className="flex items-center gap-2 px-6 py-5 bg-[#16161b] rounded-[10px] border border-solid border-[#242425] w-[1040px] h-12">
            <SearchIcon className="w-5 h-5 text-[#949fa8]" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#949fa8] text-base tracking-[0] leading-[18px]">
              SearchIcon for researches and audits on HackX
            </span>
          </div>

          <div className="flex items-center gap-4">
            <img
              className="w-6 h-6"
              alt="Frame"
              src="/figmaAssets/frame-2.svg"
            />
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-[#472915] text-white [font-family:'Inter',Helvetica] font-normal text-base">
                C
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content Sections */}
        <div className="flex-1 p-20 px-30 space-y-12">
          {/* Active Projects Section */}
          <section className="w-full">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[18px] mb-8">
              Active Projects
            </h2>
            <div className="flex gap-6">
              {/* Create New Project Card */}
              <Card className="w-[305px] h-[303px] bg-transparent border-dashed border-[#0092ff] rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <img
                    className="w-[132px] h-28 mb-8"
                    alt="Vector"
                    src="/figmaAssets/vector.svg"
                  />
                  <Button
                    variant="ghost"
                    className="[font-family:'Inter',Helvetica] font-semibold text-[#0092ff] text-base tracking-[0] leading-[18px] h-auto p-0"
                  >
                    Create New Project
                  </Button>
                </CardContent>
              </Card>

              {/* Init Club Pro Card */}
              <Card className="w-[307px] h-[303px] bg-transparent border border-solid border-[#2b3640] rounded-2xl">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <img
                      className="w-[94px] h-[94px] rounded-lg object-cover"
                      alt="Rectangle"
                      src="/figmaAssets/rectangle-28.png"
                    />
                    <div className="flex gap-2">
                      <img
                        className="w-10 h-10"
                        alt="Group"
                        src="/figmaAssets/group-2085663268.png"
                      />
                      <img
                        className="w-10 h-10"
                        alt="Group"
                        src="/figmaAssets/group-2085663269.png"
                      />
                    </div>
                  </div>

                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] mb-2">
                    Init Club Pro
                  </h3>

                  <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 mb-auto">
                    FAIR3 was born from a simple but radical belief: true
                    innovation shouldn't ...
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      Last edited
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      6 days ago
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Registered Hackathons Section */}
          <section className="w-full">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[18px] mb-8">
              Registered Hackathons
            </h2>
            <RegisteredHackathonsSection />
          </section>

          {/* Open Voting Section */}
          <section className="w-full">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[18px] mb-8">
              Open Voting
            </h2>
            <OpenVotingSection />
          </section>

          {/* Upcoming Hackathons Section */}
          <section className="w-full">
            <UpcomingHackathonsSection />
          </section>

          {/* Active Projects Section */}
          <section className="w-full">
            <ActiveProjectsSection />
          </section>
        </div>
      </main>
    </div>
  );
};
