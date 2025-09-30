import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const ActiveProjectsSection = () => {
  const projectData = {
    title: "Moca Network Identity",
    status: "Live",
    description:
      "The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.",
    votingClose: "Voting 8 days left",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    tags: ["Online", "405 Participants", "Judges Only"],
    image: "/figmaAssets/rectangle-9-3.png",
  };

  const projectDetails = [
    {
      label: "Voting close",
      value: projectData.votingClose,
    },
    {
      label: "Tech stack",
      value: projectData.techStack,
    },
    {
      label: "Level",
      value: projectData.level,
    },
    {
      label: "Total prize",
      value: projectData.totalPrize,
    },
  ];

  return (
    <Card className="w-full border-[#2b3640] rounded-2xl bg-transparent">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex flex-col w-[554px] items-start gap-8">
          <div className="flex flex-col w-[517px] items-start gap-2">
            <div className="inline-flex items-center gap-2">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {projectData.title}
              </div>

              <Badge className="bg-[#4ef4664c] text-white hover:bg-[#4ef4664c] rounded-2xl px-2.5 py-1 h-auto">
                <div className="[font-family:'Inter',Helvetica] font-semibold text-xs tracking-[0] leading-[normal]">
                  {projectData.status}
                </div>
              </Badge>
            </div>

            <div className="self-stretch h-10 opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {projectData.description}
            </div>
          </div>

          <div className="inline-flex items-center gap-6">
            {projectDetails.map((detail, index) => (
              <div
                key={index}
                className="inline-flex flex-col h-[38px] items-start gap-1.5"
              >
                <div className="self-stretch mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {detail.label}
                </div>

                <div className="w-fit font-medium text-sm [font-family:'Inter',Helvetica] text-white tracking-[0] leading-[normal]">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2">
            {projectData.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#ffffff4c] text-white hover:bg-[#ffffff4c] rounded-2xl px-2.5 py-1 h-auto"
              >
                <div className="[font-family:'Inter',Helvetica] font-semibold text-xs tracking-[0] leading-[normal]">
                  {tag}
                </div>
              </Badge>
            ))}
          </div>
        </div>

        <img
          className="h-[196px] object-cover w-[362px] rounded-lg"
          alt="Rectangle"
          src={projectData.image}
        />
      </CardContent>
    </Card>
  );
};
