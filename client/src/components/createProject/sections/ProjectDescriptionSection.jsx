import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ProjectDescriptionSection = ()  => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Fundraising Status
      </div>

      <Card className="bg-[#0f1011] border-[#242425]">
        <CardContent className="p-6">
          <div className="opacity-40 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Have you raised any money already? How much do you need to finish
            the product? <br />
            Etc.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
