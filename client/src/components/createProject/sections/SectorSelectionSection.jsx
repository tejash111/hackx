import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SectorSelectionSection = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
        Project Name
      </Label>

      <div className="relative">
        <Input
          placeholder="Enter project name"
          className="h-16 bg-[#0f1011] border-[#242425] rounded-[10px] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] px-[21px]"
        />
      </div>
    </div>
  );
};
