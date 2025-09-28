import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ProgressStatusSection = ()  => {
  return (
    <section className="w-full flex flex-col gap-3">
      <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
        Project Intro
      </Label>

      <div className="relative">
        <Textarea
          placeholder="Short project intro"
          className="min-h-[140px] bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] resize-none"
        />
      </div>
    </section>
  );
};
