import React from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getPastHackathons } from "../../../shared/hackathons";

export const PastHackathonsSection = () => {
  const hackathons = getPastHackathons();

  return (
    <section className="flex flex-col w-full items-start gap-4 relative">
      {hackathons.map((hackathon, index) => (
        <Link key={index} href={`/hackathon/${hackathon.id}`} className="block w-full">
          <Card
            className="flex items-center justify-between p-4 w-full border border-[#2b3640] rounded-2xl bg-transparent hover:bg-[#242425] transition-colors cursor-pointer"
          >
          <CardContent className="flex flex-col w-[554px] items-start gap-8 p-0">
            <div className="flex flex-col w-[517px] items-start gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <h3 className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {hackathon.title}
                </h3>

                <Badge className="inline-flex items-center justify-center gap-2 px-2.5 py-1 relative flex-[0_0_auto] bg-[#f44e4e4c] rounded-2xl border-0 hover:bg-[#f44e4e4c]">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                    {hackathon.status}
                  </span>
                </Badge>
              </div>

              <p
                className={`relative opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 ${index === 1 ? "h-10 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]" : ""}`}
              >
                {hackathon.description}
              </p>
            </div>

            <div className="flex items-center gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex-col h-[38px] items-start gap-1.5 inline-flex relative flex-[0_0_auto]">
                <span className="opacity-60 font-medium text-white text-xs relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                  Winner
                </span>
                <span className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.winner || hackathon.registrationValue}
                </span>
              </div>

              <div className="flex-col h-[38px] items-start gap-1.5 inline-flex relative flex-[0_0_auto]">
                <span className="relative mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Tech stack
                </span>
                <span className="relative [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.techStack}
                </span>
              </div>

              <div className="flex-col h-[38px] items-start gap-1.5 inline-flex relative flex-[0_0_auto]">
                <span className="relative mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Level
                </span>
                <span className="relative [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.level}
                </span>
              </div>

              <div className="flex-col h-[38px] items-start gap-1.5 inline-flex relative flex-[0_0_auto]">
                <span className="relative mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  Total prize
                </span>
                <span className="relative [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  {hackathon.totalPrize}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Badge className="items-center justify-center gap-2 px-2.5 py-1 bg-[#ffffff4c] rounded-2xl inline-flex relative flex-[0_0_auto] border-0 hover:bg-[#ffffff4c]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                  Online
                </span>
              </Badge>

              <Badge className="items-center justify-center gap-2 px-2.5 py-1 bg-[#ffffff4c] rounded-2xl inline-flex relative flex-[0_0_auto] border-0 hover:bg-[#ffffff4c]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                  {hackathon.participants}
                </span>
              </Badge>
            </div>
          </CardContent>

          <img
            className="relative w-[362px] h-[196px] object-cover"
            alt="Hackathon image"
            src={hackathon.image}
          />
          </Card>
        </Link>
      ))}
    </section>
  );
};
