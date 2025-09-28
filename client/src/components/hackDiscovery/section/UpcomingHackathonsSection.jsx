import React from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getUpcomingHackathons } from "../../../shared/hackathons";

const hackathonsData = getUpcomingHackathons();

export const UpcomingHackathonsSection = () => {
  return (
    <section className="flex flex-col w-full items-start gap-4 relative">
      {hackathonsData.map((hackathon, index) => (
        <Link key={index} href={`/hackathon/${hackathon.id}`} className="block w-full">
          <Card
            className="flex items-center justify-between p-4 w-full border border-[#2b3640] rounded-2xl bg-transparent hover:bg-[#242425] transition-colors cursor-pointer"
          >
          <CardContent className="flex flex-col items-start gap-8 p-0 flex-1 max-w-[554px]">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-2">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {hackathon.title}
                </h3>
                <Badge
                  className={`${hackathon.statusColor} text-white text-xs font-semibold px-2.5 py-1 rounded-2xl border-0`}
                >
                  {hackathon.status}
                </Badge>
              </div>
              <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] h-10">
                {hackathon.description}
              </p>
            </div>

            <div className="flex items-center gap-6 w-full">
              <div className="flex flex-col h-[38px] items-start gap-1.5">
                <span className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {hackathon.registrationLabel}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.registrationValue}
                </span>
              </div>

              <div className="flex flex-col h-[38px] items-start gap-1.5">
                <span className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Tech stack
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.techStack}
                </span>
              </div>

              <div className="flex flex-col h-[38px] items-start gap-1.5">
                <span className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Level
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.level}
                </span>
              </div>

              <div className="flex flex-col h-[38px] items-start gap-1.5">
                <span className="opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Total prize
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.totalPrize}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-[#ffffff4c] text-white text-xs font-semibold px-2.5 py-1 rounded-2xl border-0">
                Online
              </Badge>
              <Badge className="bg-[#ffffff4c] text-white text-xs font-semibold px-2.5 py-1 rounded-2xl border-0">
                {hackathon.participants}
              </Badge>
            </div>
          </CardContent>

          <img
            className="w-[362px] h-[196px] object-cover"
            alt="Hackathon image"
            src={hackathon.image}
          />
          </Card>
        </Link>
      ))}
    </section>
  );
};
