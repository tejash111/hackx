import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const RegisteredHackathonsSection = () => {
  const hackathonInfo = [
    {
      label: "Registration close",
      value: "Registration 12 days left",
    },
    {
      label: "Tech stack",
      value: "All tech stack",
    },
    {
      label: "Level",
      value: "All levels accepted",
    },
    {
      label: "Total prize",
      value: "50,000.00 USD",
    },
  ];

  return (
    <Card className="w-full max-w-none border-[#2b3640] rounded-2xl bg-transparent">
      <CardContent className="flex items-start justify-between p-4">
        <div className="flex flex-col w-[554px] items-start gap-8">
          <div className="inline-flex flex-col items-start gap-2 w-full">
            <div className="inline-flex items-center gap-2">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                ChainSpark Hackathon
              </h2>

              <Badge className="bg-[#4ef4664c] text-white hover:bg-[#4ef4664c] rounded-2xl px-2.5 py-1 h-auto">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-xs tracking-[0] leading-[normal]">
                  Live
                </span>
              </Badge>
            </div>

            <p className="w-[542px] opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
              ChainSpark Hackathon was born from a simple but radical belief:
              true innovation shouldn&apos;t be strangled by black-box
              algorithms or centralized gatekeepers.
            </p>
          </div>

          <div className="flex items-center gap-6 w-full">
            {hackathonInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-start gap-1.5">
                <div className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {info.label}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {info.value}
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2">
            <Button className="w-[195px] h-[46px] bg-[#0092ff] hover:bg-[#0092ff]/90 rounded-lg px-4 py-5 h-auto">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
                Submit Project
              </span>
              <img
                className="w-3.5 h-3.5"
                alt="Icon"
                src="/figmaAssets/icon.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="h-[46px] border-[#0092ff] bg-transparent hover:bg-[#0092ff]/10 rounded-lg px-3 py-5 h-auto"
            >
              <MoreHorizontalIcon className="w-6 h-6 text-[#0092ff]" />
            </Button>
          </div>
        </div>

        <img
          className="h-[228px] w-[362px] rounded-lg"
          alt="Rectangle"
          src="/figmaAssets/rectangle-9.png"
        />
      </CardContent>
    </Card>
  );
};
