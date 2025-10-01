import React, { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

export const ProjectOverview = (): JSX.Element => {
  const [activeVideo, setActiveVideo] = useState<"demo" | "pitch">("demo");
  const [activeTab, setActiveTab] = useState<"overview" | "hackathon" | "judging">("overview");
  const [selectedCohort, setSelectedCohort] = useState("Tech Fairness Exploration Awards");
  const [scores, setScores] = useState<{ [key: string]: string }>({});

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

  const sectorTags = ["SocialFi", "Infra", "GameFi", "NFT", "AI"];

  const submittedHackathons = [
    {
      title: "Ledgerforge Hackathon, Chain Security Club",
      status: "Ended",
      statusColor: "bg-red-500",
      description:
        "Ledgerforge Hackathon, Chain Security Club: Was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers.",
      winner: "Advanced",
      techStack: "All tech stack",
      level: "All levels accepted",
      totalPrize: "50,000.00 USD",
      type: "Online",
      participants: "405 Participants",
      bannerTitle: "LEDGERFORGE\nHACKATHON",
      bannerSubtitle: "CHAIN SECURITY LAB",
      bannerDetails: "Focus: Smart Contract Auditing & Bug Migration",
      bannerPrize: "$41,000 PRIZE POOL",
      bannerDate: "January 12-16, 2024",
      bannerColor: "from-blue-900 to-blue-700",
    },
    {
      title: "Cryptovate Hack",
      status: "Live",
      statusColor: "bg-green-500",
      description:
        "Cryptovate Hack is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI-FI, and.",
      winner: "Voting 8 days left",
      techStack: "All tech stack",
      level: "All levels accepted",
      totalPrize: "40,000.00 USD",
      type: "Online",
      participants: "405 Participants",
      bannerTitle: "CRYPTOVATE\nHACK",
      bannerSubtitle: "DIGITAL IDENTITY\nSPRINT",
      bannerDetails: "Focus: Decentralized Identity & Reputation",
      bannerPrize: "$37,500",
      bannerDate: "DECEMBER 1-5, 2024",
      bannerColor: "from-green-900 to-green-700",
    },
  ];

  const evaluationCriteria = [
    {
      id: "originality",
      name: "Originality",
      description: "Is the idea novel and imaginative? Does it offer a new take on an old problem?",
      maxScore: 20,
    },
    {
      id: "relevance",
      name: "Relevance to Tech Fairness",
      description: "Does the project address core fairness challenges (algorithm transparency, data sovereignty, sustainable income, etc.)?",
      maxScore: 25,
    },
    {
      id: "functionality",
      name: "Functionality & Implementation",
      description: "How well is the project executed? Is there a working demo or prototype?",
      maxScore: 20,
    },
    {
      id: "impact",
      name: "Impact & Usefulness",
      description: "Can this project be applied to real communities or users? Is it scalable or integrable?",
      maxScore: 20,
    },
    {
      id: "design",
      name: "Design & Clarity",
      description: "Is the presentation intuitive? Is the design and documentation clear enough to be understood and used?",
      maxScore: 15,
    },
  ];

  const handleScoreChange = (criteriaId: string, value: string) => {
    setScores({ ...scores, [criteriaId]: value });
  };

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
            <Link href="/projects">
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
                  Back to ChainSpark Hackathon Projects
                </span>
              </button>
            </Link>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)} className="mb-6">
              <TabsList className="bg-transparent border-none p-0 h-auto gap-2">
                <TabsTrigger
                  value="overview"
                  className="bg-[#0092ff] text-white data-[state=active]:bg-[#0092ff] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#949fa8] rounded-lg px-6 py-2 [font-family:'Inter',Helvetica] font-medium text-sm"
                >
                  Project Overview
                </TabsTrigger>
                <TabsTrigger
                  value="hackathon"
                  className="bg-transparent text-[#949fa8] data-[state=active]:bg-[#0092ff] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#949fa8] rounded-lg px-6 py-2 [font-family:'Inter',Helvetica] font-medium text-sm"
                >
                  Hackathon
                </TabsTrigger>
                <TabsTrigger
                  value="judging"
                  className="bg-transparent text-[#949fa8] data-[state=active]:bg-[#0092ff] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#949fa8] rounded-lg px-6 py-2 [font-family:'Inter',Helvetica] font-medium text-sm"
                >
                  Judging
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <>
              {activeTab === "overview" && (
              <div className="flex gap-8">
                {/* Left Content */}
                <div className="flex-1">
                {/* Project Logo */}
                <div className="w-[200px] h-[120px] bg-[#25282c] rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">init</span>
                </div>

                {/* Project Title */}
                <h1 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal] mb-4">
                  Init Club Pro
                </h1>

                {/* Project Description */}
                <p className="text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6 mb-6">
                  Dunk Verse is an innovative blockchain-based sports engagement platform designed to
                  revolutionize the fan experience. Leveraging Mantle's Layer 2 infrastructure, the platform
                  combines GameFi, SocialFi, and NFT to offer unique features like AI-generated quizzes, live
                  NFT auctions tied to Top Shots NBA sports events, and leaderboard competitions. Fans can
                  upload videos that are automatically minted into NFTs, participate in AI quizzes
                </p>

                {/* Video Buttons */}
                <div className="flex gap-2 mb-6">
                  <Button
                    onClick={() => setActiveVideo("demo")}
                    className={`px-6 py-2 rounded-lg [font-family:'Inter',Helvetica] font-medium text-sm ${
                      activeVideo === "demo"
                        ? "bg-[#0092ff] text-white hover:bg-[#0092ff]/90"
                        : "bg-transparent text-white border border-white hover:bg-white/10"
                    }`}
                  >
                    Demo Video
                  </Button>
                  <Button
                    onClick={() => setActiveVideo("pitch")}
                    className={`px-6 py-2 rounded-lg [font-family:'Inter',Helvetica] font-medium text-sm ${
                      activeVideo === "pitch"
                        ? "bg-[#0092ff] text-white hover:bg-[#0092ff]/90"
                        : "bg-transparent text-white border border-white hover:bg-white/10"
                    }`}
                  >
                    Pitch Video
                  </Button>
                </div>

                {/* Video Player */}
                <div className="w-full aspect-video bg-[#25282c] rounded-lg flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5v14l11-7L8 5z"
                        fill="#1b1a1d"
                      />
                    </svg>
                  </div>
                </div>

                {/* Progress During Hackathon */}
                <div className="mb-8">
                  <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] mb-4">
                    Progress During Hackathon
                  </h2>
                  <p className="text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6">
                    During hackathon, we accomplished following: - Frontend Development: Built a user-friendly
                    interface for NFT auctions, AI quizzes, and Social Interaction. - Smart Contracts: Deployed key smart
                    contracts for the token and Betting Pool on the Mantle Testnet. - AI Quiz Integration: Implemented
                    AGiC DALL-E3 GPT models that generate dynamic quizzes based on live sports events. Developed a
                    functional NFT auction system that allows users to bid using our tokens. - Testing and Deployment:
                    Conducted rigorous testing to ensure seamless operations and deployed the project with all features
                    integrated.
                  </p>
                </div>

                {/* Fundraising Status */}
                <div>
                  <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] mb-4">
                    Fundraising Status
                  </h2>
                  <p className="text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6">
                    Not raised any funds, but actively looking to raise.
                  </p>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-[280px]">
                <Card className="bg-transparent border border-[#2b3640] rounded-lg p-4 mb-4">
                  <div className="mb-4">
                    <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                      Team Leader
                    </div>
                    <div className="text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal]">
                      Amaan Sayyad
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                      Github link
                    </div>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0092ff] [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal] hover:underline"
                    >
                      github.com ^
                    </a>
                  </div>

                  <Separator className="my-4 bg-gray-600" />

                  <div>
                    <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-3">
                      Sector
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sectorTags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="px-2.5 py-1 bg-[#2b3640] rounded border border-[#2b3640] hover:bg-[#2b3640]/80"
                        >
                          <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>

                <Badge className="w-full justify-center px-3 py-2 bg-transparent rounded border border-[#2b3640] hover:bg-[#2b3640]/20">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                    DeFi
                  </span>
                </Badge>
              </div>
              </div>
            )}

            {activeTab === "hackathon" && (
              <div>
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] mb-6">
                  Submitted Hackathon
                </h2>

                <div className="space-y-6">
                  {submittedHackathons.map((hackathon, index) => (
                    <Card
                      key={index}
                      className="bg-[#25282c] border border-[#2b3640] rounded-2xl overflow-hidden"
                    >
                      <div className="p-6 flex gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal]">
                              {hackathon.title}
                            </h3>
                            <Badge
                              className={`px-2.5 py-1 ${hackathon.statusColor} rounded border-none hover:${hackathon.statusColor}/90`}
                            >
                              <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
                                {hackathon.status}
                              </span>
                            </Badge>
                          </div>

                          <p className="text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6 mb-6">
                            {hackathon.description}
                          </p>

                          <div className="grid grid-cols-4 gap-4 mb-4">
                            <div>
                              <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                                {index === 0 ? "Winner" : "Voting close"}
                              </div>
                              <div className="text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal]">
                                {hackathon.winner}
                              </div>
                            </div>
                            <div>
                              <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                                Tech stack
                              </div>
                              <div className="text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal]">
                                {hackathon.techStack}
                              </div>
                            </div>
                            <div>
                              <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                                Level
                              </div>
                              <div className="text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal]">
                                {hackathon.level}
                              </div>
                            </div>
                            <div>
                              <div className="text-[#949fa8] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal] mb-2">
                                Total prize
                              </div>
                              <div className="text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal]">
                                {hackathon.totalPrize}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Badge className="px-3 py-1.5 bg-[#2b3640] rounded-full border-none hover:bg-[#2b3640]/80">
                              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                                {hackathon.type}
                              </span>
                            </Badge>
                            <Badge className="px-3 py-1.5 bg-[#2b3640] rounded-full border-none hover:bg-[#2b3640]/80">
                              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                                {hackathon.participants}
                              </span>
                            </Badge>
                          </div>
                        </div>

                        <div className={`w-[400px] h-[240px] bg-gradient-to-br ${hackathon.bannerColor} rounded-lg p-6 flex flex-col justify-between relative overflow-hidden`}>
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                              <div className="text-sm text-blue-300 [font-family:'Inter',Helvetica] font-normal mb-2">
                                {hackathon.bannerSubtitle.split('\n')[0]}
                              </div>
                              <svg
                                className="w-8 h-8 text-blue-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                              </svg>
                            </div>
                            <h4 className="text-2xl font-bold text-white [font-family:'Inter',Helvetica] mb-1 whitespace-pre-line">
                              {hackathon.bannerTitle}
                            </h4>
                            <div className="text-sm text-blue-200 [font-family:'Inter',Helvetica] font-normal mb-4">
                              {hackathon.bannerSubtitle.split('\n').slice(1).join('\n')}
                            </div>
                            <div className="text-xs text-blue-200 [font-family:'Inter',Helvetica] font-normal mb-4">
                              {hackathon.bannerDetails}
                            </div>
                          </div>
                          <div className="relative z-10">
                            <div className="text-xl font-bold text-white [font-family:'Inter',Helvetica] mb-1">
                              {hackathon.bannerPrize}
                            </div>
                            <div className="text-xs text-blue-200 [font-family:'Inter',Helvetica] font-normal">
                              {hackathon.bannerDate}
                            </div>
                          </div>
                          <div className="absolute right-0 bottom-0 opacity-20">
                            <svg
                              width="150"
                              height="150"
                              viewBox="0 0 150 150"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="75" cy="75" r="40" stroke="white" strokeWidth="3" />
                              <circle cx="75" cy="75" r="50" stroke="white" strokeWidth="2" />
                              <circle cx="75" cy="75" r="60" stroke="white" strokeWidth="1" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

              {activeTab === "judging" && (
                <div>
                  <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] mb-6">
                    Select A Prize Cohort
                  </h2>

                  <select
                    value={selectedCohort}
                    onChange={(e) => setSelectedCohort(e.target.value)}
                    className="w-[450px] bg-[#25282c] text-white border border-[#2b3640] rounded-lg px-4 py-3 mb-8 [font-family:'Inter',Helvetica] font-normal text-sm focus:outline-none focus:border-[#0092ff]"
                  >
                    <option value="Tech Fairness Exploration Awards">Tech Fairness Exploration Awards</option>
                  </select>

                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[normal] mb-6">
                    Evaluation Criteria
                  </h3>

                  <div className="bg-[#25282c] border border-[#2b3640] rounded-lg overflow-hidden">
                    <div className="grid grid-cols-[200px_1fr_120px_120px] bg-[#1b1a1d] border-b border-[#2b3640]">
                      <div className="p-4 text-[#949fa8] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                        Name
                      </div>
                      <div className="p-4 text-[#949fa8] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                        Description
                      </div>
                      <div className="p-4 text-[#949fa8] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                        Max Score
                      </div>
                      <div className="p-4 text-[#949fa8] [font-family:'Inter',Helvetica] font-medium text-xs tracking-[0] leading-[normal]">
                        Your Score
                      </div>
                    </div>

                    {evaluationCriteria.map((criteria, index) => (
                      <div
                        key={criteria.id}
                        className={`grid grid-cols-[200px_1fr_120px_120px] ${
                          index !== evaluationCriteria.length - 1 ? "border-b border-[#2b3640]" : ""
                        }`}
                      >
                        <div className="p-4 text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
                          {criteria.name}
                        </div>
                        <div className="p-4 text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal]">
                          {criteria.description}
                        </div>
                        <div className="p-4 text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[normal] text-center">
                          {criteria.maxScore}
                        </div>
                        <div className="p-4">
                          <input
                            type="number"
                            min="0"
                            max={criteria.maxScore}
                            value={scores[criteria.id] || ""}
                            onChange={(e) => handleScoreChange(criteria.id, e.target.value)}
                            className="w-full bg-[#1b1a1d] text-white border border-[#2b3640] rounded px-3 py-2 [font-family:'Inter',Helvetica] font-normal text-sm focus:outline-none focus:border-[#0092ff]"
                            placeholder=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
