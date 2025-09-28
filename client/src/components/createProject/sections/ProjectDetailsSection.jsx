import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export const ProjectDetailsSection = ()  => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-52 h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Progress During Hackathon
      </div>

      <Card className="h-[140px] bg-[#0f1011] border-[#242425] rounded-[10px]">
        <CardContent className="p-6 h-full">
          <Textarea
            className="w-full h-full bg-transparent border-none resize-none opacity-40 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] placeholder:text-white placeholder:opacity-40 focus:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Describe what you have accomplished during the hackathon"
            defaultValue=""
          />
        </CardContent>
      </Card>
    </div>
  );
};
