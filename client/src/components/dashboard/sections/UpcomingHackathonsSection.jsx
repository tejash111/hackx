import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const hackathonData = {
  title: "Coindora Hackfest",
  status: "Voting",
  description:
    "Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.",
  votingClose: "Voting 7 days left",
  techStack: "All tech stack",
  level: "All levels accepted",
  totalPrize: "1,000.00 USD",
  tags: ["Online", "405 Participants", "Judges Only"],
  image: "/figmaAssets/rectangle-9-2.png",
};

const infoSections = [
  { label: "Voting close", value: hackathonData.votingClose },
  { label: "Tech stack", value: hackathonData.techStack },
  { label: "Level", value: hackathonData.level },
  { label: "Total prize", value: hackathonData.totalPrize },
];

export const UpcomingHackathonsSection = () => {
  return (
    <Card className="w-full min-w-[1102px] border-[#2b3640] rounded-2xl bg-transparent">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex flex-col w-[554px] items-start gap-8">
          <div className="flex flex-col w-[517px] items-start gap-2">
            <div className="inline-flex items-center gap-2">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {hackathonData.title}
              </h2>

              <Badge className="bg-[#4ef4664c] text-white hover:bg-[#4ef4664c] rounded-2xl px-2.5 py-1 h-auto">
                <span className="font-semibold text-xs [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  {hackathonData.status}
                </span>
              </Badge>
            </div>

            <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {hackathonData.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-6">
            {infoSections.map((section, index) => (
              <div
                key={index}
                className="inline-flex flex-col h-[38px] items-start gap-1.5"
              >
                <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {section.label}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {section.value}
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2">
            {hackathonData.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#ffffff4c] text-white hover:bg-[#ffffff4c] rounded-2xl px-2.5 py-1 h-auto"
              >
                <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                  {tag}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <img
          className="w-[362px] h-[196px] rounded-lg"
          alt="Rectangle"
          src={hackathonData.image}
        />
      </CardContent>
    </Card>
  );
};
