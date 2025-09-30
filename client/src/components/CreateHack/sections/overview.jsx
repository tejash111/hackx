import { CalendarIcon, ChevronDownIcon, ImageIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";

export const ElementCreate = () => {
  // State for all fields
  const [name, setName] = useState("");
  const [visual, setVisual] = useState(null);
  const [shortDesc, setShortDesc] = useState("");
  const [registrationDuration, setRegistrationDuration] = useState("");
  const [hackathonDuration, setHackathonDuration] = useState("");
  const [votingDuration, setVotingDuration] = useState("");
  const [techStack, setTechStack] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [location, setLocation] = useState("");
  const [judgingMode, setJudgingMode] = useState("");
  const [socialLinks, setSocialLinks] = useState([{ type: "", url: "" }]);
  const [fullDesc, setFullDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  

  // Handlers
  const handleVisualChange = (e) => {
    setVisual(e.target.files[0]);
  };

  const handleSocialLinkChange = (idx, field, value) => {
    const links = [...socialLinks];
    links[idx][field] = value;
    setSocialLinks(links);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { type: "", url: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const hackathon = {
        name,
        shortDesc,
        fullDesc,
        registrationDuration,
        hackathonDuration,
        votingDuration,
        techStack,
        experienceLevel,
        location,
        judgingMode,
        socialLinks,
      };
     
      
      
      const formData = new FormData();
      formData.append("hackathon", JSON.stringify(hackathon));
      if (visual) formData.append("image", visual);

      const resp = await fetch("http://localhost:5000/api/hackathon/upload", {
        method: "POST",
        body: formData,
      });
      const data = await resp.json();
      setResult(data);
    } catch (err) {
      setResult({ success: false, message: err.message });
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto p-6 space-y-8 bg-[#1b1a1d]"
    >
      {/* Hackathon Name */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Hackathon Name
        </Label>
        <Input
          className="w-full h-16 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400"
          placeholder="Enter hackathon name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Hackathon Visual Upload */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Hackathon Visual
        </Label>
        <input
          type="file"
          accept="image/*"
          onChange={handleVisualChange}
          className="mb-2 text-white"
        />
      </div>

      {/* Short Description */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Short Description
        </Label>
        <Textarea
          className="w-full h-80 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 resize-none"
          placeholder="Short description that goes under key visual"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
        />
      </div>

      {/* Date Fields Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Registration Duration
          </Label>
          <Input
            className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
            placeholder="From — to dates"
            value={registrationDuration}
            onChange={(e) => setRegistrationDuration(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Hackathon Duration
          </Label>
          <Input
            className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
            placeholder="From — to dates"
            value={hackathonDuration}
            onChange={(e) => setHackathonDuration(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Voting Duration
          </Label>
          <Input
            className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
            placeholder="From — to dates"
            value={votingDuration}
            onChange={(e) => setVotingDuration(e.target.value)}
          />
        </div>
      </div>

      {/* Tech Stack and Experience Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">Tech Stack</Label>
          <Select value={techStack} onValueChange={setTechStack}>
            <SelectTrigger className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white">
              <SelectValue placeholder="Select tech stack" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="all">All tech stack</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Experience Level
          </Label>
          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="all">All levels accepted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Location and Judging Mode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Hackathon Location
          </Label>
          <Input
            className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400"
            placeholder="Enter hackathon location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Judging Mode
          </Label>
          <Select value={judgingMode} onValueChange={setJudgingMode}>
            <SelectTrigger className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white">
              <SelectValue placeholder="Judges Only" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="judges">Judges Only</SelectItem>
              <SelectItem value="public">Public Voting</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">Social Links</Label>
        {socialLinks.map((link, idx) => (
          <div className="flex gap-4 mb-2" key={idx}>
            <Select
              value={link.type}
              onValueChange={(val) => handleSocialLinkChange(idx, "type", val)}
            >
              <SelectTrigger className="w-48 h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white">
                <SelectValue placeholder="x.com" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">x.com</SelectItem>
                <SelectItem value="linkedin">linkedin.com</SelectItem>
                <SelectItem value="discord">discord.com</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="flex-1 h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400"
              placeholder="Enter link to x.com"
              value={link.url}
              onChange={(e) =>
                handleSocialLinkChange(idx, "url", e.target.value)
              }
            />
          </div>
        ))}
        <Button
          variant="link"
          className="text-[#0092ff] text-lg font-normal p-0 h-auto"
          type="button"
          onClick={addSocialLink}
        >
          + add another link
        </Button>
      </div>

      {/* Full Description */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Full Description
        </Label>
        <Textarea
          className="w-full min-h-96 bg-transparent border-none text-white placeholder:text-gray-400 resize-none focus:outline-none"
          placeholder="Write your full hackathon description here..."
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-14 bg-[#0092ff] text-white text-lg font-semibold rounded-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Create Hackathon"}
      </Button>
      {result && (
        <div className="mt-4 text-white">
          {result.success ? (
            <div>
              <div>
                Success! IPFS Metadata URL:{" "}
                <a
                  href={result.metadataUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  {result.metadataUrl}
                </a>
              </div>
            </div>
          ) : (
            <div>Error: {result.message}</div>
          )}
        </div>
      )}
    </form>
  );
};
