import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { getHackathonById } from "../../../shared/hackathons";
import { ArrowLeft, Search, Share, Bell, User } from "lucide-react";
import Sidebar from "../../sidebar";

export const HackathonDetail = () => {
  const { slug } = useParams();
  const hackathon = getHackathonById(slug || "");
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedEvent, setSelectedEvent] = useState("registration");

  const scheduleEvents = {
    registration: {
      id: "registration",
      dates: ["Jun 17, 2025 19:00", "Jul 19, 2025 19:00"],
      title: "Registration",
      status: "Live",
      description: "Registration period for ChainSpark Hackathon. Open to all developers, designers, and innovators.",
      isRange: true
    },
    event1: {
      id: "event1",
      dates: ["Jun 26, 2025 15:00"],
      title: "Online Course 1: How to Build a Web3 Project from 0 to 1",
      description: "Learn how to plan, design, and launch your own Web3 project from scratch, covering everything from smart contracts and tokenomics to community building and go-to-market strategy.",
      speaker: {
        name: "Wizzy",
        organization: "DevChain",
        fullName: "Tom White Adresson",
        position: "Founder & CEO at A16Z",
        avatar: "W"
      },
      datetime: "Jun 26, 2025 20:00 (EST)",
      isRange: false
    },
    event2: {
      id: "event2",
      dates: ["Jun 28, 2025, 15:00"],
      title: "Web3 Development Workshop",
      description: "Hands-on workshop covering advanced Web3 development techniques and best practices.",
      speaker: {
        name: "Alex Chen",
        organization: "BlockDev",
        fullName: "Alex Chen",
        position: "Senior Blockchain Developer",
        avatar: "A"
      },
      datetime: "Jun 28, 2025 15:00 (EST)",
      isRange: false
    },
    event3: {
      id: "event3",
      dates: ["Jun 30, 2025, 15:00"],
      title: "Smart Contract Security Fundamentals",
      description: "Essential security practices for smart contract development and auditing.",
      speaker: {
        name: "Sarah Kim",
        organization: "SecureChain",
        fullName: "Sarah Kim",
        position: "Security Researcher",
        avatar: "S"
      },
      datetime: "Jun 30, 2025 15:00 (EST)",
      isRange: false
    },
    hackathon: {
      id: "hackathon",
      dates: ["Jul 19, 2025 19:00 -", "Jul 30, 2025 19:00"],
      title: "Main Hackathon Period",
      description: "The main hackathon development period where teams build their projects.",
      isRange: true
    },
    results: {
      id: "results",
      dates: ["Aug 3, 2025 19:00"],
      title: "Results Announcement",
      description: "Winners will be announced and prizes will be distributed.",
      isRange: false
    }
  };
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 1,
    minutes: 42,
    seconds: 31
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tabs = ["Overview", "Prize & Judge", "Schedule", "Submitted Projects"];

  const navigationItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "Quest", active: false },
  ];

  const certificationItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "My Certifications", active: false },
    { icon: "/figmaAssets/frame-1.svg", label: "Explore Course", active: false },
  ];

  const dashboardItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "Dashboard", active: false },
    { icon: "/figmaAssets/frame-10.svg", label: "Explore Hackatons", active: true },
    { icon: "/figmaAssets/frame-1.svg", label: "Project Archive", active: false },
  ];

  const communityItems = [
    { icon: "/figmaAssets/frame-1.svg", label: "Community Events", active: false },
    { icon: "/figmaAssets/frame-1.svg", label: "Learning Camps", active: false },
    { icon: "/figmaAssets/frame-1.svg", label: "Discussion & Support", active: false },
    { icon: "/figmaAssets/frame-1.svg", label: "Advocate Program", active: false },
    { icon: "/figmaAssets/frame-1.svg", label: "More", active: false },
  ];

  if (!hackathon) {
    return (
      <div className="bg-[#1b1a1d] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-semibold mb-4">Hackathon Not Found</h1>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Explore
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1b1a1d] w-full min-w-[1728px] min-h-screen relative flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#242425]">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Hackathons</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-[#242425] rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-white/60" />
              <input 
                type="text" 
                placeholder="Search for researches and audits on HackX"
                className="bg-transparent text-white text-sm placeholder-white/60 outline-none w-64"
              />
            </div>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <Share className="w-4 h-4 mr-2" />
              Share Link
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="border-b border-[#242425]">
          <div className="flex gap-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "text-blue-400 border-blue-400"
                    : "text-white/60 border-transparent hover:text-white"
                }`}
                data-testid={`tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Title */}
            
            

            {/* Tab Content */}
            {activeTab === "Overview" && (
              <div className="space-y-8">
                {/* Large Banner Section */}
                <div className="relative w-full h-[400px] bg-gradient-to-br from-[#0f1729] via-[#1a2332] to-[#0f1729] rounded-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/figmaAssets/pattern.svg')] bg-repeat"></div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative z-10 flex items-center justify-between h-full px-12">
                    {/* Left Side - Hackathon Info */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h1 className="text-white text-4xl font-bold mb-2">{hackathon.title}</h1>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-[#4ade80] text-black text-sm font-semibold px-3 py-1 rounded-full">
                            {hackathon.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-[#9ca3af] text-lg leading-relaxed max-w-[600px]">
                        {hackathon.description}
                      </p>
                      
                      {/* Key Information Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div>
                          <div className="text-[#6b7280] text-sm mb-1">Registration close</div>
                          <div className="text-white font-medium">Registration 12 days left</div>
                        </div>
                        <div>
                          <div className="text-[#6b7280] text-sm mb-1">Tech stack</div>
                          <div className="text-white font-medium">All tech stack</div>
                        </div>
                        <div>
                          <div className="text-[#6b7280] text-sm mb-1">Level</div>
                          <div className="text-white font-medium">All levels accepted</div>
                        </div>
                        <div>
                          <div className="text-[#6b7280] text-sm mb-1">Total prize</div>
                          <div className="text-white font-bold text-xl">50,000.00 USD</div>
                        </div>
                      </div>
                      
                      {/* Status Badges */}
                      <div className="flex items-center gap-3 mt-6">
                        <Badge className="bg-[#374151] text-white text-sm font-medium px-4 py-2 rounded-full">
                          Online
                        </Badge>
                        <Badge className="bg-[#374151] text-white text-sm font-medium px-4 py-2 rounded-full">
                          405 Participants
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Right Side - ChainSpark Banner */}
                    <div className="flex-shrink-0 ml-12">
                      <div className="w-[350px] h-[280px] bg-gradient-to-br from-[#0092ff] via-[#1e40af] to-[#6366f1] rounded-2xl flex flex-col items-center justify-center text-center text-white p-8 shadow-2xl">
                        {/* ChainSpark Logo */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-lg">⚡</span>
                          </div>
                          <span className="text-xl font-bold">ChainSpark</span>
                        </div>
                        
                        <div className="space-y-3">
                          <h2 className="text-3xl font-bold">HACKATHON</h2>
                          <div className="text-orange-300 text-lg font-medium">DeFi Builders Edition</div>
                          
                          <div className="text-sm space-y-1 my-4">
                            <div>Smart Contracts</div>
                            <div>& Financial Inclusion</div>
                          </div>
                          
                          <div className="bg-black/20 rounded-lg p-3 mt-4">
                            <div className="text-xs text-gray-300 mb-1">PRIZE</div>
                            <div className="text-2xl font-bold">$38,000</div>
                          </div>
                          
                          <div className="text-sm mt-3">OCTOBER 12-16, 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Calling All Builders Section */}
                <div className="bg-transparent rounded-2xl p-8">
                  <h2 className="text-white text-2xl font-medium mb-4">ChainSpark Hackathon</h2>
                  <h2 className="text-white text-2xl font-medium mb-4">
                    Calling All Builders, Dreamers, and Rule-Breakers!
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white text-base leading-relaxed">
                      The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing's 
                      for sure: innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers.
                    </p>
                    <p className="text-white text-base leading-relaxed">
                      This isn't just another hackathon. It's a battlefield for fairness, a playground for disruptors, 
                      and a launchpad for the next wave of decentralized innovation. Whether you're an AI wizard
                    </p>
                  </div>
                </div>
                
                {/* Prize Pool Section */}
                <div className="bg-transparent border-[#2b3640] border rounded-2xl p-8 grid grid-cols-4">
                  <div className="flex   items-center justify-between mb-8">
                    
                    <div className="m-2">
                      <div className="">
                     
                      <div className="text-white text-4xl font-bold m-2">50,000 USD</div>
                      <div className="text-[#6b7280] text-sm text-center">Available in Prizes</div>
                    </div>
                    <Button className="bg-blue-600 mt-4 hover:bg-blue-700 text-center items-center ml-5 text-white px-6 py-3 rounded-lg">
                      Event Breakdown
                    </Button>
                    </div>

                  </div>

                 

                  {/* Prize Breakdown Grid */}
                  <div className="col-span-3">
                    <div className=" gap-1">
                    <div className="text-center flex justify-between p-4 bg-transparent rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Fairness Explorer Gold Awards (5 winners)</div>
                      <div className="text-white text-xl font-bold">18,000 USD</div>
                    </div>
                    <div className="text-center flex justify-between p-4 rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Prize tracks (11 winners each) (4 winners)</div>
                      <div className="text-white text-xl font-bold">6,000 USD</div>
                    </div>
                    <div className="text-center flex justify-between p-4  rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Hackathon Integration Awards (4 winners)</div>
                      <div className="text-white text-xl font-bold">4,000 USD</div>
                    </div>
                    <div className="text-center flex justify-between p-4  rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Discovery Social Impact (1 winner)</div>
                      <div className="text-white text-xl font-bold">2,000 USD</div>
                    </div>

                    <div className=" text-center flex justify-between p-4 rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">1st Place Integration on EVM Chain (3 winners)</div>
                      <div className="text-white  text-xl font-bold">4,000 USD</div>
                    </div>
                    <div className="text-center p-4 flex justify-between rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Greenstand Data Documentation with B.A.R.K Framework (3 winners)</div>
                      <div className="text-white text-xl font-bold">4,000 USD</div>
                    </div>
                    <div className="text-center p-4 flex justify-between  rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Challenge Mining & Security Winner (Pool 2016-2019) (1 winner)</div>
                      <div className="text-white text-xl font-bold">4,000 USD</div>
                    </div>
                    <div className="text-center p-4 flex justify-between  rounded-lg">
                      <div className="text-[#6b7280] text-sm mb-2">Open Innovation in Work Dev (Pool with Chaos E.I. Awards) (1 winner)</div>
                      <div className="text-white text-xl font-bold">8,000 USD</div>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Why ChainSpark Hackathon Sections */}
                <div className="space-y-8">
                  <div className="bg-transparent border border-[#2b3640] rounded-2xl p-8">
                    <h3 className="text-white text-xl font-semibold mb-4">Why ChainSpark Hackathon?</h3>
                    <h4 className="text-white text-lg font-medium mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
                    <p className="text-[#9ca3af] text-base leading-relaxed">
                      ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era of platform monopolies and divided creator value, ChainSpark is relying builders to forge a transparent, platform-agnostic, and verifiable future for data governance and the creator economy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Prize & Judge" && (
              <div className="space-y-12">
                {/* Prize Section 1 */}
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="text-white text-lg font-semibold">1.</div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">Tech Fairness Exploration Awards (5 winners)</h3>
                      <div className="flex items-baseline gap-4 mb-4">
                        <div className="text-white text-3xl font-bold">18,000 USD</div>
                        <div className="text-white/60 text-sm">Fair Prize for 5 winners or 3,600 USD per reward</div>
                      </div>
                      
                      <div className="text-white/80 text-base leading-relaxed mb-6">
                        <p className="mb-4">
                          This track is open to all tracks as long as your work addresses "tech fairness."
                          We welcome both builders and storytellers—whether you're solving a problem,
                          designing a governance framework, or building a meme engine.
                        </p>
                        <p className="mb-4">Suggested directions (but limited to):</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Algorithm transparency and interoperability</li>
                          <li>Data sovereignty and privacy protection</li>
                          <li>Fair value distribution and attribution</li>
                          <li>Sustainable revenue to the AI era</li>
                          <li>Creator-first infrastructure and app platform design</li>
                          <li>Identity, reputation and governance frameworks</li>
                          <li>Decentralized infrastructure and public discourse tools</li>
                          <li>Human-centered AI & Web3 interactions</li>
                        </ul>
                        <p className="mt-4">
                          Judging criteria beyond originality, usability, impact, and alignment with the
                          theme of fairness.
                        </p>
                        <p className="mt-2">
                          Each selected team will receive 3,600 USD worth of FARIS tokens.
                        </p>
                      </div>

                      {/* Evaluation Criteria */}
                      <div className="mb-8">
                        <h4 className="text-white text-lg font-semibold mb-4">Evaluation Criteria</h4>
                        <div className="bg-[#0f1419] rounded-lg overflow-hidden">
                          <table className="w-full text-white/80 text-sm">
                            <thead>
                              <tr className="bg-[#1a1f29]">
                                <th className="text-left p-4 font-medium">Criteria</th>
                                <th className="text-left p-4 font-medium">Description</th>
                                <th className="text-left p-4 font-medium">Max Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Originality</td>
                                <td className="p-4">Is the idea novel and imaginative? Does it offer a new idea or an improvement?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Relevance to Tech Fairness</td>
                                <td className="p-4">Does the project address core fairness challenges (algorithmic bias, unequal access, transparency, centralization, etc.)?</td>
                                <td className="p-4">25</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Functionality & Implementation</td>
                                <td className="p-4">How well is the project executed? Is there a working demo or prototype?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Impact & Usefulness</td>
                                <td className="p-4">Can this project be applied in real communities in scale? Is it scalable or integrable?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Design & Clarity</td>
                                <td className="p-4">Is the presentation coherent in the design and documentation clear enough for re-development and reuse?</td>
                                <td className="p-4">15</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Voting */}
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Voting</h4>
                        <div className="bg-[#0f1419] rounded-lg overflow-hidden">
                          <div className="grid grid-cols-3 border-b border-[#242425]">
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white font-medium mb-2">Weary</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                  W
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Project Originator</div>
                            </div>
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white font-medium mb-2">Dovahk</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                                  D
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Workgroup/co</div>
                            </div>
                            <div className="p-4 text-center">
                              <div className="text-white font-medium mb-2">Ignh</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                                  I
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Bot</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3">
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white/80 text-sm mb-1">Subject Vote</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Judges Only</div>
                            </div>
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white/80 text-sm mb-1">Active State</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Project Scoring</div>
                            </div>
                            <div className="p-4 text-center">
                              <div className="text-white/80 text-sm mb-1">Machine user Addin</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Bot</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prize Section 2 */}
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="text-white text-lg font-semibold">2.</div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">FAIRS Public Infrastructure Awards (3 winners)</h3>
                      <div className="flex items-baseline gap-4 mb-4">
                        <div className="text-white text-3xl font-bold">6,000 USD</div>
                        <div className="text-white/60 text-sm">Fair Prize for 3 winners or 2,000 USD per reward</div>
                      </div>
                      
                      <div className="text-white/80 text-base leading-relaxed mb-6">
                        <p className="mb-4">
                          This track is open to all tracks as long as your work addresses "tech fairness."
                          We welcome both builders and storytellers—whether you're solving a problem,
                          designing a governance framework, or building a meme engine.
                        </p>
                        <p className="mb-4">Suggested directions (but limited to):</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Algorithm transparency and interoperability</li>
                          <li>Data sovereignty and privacy protection</li>
                          <li>Fair value distribution and attribution</li>
                          <li>Sustainable revenue to the AI era</li>
                          <li>Creator-first infrastructure and app platform design</li>
                          <li>Identity, reputation and governance frameworks</li>
                          <li>Decentralized infrastructure and public discourse tools</li>
                          <li>Human-centered AI & Web3 interactions</li>
                        </ul>
                        <p className="mt-4">
                          Judging criteria beyond originality, usability, impact, and alignment with the
                          theme of fairness.
                        </p>
                        <p className="mt-2">
                          Each selected team will receive 2,000 USD worth of FARIS tokens.
                        </p>
                      </div>

                      {/* Evaluation Criteria */}
                      <div className="mb-8">
                        <h4 className="text-white text-lg font-semibold mb-4">Evaluation Criteria</h4>
                        <div className="bg-[#0f1419] rounded-lg overflow-hidden">
                          <table className="w-full text-white/80 text-sm">
                            <thead>
                              <tr className="bg-[#1a1f29]">
                                <th className="text-left p-4 font-medium">Criteria</th>
                                <th className="text-left p-4 font-medium">Description</th>
                                <th className="text-left p-4 font-medium">Max Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Originality</td>
                                <td className="p-4">Is the idea novel and imaginative? Does it offer a new idea or an improvement?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Relevance to Tech Fairness</td>
                                <td className="p-4">Does the project address core fairness challenges (algorithmic bias, unequal access, transparency, centralization, etc.)?</td>
                                <td className="p-4">25</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Functionality & Implementation</td>
                                <td className="p-4">How well is the project executed? Is there a working demo or prototype?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Impact & Usefulness</td>
                                <td className="p-4">Can this project be applied in real communities in scale? Is it scalable or integrable?</td>
                                <td className="p-4">20</td>
                              </tr>
                              <tr className="border-t border-[#242425]">
                                <td className="p-4">Design & Clarity</td>
                                <td className="p-4">Is the presentation coherent in the design and documentation clear enough for re-development and reuse?</td>
                                <td className="p-4">15</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Voting */}
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Voting</h4>
                        <div className="bg-[#0f1419] rounded-lg overflow-hidden">
                          <div className="grid grid-cols-3 border-b border-[#242425]">
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white font-medium mb-2">Weary</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                  W
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Project Originator</div>
                            </div>
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white font-medium mb-2">Dovahk</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                                  D
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Workgroup/co</div>
                            </div>
                            <div className="p-4 text-center">
                              <div className="text-white font-medium mb-2">Ignh</div>
                              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                                  I
                                </div>
                              </div>
                              <div className="text-white/60 text-xs">Bot</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3">
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white/80 text-sm mb-1">Subject Vote</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Judges Only</div>
                            </div>
                            <div className="p-4 text-center border-r border-[#242425]">
                              <div className="text-white/80 text-sm mb-1">Active State</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Project Scoring</div>
                            </div>
                            <div className="p-4 text-center">
                              <div className="text-white/80 text-sm mb-1">Machine user Addin</div>
                              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">Bot</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Schedule" && (
              <div className="flex gap-8">
                {/* Timeline */}
                <div className="w-80">
                  <div className="space-y-3">
                    {Object.entries(scheduleEvents).map(([key, event]) => (
                      <div 
                        key={key}
                        className={`rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedEvent === key 
                            ? "bg-blue-600" 
                            : "bg-[#0f1419] hover:bg-[#1a1f29]"
                        }`}
                        onClick={() => setSelectedEvent(key)}
                        data-testid={`schedule-item-${key}`}
                      >
                        {event.dates.map((date, index) => (
                          <div key={index} className="text-white font-medium text-sm">
                            {date}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  {selectedEvent && scheduleEvents[selectedEvent] ? (
                    (() => {
                      const event = scheduleEvents[selectedEvent];
                      
                      if (event.id === "registration") {
                        return (
                          <div className="text-center py-16">
                            <div className="flex items-center justify-center gap-3 mb-4">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <div className="bg-green-600 text-white text-sm px-3 py-1 rounded">Live</div>
                            </div>
                            <h2 className="text-white text-2xl font-bold mb-2">{event.title}</h2>
                            <p className="text-white/60">{event.description}</p>
                          </div>
                        );
                      }

                      if ('speaker' in event && event.speaker) {
                        return (
                          <div className="space-y-6">
                            {/* Event Header */}
                            <div>
                              <h3 className="text-white text-2xl font-bold mb-4">
                                {event.title}
                              </h3>
                              <p className="text-white/80 text-base leading-relaxed">
                                {event.description}
                              </p>
                            </div>

                            {/* Speaker & Date Info */}
                            <div className="grid grid-cols-2 gap-8">
                              {/* Speaker */}
                              <div>
                                <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                                  <span className="text-lg">👤</span>
                                  <span>Speaker</span>
                                </div>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                                        {event.speaker.avatar}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-white font-medium">{event.speaker.name}</div>
                                      <div className="text-white/60 text-sm">{event.speaker.organization}</div>
                                    </div>
                                  </div>
                                  <div className="bg-[#0f1419] rounded-lg p-3">
                                    <div className="text-white/60 text-sm mb-1">Name:</div>
                                    <div className="text-white text-sm">{event.speaker.fullName}</div>
                                    <div className="text-white/60 text-sm mt-2 mb-1">Position:</div>
                                    <div className="text-white text-sm">{event.speaker.position}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Date & Time */}
                              <div>
                                <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                                  <span className="text-lg">📅</span>
                                  <span>Date & Time</span>
                                </div>
                                <div className="bg-[#0f1419] rounded-lg p-3">
                                  <div className="text-white font-medium">{'datetime' in event ? event.datetime : 'TBD'}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div className="text-center py-16">
                          <h2 className="text-white text-2xl font-bold mb-2">{event.title}</h2>
                          <p className="text-white/60">{event.description}</p>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-white/60">Select a date from the timeline to view event details</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Submitted Projects" && (
              <div className="space-y-8">
                {/* Title */}
                <h1 className="text-white text-3xl font-bold">Submitted Projects</h1>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Project 1 - Init Club Pro */}
                  <div data-testid="card-project-init-club-pro" className="bg-[#0f1419] rounded-xl p-6 hover:bg-[#1a1f29] transition-colors">
                    {/* Like Button */}
                    <div className="flex justify-center mb-4">
                      <button data-testid="button-like-init-club-pro" className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                        <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center">
                          <span className="text-sm">♡</span>
                        </div>
                        <span className="text-xs">5</span>
                      </button>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <h3 data-testid="text-title-init-club-pro" className="text-white text-lg font-semibold">Init Club Pro</h3>
                      <p className="text-white/70 text-sm line-clamp-3">
                        Init Club Pro was born from a simple but radical belief: true innovation shouldn't...
                      </p>
                      
                      {/* Metadata */}
                      <div className="space-y-2 text-white/60 text-xs">
                        <div>Last edited: 6 days ago</div>
                        <div>Builder: John McKenzie</div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">DeFi</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Infra</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 - Ward */}
                  <div data-testid="card-project-ward" className="bg-[#0f1419] rounded-xl p-6 hover:bg-[#1a1f29] transition-colors">
                    {/* Like Button */}
                    <div className="flex justify-center mb-4">
                      <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                        <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center">
                          <span className="text-sm">♡</span>
                        </div>
                        <span className="text-xs">5</span>
                      </button>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <h3 className="text-white text-lg font-semibold">Ward</h3>
                      <p className="text-white/70 text-sm line-clamp-3">
                        Ward was born from a simple but radical belief: true innovation shouldn't...
                      </p>
                      
                      {/* Metadata */}
                      <div className="space-y-2 text-white/60 text-xs">
                        <div>Last edited: 6 days ago</div>
                        <div>Builder: John McKenzie</div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">DeFi</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Infra</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 3 - Wiral */}
                  <div data-testid="card-project-wiral" className="bg-[#0f1419] rounded-xl p-6 hover:bg-[#1a1f29] transition-colors">
                    {/* Like Button */}
                    <div className="flex justify-center mb-4">
                      <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
                        <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center">
                          <span className="text-sm">♡</span>
                        </div>
                        <span className="text-xs">5</span>
                      </button>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <h3 className="text-white text-lg font-semibold">Wiral</h3>
                      <p className="text-white/70 text-sm line-clamp-3">
                        Wiral was born from a simple but radical belief: true innovation shouldn't...
                      </p>
                      
                      {/* Metadata */}
                      <div className="space-y-2 text-white/60 text-xs">
                        <div>Last edited: 6 days ago</div>
                        <div>Builder: John McKenzie</div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">DeFi</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Infra</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-80 p-6 border-l border-[#242425]">
            {/* Event Details */}
            <div className="mb-8">
              <div>

                {/* Countdown Timer */}
            <div className="mb-8">
              <div className="text-white/60 text-sm mb-2">Left to register</div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-white/60 text-xs">D</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-white/60 text-xs">H</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-white/60 text-xs">M</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-white/60 text-xs">S</div>
                </div>
              </div>
            </div>

             {/* Register Button */}
            <Link to={`/hackathon/${hackathon.id}/register`}>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mb-8" 
                data-testid="button-register-hackathon"
              >
                Register to Hackathon
              </Button>
            </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-white/60 text-sm">Registration</div>
                  <div className="text-white font-medium">12 days left</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Tech Stack</div>
                  <div className="text-white font-medium">All tech stack</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Level</div>
                  <div className="text-white font-medium">All levels</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Total Prize</div>
                  <div className="text-white font-medium">50,000.00 USD</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Location</div>
                  <div className="text-white font-medium">Online</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">Links</div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-1">
                      <span className="text-xl">✕</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white p-1">
                      <span className="text-xl">⚬</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Quests */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Project Quests</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-white text-sm">Join Telegram Group</div>
                </div>
                <div className="text-blue-400 text-sm cursor-pointer hover:underline">
                  Join Telegram
                </div>
                <div className="text-blue-400 text-sm cursor-pointer hover:underline">
                  Follow Tech Fairness Hackathon on X
                </div>
                <div className="text-blue-400 text-sm cursor-pointer hover:underline">
                  Join Tech Fairness Hackathon on Discord
                </div>
                <div className="text-blue-400 text-sm cursor-pointer hover:underline">
                  Join Discord
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};