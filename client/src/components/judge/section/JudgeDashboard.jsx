import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar";

export const ElementJudgeDashboard = () => {
  const navigate=useNavigate()
  const navigationItems = [
    {
      icon: "/figmaAssets/frame-5.svg",
      label: "Judge Dashboard",
      isActive: true,
      textColor: "text-[#0092ff]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Quest",
      isActive: false,
      textColor: "text-[#949fa8]",
    },
  ];

  const certificationItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "My Certifications",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Explore Course",
      textColor: "text-[#949fa8]",
    },
  ];

  const hackathonItems = [
    {
      icon: "/figmaAssets/frame.svg",
      label: "Explore Hackatons",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Project Archive",
      textColor: "text-[#949fa8]",
    },
  ];

  const communityItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Community Events",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Learning Camps",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Discussion & Support",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Advocate Program",
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "More",
      textColor: "text-[#949fa8]",
    },
  ];

  const hackathonStats = [
    {
      label: "Participants",
      value: "405",
    },
    {
      label: "Projects Submitted",
      value: "3",
    },
    {
      label: "Prize Cohorts",
      value: "2",
    },
    {
      label: "Tech stack",
      value: "All tech stack",
    },
  ];

  return (
    <div className="bg-[#1b1a1d] w-full min-w-[1728px] min-h-[1117px] relative">
    
    <Sidebar/>
      

  

      


      <h1 className="absolute top-[136px] left-[422px] [font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[18px] whitespace-nowrap">
        Hackathons to judge
      </h1>

      <Card className="w-[1102px] absolute top-[177px] left-[421px] rounded-2xl border border-solid border-[#2b3640] bg-transparent">
        <CardContent className="flex items-center justify-between p-4">
          <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <h2 className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  ChainSpark Hackathon
                </h2>

                <Badge className="inline-flex items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#4ef4664c] rounded-2xl border-none hover:bg-[#4ef4664c]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                    Live
                  </span>
                </Badge>
              </div>

              <p className="relative w-[564px] opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                ChainSpark Hackathon was born from a simple but radical belief:
                true innovation shouldn&apos;t be strangled by black-box
                algorithms or centralized gatekeepers.
              </p>
            </div>

            <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {hackathonStats.map((stat, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col h-[38px] gap-1.5 items-start relative flex-[0_0_auto]"
                >
                  <div className="mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] relative self-stretch">
                    {stat.label}
                  </div>
                  <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div   className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              
                <Button onClick={()=>navigate("/judge-project")} className="flex w-[195px] h-[46px] items-center justify-center gap-2 px-4 py-5 relative bg-[#0092ff] rounded-lg hover:bg-[#0092ff]/90 h-auto">
                  <span className="relative flex items-center justify-center w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
                    Go to judging
                  </span>
                  <img
                    className="relative w-3.5 h-3.5 mt-[-4.00px] mb-[-4.00px]"
                    alt="Icon"
                    src="/figmaAssets/icon.svg"
                  />
                </Button>
              

              <Button
                variant="outline"
                className="inline-flex h-[46px] items-center justify-center gap-2 px-3 py-5 relative flex-[0_0_auto] rounded-lg border border-solid border-[#0092ff] bg-transparent hover:bg-[#0092ff]/10 h-auto"
              >
                <div className="relative w-6 h-6 mt-[-9.00px] mb-[-9.00px]">
                  <div className="absolute top-2.5 left-0.5 w-1 h-1 bg-[#0092ff] rounded-sm" />
                  <div className="absolute top-2.5 left-2.5 w-1 h-1 bg-[#0092ff] rounded-sm" />
                  <div className="absolute top-2.5 left-[18px] w-1 h-1 bg-[#0092ff] rounded-sm" />
                </div>
              </Button>
            </div>
          </div>

          <img
            className="relative w-[362px] h-[196px]"
            alt="Hackathon image"
            src="/figmaAssets/hackathon-image.svg"
          />
        </CardContent>
      </Card>
    </div>
  );
};
