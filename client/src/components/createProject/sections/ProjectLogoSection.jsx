import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  UnderlineIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const ProjectLogoSection = () => {
  const toolbarButtons = [
    { icon: BoldIcon, label: "Bold" },
    { icon: ItalicIcon, label: "Italic" },
    { icon: UnderlineIcon, label: "Underline" },
    { icon: LinkIcon, label: "Link" },
  ];

  const alignmentButtons = [
    { icon: AlignLeftIcon, label: "Align Left" },
    { icon: AlignCenterIcon, label: "Align Center" },
    { icon: AlignRightIcon, label: "Align Right" },
  ];

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-[117px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Full Description
      </div>

      <div className="w-full max-w-[1100px] h-[550px] flex bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]">
        <div className="mt-5 w-full max-w-[1052px] h-14 ml-6 flex flex-col gap-[19px]">
          <div className="w-full max-w-[939px] flex">
            <div className="inline-flex w-[289px] h-9 relative flex-wrap items-center justify-center gap-[0px_12px]">
              <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                <Select defaultValue="paragraph">
                  <SelectTrigger className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 relative flex-[0_0_auto] bg-[#2b3740] rounded overflow-hidden border-none h-auto">
                    <SelectValue>
                      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        Paragraph text
                      </div>
                    </SelectValue>
                    <img
                      className="relative w-7 h-7"
                      alt="Icon"
                      src="/figmaAssets/icon.svg"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paragraph">Paragraph text</SelectItem>
                    <SelectItem value="heading1">Heading 1</SelectItem>
                    <SelectItem value="heading2">Heading 2</SelectItem>
                  </SelectContent>
                </Select>

                <div className="inline-flex h-9 items-center justify-center gap-2.5 px-0 py-1 relative flex-[0_0_auto] bg-[#2b3740] rounded shadow-shadow-xs">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto w-9 bg-transparent hover:bg-transparent"
                  >
                    <img
                      className="relative w-9"
                      alt="Button left"
                      src="/figmaAssets/buttonleft.svg"
                    />
                  </Button>

                  <div className="relative flex items-center justify-center self-stretch w-[21px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    14
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto w-9 bg-transparent hover:bg-transparent"
                  >
                    <img
                      className="relative w-9"
                      alt="Button right"
                      src="/figmaAssets/buttonright.svg"
                    />
                  </Button>
                </div>
              </div>
            </div>

            <img
              className="mt-1 w-[280px] h-7 relative ml-5"
              alt="Text style"
              src="/figmaAssets/text-style.svg"
            />

            <img
              className="mt-1 w-[92px] h-7 relative ml-6"
              alt="Attachment"
              src="/figmaAssets/attachment.svg"
            />

            <img
              className="mt-1 w-[210px] h-7 relative ml-6"
              alt="Paragraph"
              src="/figmaAssets/paragraph.svg"
            />
          </div>

          <Separator className="w-full max-w-[1052px] h-px bg-[#242425]" />
        </div>
      </div>
    </section>
  );
};
