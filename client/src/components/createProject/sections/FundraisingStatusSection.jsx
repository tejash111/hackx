import { LinkIcon, UploadIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const FundraisingStatusSection = () => {
  const buttonData = [
    {
      icon: UploadIcon,
      text: "UploadIcon Video",
      className: "w-40",
    },
    {
      icon: LinkIcon,
      text: "Add Video Link",
      className: "w-[171px]",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-[163px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[normal] whitespace-nowrap">
        <span className="text-white">Pitch Video </span>
        <span className="italic text-[#797b7e]">(optional)</span>
      </div>

      <div className="w-full max-w-[535px] h-[302px] relative bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]">
        <div className="absolute top-32 left-[90px] w-[355px] h-[46px] flex gap-6">
          {buttonData.map((button, index) => (
            <Button
              key={index}
              className={`${button.className} inline-flex h-[46px] items-center justify-center gap-2 px-6 py-5 bg-[#0092ff] rounded-lg hover:bg-[#0092ff]/90 h-auto`}
            >
              <button.icon className="w-3.5 h-3.5" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
                {button.text}
              </span>
            </Button>
          ))}
        </div>

        <img
          className="absolute top-0.5 left-[314px] w-[219px] h-[122px] object-cover"
          alt="Line"
          src="/figmaAssets/line-28.svg"
        />

        <img
          className="absolute top-[3px] left-px w-[219px] h-[122px] object-cover"
          alt="Line"
          src="/figmaAssets/line-30.svg"
        />

        <img
          className="absolute top-44 left-0.5 w-[219px] h-[122px] object-cover"
          alt="Line"
          src="/figmaAssets/line-28.svg"
        />

        <img
          className="absolute top-44 left-[314px] w-[219px] h-[122px] object-cover"
          alt="Line"
          src="/figmaAssets/line-30.svg"
        />
      </div>
    </section>
  );
};
