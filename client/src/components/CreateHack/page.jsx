import React from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

// Import your section components
import { OverviewSection } from "./sections/overview";
import { PrizeSection } from "./sections/prizes";
import { JudgeSection } from "./section/judges";

export const CreateHackPage = () => {
  const steps = [
    { label: "Overview", active: true },
    { label: "Prize", active: false },
    { label: "Judge", active: false },
  ];

  return (
    <div className="bg-[#1b1a1d] w-full max-w-[1728px] min-h-screen relative flex">
      {/* Sidebar (optional, similar to hackDiscovery) */}
      <aside className="w-[216px] min-h-screen bg-[#1b1a1d] border-r border-[#242425] flex flex-col">
        {/* ...Sidebar content if needed... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[79px] border-b border-[#242425] flex items-center justify-between px-4">
          <h1 className="text-white text-2xl font-semibold">Create Hackathon</h1>
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-[#472915] text-white font-normal text-base">
              U
            </AvatarFallback>
          </Avatar>
        </header>

        {/* Steps Navigation */}
        <section className="flex gap-4 px-8 py-6">
          {steps.map((step, idx) => (
            <Badge
              key={idx}
              className={`px-4 py-2 rounded-full ${step.active ? "bg-[#0092ff] text-white" : "bg-[#242425] text-[#949fa8]"}`}
            >
              {step.label}
            </Badge>
          ))}
        </section>

        {/* Sections for Create Hack */}
        <section className="px-8 py-6 space-y-8">
          <OverviewSection />
          <PrizeSection />
          <JudgeSection />

          <Button className="bg-[#0092ff] text-white px-6 py-3 mt-4">
            Create Hackathon
          </Button>
        </section>
      </main>
    </div>
  );
};