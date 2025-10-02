import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getUpcomingHackathons } from "../../../shared/hackathons";

const hackathonsData = getUpcomingHackathons();

export const UpcomingHackathonsSection = () => {
  return (
    <section className="flex flex-col w-full items-start gap-6 relative">
      {hackathonsData.map((hackathon, index) => (
        <Link key={index} to={`/hackathon/${hackathon.id}`} className="block w-full">
          <Card className="relative w-full border border-[#2b3640] rounded-2xl bg-transparent hover:bg-[#242629] transition-colors cursor-pointer overflow-hidden">
            <CardContent className="flex items-start justify-between p-6 gap-6">
              {/* Left Content */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Header with Title and Status */}
                <div className="flex items-center gap-3">
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
                    {hackathon.title}
                  </h3>
                  <Badge className={`${hackathon.statusColor} text-white text-xs font-semibold px-3 py-1 rounded-full border-0`}>
                    {hackathon.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-[#9ca3af] [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6 max-w-[500px]">
                  {hackathon.description}
                </p>

                {/* Information Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6b7280] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                      {hackathon.registrationLabel}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                      {hackathon.registrationValue}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[#6b7280] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                      Tech stack
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                      {hackathon.techStack}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[#6b7280] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                      Level
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                      {hackathon.level}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[#6b7280] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                      Total prize
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                      ${hackathon.totalPrize.replace('.00 USD', '')}
                    </span>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-[#374151] text-white text-xs font-medium px-3 py-1 rounded-full border-0">
                    Online
                  </Badge>
                  <Badge className="bg-[#374151] text-white text-xs font-medium px-3 py-1 rounded-full border-0">
                    {hackathon.participants}
                  </Badge>
                </div>
              </div>

              {/* Right Side - Hackathon Image/Logo */}
              <div className="flex-shrink-0">
                <div className="w-[280px] h-[160px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0092ff] to-[#6366f1] flex items-center justify-center">
                  {hackathon.image ? (
                    <img
                      className="w-full h-full object-cover"
                      alt={`${hackathon.title} banner`}
                      src={hackathon.image}
                    />
                  ) : (
                    <div className="text-center text-white p-4">
                      <div className="text-2xl font-bold mb-2">
                        ChainSpark
                      </div>
                      <div className="text-lg font-medium">
                        HACKATHON
                      </div>
                      <div className="text-sm text-orange-300 mt-1">
                        DeFi Builders Edition
                      </div>
                      <div className="text-xs mt-2">
                        Smart Contracts<br />
                        & Financial Inclusion
                      </div>
                      <div className="text-sm font-bold mt-3">
                        PRIZE<br />
                        $38,000
                      </div>
                      <div className="text-xs mt-1">
                        OCTOBER 12-16, 2024
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
};
