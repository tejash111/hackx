import React from "react";
import { Badge } from "@/components/ui/badge";

export const PitchVideoSection = () => {
  const firstRowSectors = [
    "+ SocialFi",
    "+ DeFi",
    "+ NFT",
    "+ Infra",
    "+ Gaming",
  ];

  const secondRowSectors = ["+ DAO", "+ RWA", "+ AI", "+ Other"];

  return (
    <section className="w-full flex flex-col gap-3">
      <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
        Sector
      </h2>

      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-3.5 flex-wrap">
          {firstRowSectors.map((sector, index) => (
            <Badge
              key={`first-row-${index}`}
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-solid border-[#738b9f] bg-transparent hover:bg-[#738b9f]/10 cursor-pointer transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {sector}
              </span>
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3.5 flex-wrap">
          {secondRowSectors.map((sector, index) => (
            <Badge
              key={`second-row-${index}`}
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-solid border-[#738b9f] bg-transparent hover:bg-[#738b9f]/10 cursor-pointer transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {sector}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
