import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";



const hackathons = [
  {
    id: "web3-innovate-jam",
    title: "Web3 Innovate Jam",
    status: "Live",
    description: "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
    registrationStatus: "Registration 12 days left",
    registrationDeadline: "All tech stack",
    techStack: "All tech stack",
    skillLevel: "All levels accepted",
    totalPrize: "$30,000.00 USD",
    imageUrl: "/hackathon-images/web3-jam.jpg",
    bgColor: "from-purple-600 to-pink-600"
  },
  {
    id: "coindora-hackfest",
    title: "Coindora Hackfest",
    status: "Live", 
    description: "Coindora Hackfest was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In so ma...",
    registrationStatus: "Registration 12 days left",
    registrationDeadline: "All tech stack",
    techStack: "All tech stack", 
    skillLevel: "All levels accepted",
    totalPrize: "$50,000.00 USD",
    imageUrl: "/hackathon-images/coindora-hackfest.jpg",
    bgColor: "from-blue-600 to-cyan-600"
  }
];

export const HackathonSubmissionSection = ()  => {
  const handleSubmitToHackathon = (hackathonId) => {
    console.log(`Submitting to hackathon: ${hackathonId}`);
    // Implementation for hackathon submission
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          Submit Project to Hackathon
        </h1>
        <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-base tracking-[0] leading-[normal] max-w-2xl">
          Select an existing hackathon to submit your project to. 
          This way your project will appear in hackathon project gallery 
          early. You can always submit your project to hackathon later
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {hackathons.map((hackathon) => (
          <div 
            key={hackathon.id}
            className="bg-[#0f1011] border border-[#242425] rounded-[12px] p-6 flex gap-6"
          >
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
                  {hackathon.title}
                </h3>
                <Badge 
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hackathon.status === 'Live' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {hackathon.status}
                </Badge>
              </div>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-[1.4] line-clamp-2">
                {hackathon.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white/60 text-xs">
                    Registration close
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    {hackathon.registrationStatus}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white/60 text-xs">
                    Tech stack
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    {hackathon.techStack}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white/60 text-xs">
                    Skill level
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    {hackathon.skillLevel}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white/60 text-xs">
                    Total prize
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm">
                    {hackathon.totalPrize}
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => handleSubmitToHackathon(hackathon.id)}
                className="bg-[#0092ff] hover:bg-[#0092ff]/80 text-white w-fit px-6 py-2 rounded-lg mt-2"
                data-testid={`button-submit-${hackathon.id}`}
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                  Submit to this Hackathon →
                </span>
              </Button>
            </div>

            <div className="w-64 h-48 relative">
              <div className={`w-full h-full rounded-lg bg-gradient-to-br ${hackathon.bgColor} flex items-center justify-center relative overflow-hidden`}>
                {/* Hackathon logo/branding area */}
                <div className="text-white text-center p-4">
                  <div className="text-lg font-bold mb-2">
                    {hackathon.title.split(' ')[0]}
                  </div>
                  <div className="text-lg font-bold mb-1">
                    {hackathon.title.split(' ').slice(1).join(' ')}
                  </div>
                  {hackathon.id === "web3-innovate-jam" && (
                    <div className="text-sm opacity-80 mt-2">
                      AI & Blockchain Edition
                    </div>
                  )}
                  {hackathon.id === "coindora-hackfest" && (
                    <div className="text-sm opacity-80 mt-2">
                      ASTRAL COSMOS<br />CHALLENGE
                    </div>
                  )}
                  <div className="text-lg font-bold mt-3">
                    {hackathon.totalPrize.split('.')[0]} prize pool
                  </div>
                  <div className="text-sm opacity-80">
                    {hackathon.id === "web3-innovate-jam" ? "May 10-12, 2024" : "September 5-9, 2024"}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg"></div>
                {hackathon.id === "coindora-hackfest" && (
                  <div className="absolute right-4 bottom-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};