import { CalendarIcon, ChevronDownIcon, ImageIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const ElementCreate = () => {
  const navigationItems = [
    {
      icon: "/figmaAssets/frame-2.svg",
      label: "Overview",
      active: true,
      textColor: "text-[#0092ff]",
    },
    {
      icon: "/figmaAssets/frame.svg",
      label: "Prizes",
      active: false,
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame.svg",
      label: "Judges",
      active: false,
      textColor: "text-[#949fa8]",
    },
    {
      icon: "/figmaAssets/frame.svg",
      label: "Schedule",
      active: false,
      textColor: "text-[#949fa8]",
    },
  ];

  const dateFields = [
    {
      label: "Registration duration",
      placeholder: "From — to dates",
      top: "top-[1130px]",
      left: "left-[422px]",
    },
    {
      label: "Hackathon duration",
      placeholder: "From — to dates",
      top: "top-[1130px]",
      left: "left-[792px]",
    },
    {
      label: "Voting duration",
      placeholder: "From — to dates",
      top: "top-[1250px]",
      left: "left-[422px]",
    },
  ];

  const dropdownFields = [
    {
      label: "Tech stack",
      placeholder: "Select tech stack",
      top: "top-[1402px]",
      left: "left-[422px]",
      width: "w-[688px]",
    },
    {
      label: "Experience Level",
      placeholder: "Select experience level",
      top: "top-[1522px]",
      left: "left-[422px]",
      width: "w-[688px]",
    },
  ];

  return (
    <div className="bg-[#1b1a1d] w-full min-w-[1728px] min-h-[2739px] relative">
      {/* Active navigation indicator */}
      <div className="absolute top-[100px] left-1 w-52 h-[41px] bg-[#0092ff] rounded-md opacity-20" />

      {/* Vertical separator line */}
      <img
        className="absolute h-[calc(100%_-_80px)] top-20 left-[216px] w-px object-cover"
        alt="Line"
        src="/figmaAssets/line-1.svg"
      />

      {/* Left Navigation */}
      <nav className="flex flex-col w-[10.65%] items-start gap-6 absolute top-28 left-0">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <img className="relative w-4 h-4" alt="Frame" src={item.icon} />
              <div
                className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] ${item.active ? "font-semibold" : "font-normal"} ${item.textColor} text-sm tracking-[0] leading-[normal]`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* Top separator line */}
      <img
        className="absolute top-[79px] left-0 w-[1728px] h-px object-cover"
        alt="Line"
        src="/figmaAssets/line-9.svg"
      />

      {/* Header - Save and quit button */}
      <div className="absolute top-6 left-8 w-60 h-8 flex gap-2">
        <XIcon className="mt-1.5 w-5 h-5 text-white" />
        <div className="flex items-center justify-center w-[210px] h-8 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-8 whitespace-nowrap">
          Save hackathon draft &amp; quit
        </div>
      </div>

      {/* Publish button */}
      <Button className="flex w-[195px] h-[46px] items-center justify-center gap-2 px-4 py-5 absolute top-[17px] left-[1501px] bg-[#0092ff] rounded-lg opacity-40 h-auto">
        <div className="relative w-[139.18px] h-5 mt-[-7.00px] mb-[-7.00px]">
          <div className="absolute top-0 left-[calc(50.00%_-_63px)] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-white text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
            Publish Hackathon
          </div>
        </div>
      </Button>

      {/* Main title */}
      <h1 className="absolute top-[30px] left-[calc(50.00%_-_86px)] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-5 whitespace-nowrap">
        Add hackathon info
      </h1>

      {/* First Hackathon Name field */}
      <div className="absolute top-[146px] left-[422px] w-[686px] h-24 flex flex-col gap-[13px]">
        <Label className="w-[131px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Hackathon Name
        </Label>
        <div className="h-16 relative">
          <Input
            className="absolute top-0 left-0 w-[684px] h-16 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white"
            placeholder="Enter hackathon name"
          />
        </div>
      </div>

      {/* Date fields */}
      {dateFields.map((field, index) => (
        <div
          key={index}
          className={`absolute ${field.top} ${field.left} w-[318px] h-[88px]`}
        >
          <div className="absolute top-8 left-0 w-[314px] h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
          <Input
            className="absolute top-8 left-0 w-[314px] h-14 bg-transparent border-none text-white"
            placeholder={field.placeholder}
          />
          <CalendarIcon className="absolute top-12 left-[274px] w-6 h-6 text-white" />
          <Label className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {field.label}
          </Label>
        </div>
      ))}

      {/* Dropdown fields */}
      {dropdownFields.map((field, index) => (
        <div
          key={index}
          className={`absolute ${field.top} ${field.left} ${field.width} h-[88px]`}
        >
          <div className="top-8 w-[684px] absolute left-0 h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
          <Select>
            <SelectTrigger className="absolute top-8 left-0 w-[684px] h-14 bg-transparent border-none text-white">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <ChevronDownIcon className="w-[2.03%] top-14 left-[93.90%] absolute h-2 text-white pointer-events-none" />
          <Label className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {field.label}
          </Label>
        </div>
      ))}

      {/* Hackathon location */}
      <div className="absolute top-[1642px] left-[422px] w-[318px] h-[88px]">
        <div className="absolute top-8 left-0 w-[314px] h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
        <Input
          className="absolute top-8 left-0 w-[314px] h-14 bg-transparent border-none text-white"
          placeholder="Enter hackathon location"
        />
        <Label className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Hackathon location
        </Label>
      </div>

      {/* Social links */}
      <div className="absolute top-[1762px] left-[422px] w-[516px] h-[88px]">
        <div className="absolute top-8 left-[200px] w-[316px] h-14">
          <div className="absolute top-0 left-0 w-[314px] h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
          <Input
            className="absolute top-0 left-0 w-[314px] h-14 bg-transparent border-none text-white"
            placeholder="Enter link to x.com"
          />
        </div>
        <Label className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Social links
        </Label>
        <div className="absolute top-8 left-0 w-[186px] h-14">
          <div className="top-0 w-[184px] absolute left-0 h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
          <Select>
            <SelectTrigger className="absolute top-0 left-0 w-[184px] h-14 bg-transparent border-none text-white">
              <SelectValue placeholder="x.com" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="twitter">x.com</SelectItem>
              <SelectItem value="linkedin">linkedin.com</SelectItem>
            </SelectContent>
          </Select>
          <ChevronDownIcon className="w-[7.53%] top-6 left-[78.49%] absolute h-2 text-white pointer-events-none" />
        </div>
      </div>

      {/* Second Hackathon Name with image upload */}
      <div className="absolute top-[306px] left-[422px] w-[537px] h-[334px] flex flex-col gap-[13px]">
        <Label className="w-[131px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Hackathon Name
        </Label>
        <Card className="w-[535px] h-[302px] relative bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]">
          <CardContent className="p-0 h-full">
            <img
              className="absolute top-0.5 left-[314px] w-[219px] h-[122px] object-cover"
              alt="Line"
              src="/figmaAssets/line-28.svg"
            />
            <img
              className="absolute top-[3px] left-px w-[219px] h-[122px] object-cover"
              alt="Line"
              src="/figmaAssets/line-31.svg"
            />
            <img
              className="absolute top-44 left-0.5 w-[219px] h-[122px] object-cover"
              alt="Line"
              src="/figmaAssets/line-28.svg"
            />
            <img
              className="absolute top-44 left-[314px] w-[219px] h-[122px] object-cover"
              alt="Line"
              src="/figmaAssets/line-31.svg"
            />
            <div className="absolute top-[98px] left-[197px] w-[145px] h-[106px] flex flex-col items-center">
              <ImageIcon className="w-6 h-6 text-[#738b9f]" />
              <div className="flex items-center justify-center w-[141px] h-10 mt-4 [font-family:'Inter',Helvetica] font-normal text-[#738b9f] text-xs text-center tracking-[0] leading-5">
                Drag&apos;n&apos;drop a hackathon <br />
                visual here or:
              </div>
              <Button
                variant="link"
                className="flex items-center justify-center w-[105px] h-5 mt-1.5 [font-family:'Inter',Helvetica] font-semibold text-[#0092ff] text-sm text-center tracking-[0] leading-5 whitespace-nowrap p-0 h-auto"
              >
                Click to browse
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Description with rich text editor */}
      <div className="absolute top-[1952px] left-[422px] w-[1102px] h-[581px] flex flex-col gap-3">
        <Label className="w-[117px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Full Description
        </Label>
        <Card className="w-[1100px] h-[550px] flex bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]">
          <CardContent className="p-0 w-full">
            <div className="mt-5 w-[1052px] h-14 ml-6 flex flex-col gap-[19px]">
              <div className="w-[939px] flex">
                <div className="inline-flex w-[289px] h-9 relative flex-wrap items-center justify-center gap-[0px_12px]">
                  <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 relative flex-[0_0_auto] bg-[#2b3740] rounded overflow-hidden">
                      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        Paragraph text
                      </div>
                      <img
                        className="relative w-7 h-7"
                        alt="Icon"
                        src="/figmaAssets/icon.svg"
                      />
                    </div>
                    <div className="inline-flex h-9 items-center justify-center gap-2.5 px-0 py-1 relative flex-[0_0_auto] bg-[#2b3740] rounded shadow-shadow-xs">
                      <img
                        className="relative w-9"
                        alt="Button left"
                        src="/figmaAssets/buttonleft.svg"
                      />
                      <div className="relative flex items-center justify-center self-stretch w-[21px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        14
                      </div>
                      <img
                        className="relative w-9"
                        alt="Button right"
                        src="/figmaAssets/buttonright.svg"
                      />
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
              <Separator className="w-[1052px] h-px bg-[#242425]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Short Description */}
      <div className="absolute top-[704px] left-[422px] w-[686px] h-[362px] flex flex-col gap-[13px]">
        <Label className="w-[133px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Short Description
        </Label>
        <div className="h-[330px] relative">
          <Textarea
            className="absolute top-0 left-0 w-[684px] h-[330px] bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white resize-none"
            placeholder="Short description that goes under key visual"
          />
        </div>
      </div>

      {/* Add another link */}
      <Button
        variant="link"
        className="absolute top-[1866px] left-[422px] [font-family:'Inter',Helvetica] font-normal text-[#0092ff] text-lg tracking-[0] leading-[normal] p-0 h-auto"
      >
        + add another link
      </Button>

      {/* Preview publication */}
      <Button
        variant="link"
        className="absolute top-[30px] left-[calc(50.00%_+_472px)] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-[#0092ff] text-[13.7px] tracking-[0] leading-5 whitespace-nowrap p-0 h-auto"
      >
        Preview publication
      </Button>

      {/* Progress indicator */}
      <img
        className="absolute top-20 left-[217px] w-[119px] h-1"
        alt="Rectangle"
        src="/figmaAssets/rectangle-21.svg"
      />

      {/* Judging mode */}
      <div className="absolute top-[1580px] left-[984px] w-[316px] h-[88px] flex flex-col gap-[13px]">
        <Label className="w-[108px] h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Judging mode
        </Label>
        <div className="h-14 relative">
          <div className="absolute top-0 left-0 w-[314px] h-14 bg-[#0f1011] rounded-[10px] border border-solid border-[#242425]" />
          <Select>
            <SelectTrigger className="absolute top-0 left-0 w-[314px] h-14 bg-transparent border-none text-white">
              <SelectValue placeholder="Judges Only" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="judges">Judges Only</SelectItem>
              <SelectItem value="public">Public Voting</SelectItem>
            </SelectContent>
          </Select>
          <ChevronDownIcon className="w-[4.43%] top-6 left-[87.34%] absolute h-2 text-white pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
