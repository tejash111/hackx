import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const OpenVotingSection = ()  => {
  const votingData = {
    title: "Web3 Innovate Jam",
    status: "Voting",
    description:
      "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.",
    votingClose: "Voting 8 days left",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    tags: ["Online", "405 Participants", "Judges Only"],
    imageUrl: "/figmaAssets/rectangle-9-1.png",
  };

  const infoItems = [
    { label: "Voting close", value: votingData.votingClose },
    { label: "Tech stack", value: votingData.techStack },
    { label: "Level", value: votingData.level },
    { label: "Total prize", value: votingData.totalPrize },
  ];

  return (
    <Card className="w-full border border-[#2b3640] rounded-2xl bg-transparent">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex flex-col w-[554px] items-start gap-8">
          <div className="flex flex-col w-[517px] items-start gap-2">
            <div className="inline-flex items-center gap-2">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {votingData.title}
              </h2>

              <Badge className="bg-[#4ef4664c] text-white hover:bg-[#4ef4664c] rounded-2xl px-2.5 py-1 h-auto">
                <span className="font-semibold text-xs [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  {votingData.status}
                </span>
              </Badge>
            </div>

            <p className="self-stretch h-10 opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {votingData.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-6">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex flex-col h-[38px] items-start gap-1.5"
              >
                <div className="self-stretch mt-[-1.00px] opacity-60 font-medium text-xs [font-family:'Inter',Helvetica] text-white tracking-[0] leading-[normal]">
                  {item.label}
                </div>
                <div className="font-medium text-sm [font-family:'Inter',Helvetica] text-white tracking-[0] leading-[normal]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2">
            {votingData.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#ffffff4c] text-white hover:bg-[#ffffff4c] rounded-2xl px-2.5 py-1 h-auto"
              >
                <span className="font-semibold text-xs [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  {tag}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <img
          className="w-[362px] h-[196px] rounded-lg"
          alt="Rectangle"
          src={votingData.imageUrl}
        />
      </CardContent>
    </Card>
  );
};
