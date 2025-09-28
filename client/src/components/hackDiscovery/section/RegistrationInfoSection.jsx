import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const RegistrationInfoSection = ()=> {
  const registrationInfo = [
    {
      label: "Registration close",
      value: "Registration 12 days left",
    },
    {
      label: "Tech stack",
      value: "All tech stacks",
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
    <div className="flex items-center gap-6 w-full justify-center">
      {registrationInfo.map((info, index) => (
        <Card key={index} className="bg-[#0000004c] border-none rounded-[7px]">
          <CardContent className="flex flex-col items-start gap-2 px-3 py-2">
            <div className="relative self-stretch mt-[-1.00px] opacity-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
              {info.label}
            </div>
            <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              {info.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
