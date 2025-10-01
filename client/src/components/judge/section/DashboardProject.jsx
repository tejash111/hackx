import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";

export const JudgeDashboardProjects = (): JSX.Element => {
  const navigationItems = [
    {
      icon: "/figmaAssets/frame-5.svg",
      label: "Judge Dashboard",
      isActive: true,
      textColor: "text-[#0092ff]",
      href: "/",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Quest",
      isActive: false,
      textColor: "text-[#949fa8]",
      href: "#",
    },
  ];

  const certificationItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "My Certifications",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Explore Course",
      textColor: "text-[#949fa8]",
      href: "#",
    },
  ];

  const hackathonItems = [
    {
      icon: "/figmaAssets/frame.svg",
      label: "Explore Hackatons",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Project Archive",
      textColor: "text-[#949fa8]",
      href: "#",
    },
  ];

  const communityItems = [
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Community Events",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Learning Camps",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Discussion & Support",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "Advocate Program",
      textColor: "text-[#949fa8]",
      href: "#",
    },
    {
      icon: "/figmaAssets/frame-1.svg",
      label: "More",
      textColor: "text-[#949fa8]",
      href: "#",
    },
  ];

  const projects = [
    {
      logo: "init",
      logoClass: "text-white text-2xl font-bold",
      title: "Init Club Pro",
      description:
        "Init Club Pro was born from a simple but radical belief: true innovation shouldn't...",
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
    },
    {
      logo: "ward",
      logoClass: "text-white text-2xl font-bold",
      title: "Ward",
      description:
        "Ward was born from a simple but radical belief: true innovation shouldn't...",
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
    },
    {
      logo: "wiral",
      logoClass: "text-white text-2xl",
      title: "Wiral",
      description:
        "Wiral was born from a simple but radical belief: true innovation shouldn't...",
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
    },
  ];

  return (
    <div className="bg-[#1b1a1d] w-full min-h-screen relative flex">
      {/* Sidebar */}
      <div className="w-[216px] border-r border-gray-600 flex flex-col">
        <div className="p-6">
          <img
            className="w-12 h-8"
            alt="Logo container"
            src="/figmaAssets/logo-container.png"
          />
        </div>

        <nav className="flex flex-col px-4 gap-6">
          <div className="flex-col items-start justify-center gap-6 flex relative">
            {navigationItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <div className="items-center gap-2 flex relative w-full cursor-pointer">
                  {item.isActive && (
                    <div className="absolute -left-4 -right-4 h-[41px] -top-2 bg-[#0092ff] rounded-md opacity-20" />
                  )}
                  <div className="inline-flex items-center gap-2 relative z-10">
                    <img className="relative w-4 h-4" alt="Frame" src={item.icon} />
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold ${item.textColor} text-sm tracking-[0] leading-[normal]`}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Separator className="relative w-full h-px bg-gray-600" />

          <div className="flex-col items-start justify-center gap-6 flex relative">
            {certificationItems.map((item, index) => (
              <a key={index} href={item.href}>
                <div className="flex items-center gap-2 relative w-full cursor-pointer">
                  <div className="inline-flex items-center gap-2 relative">
                    <img className="relative w-4 h-4" alt="Frame" src={item.icon} />
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${item.textColor} text-sm tracking-[0] leading-[normal]`}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Separator className="relative w-full h-px bg-gray-600" />

          <div className="flex flex-col items-start gap-4 w-full relative">
            {hackathonItems.map((item, index) => (
              <a key={index} href={item.href}>
                <div className="flex items-center gap-2 relative w-full cursor-pointer">
                  <div className="inline-flex items-center gap-2 relative">
                    <img className="relative w-4 h-4" alt="Frame" src={item.icon} />
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${item.textColor} text-sm tracking-[0] leading-[normal]`}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Separator className="relative w-full h-px bg-gray-600" />

          <div className="flex flex-col items-start gap-4 w-full relative">
            {communityItems.map((item, index) => (
              <a key={index} href={item.href}>
                <div className="flex gap-2 w-full items-start relative cursor-pointer">
                  <div className="inline-flex items-center gap-2 relative">
                    <img className="relative w-4 h-4" alt="Frame" src={item.icon} />
                    <div
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal ${item.textColor} text-sm tracking-[0] leading-[normal]`}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-[79px] border-b border-gray-600 flex items-center justify-end px-6 gap-6">
          <img
            className="w-6 h-6"
            alt="Frame"
            src="/figmaAssets/frame-7.svg"
          />
          <Avatar className="w-12 h-12 bg-[#472915]">
            <AvatarFallback className="bg-[#472915] text-white text-base [font-family:'Inter',Helvetica] font-normal">
              C
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto">
            <Link href="/">
              <button className="flex items-center gap-2 mb-6 text-[#949fa8] hover:text-white transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="[font-family:'Inter',Helvetica] font-normal text-sm">
                  Back to Hackathons to judge
                </span>
              </button>
            </Link>

            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[18px] mb-8">
              ChainSpark Hackathon Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border border-solid border-[#2b3640] bg-[#25282c] overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      {/* Project Logo */}
                      <div className="w-full h-[120px] bg-[#1b1a1d] rounded-lg flex items-center justify-center">
                        <span className={project.logoClass}>{project.logo}</span>
                      </div>

                      {/* Project Title */}
                      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                        {project.title}
                      </h2>

                      {/* Project Description */}
                      <p className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                        {project.description}
                      </p>

                      {/* Last Edited */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                            Last edited
                          </span>
                          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                            {project.lastEdited}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                          <span className="opacity-60 [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                            Builder
                          </span>
                          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                            {project.builder}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="px-2.5 py-1 bg-[#0092ff]/20 rounded border border-[#0092ff] hover:bg-[#0092ff]/30"
                          >
                            <span className="[font-family:'Inter',Helvetica] font-normal text-[#0092ff] text-xs tracking-[0] leading-[normal]">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>

                      {/* Review Button */}
                      <Link href={`/project/${index + 1}`}>
                        <Button className="w-full h-[46px] bg-[#0092ff] rounded-lg hover:bg-[#0092ff]/90">
                          <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                            Review Project
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
