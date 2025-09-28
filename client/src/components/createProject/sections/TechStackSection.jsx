import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const TechStackSection = () => {
  const [selectedTags, setSelectedTags] = useState([
    "React",
    "Node",
    "TypeScript"
  ]);
  const [customTag, setCustomTag] = useState("");

  const availableTags = [
    "React",
    "Next",
    "Vue",
    "Web3",
    "Ethers",
    "Node",
    "Java",
    "Go",
    "Python",
    "Solidity",
    "Rust",
    "Move",
    "Express",
    "PostgreSQL",
    "Vite",
    "Tailwind"
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags(prev => [...prev, customTag.trim()]);
      setCustomTag("");
    }
  };

  const removeTag = (tagToRemove ) => {
    setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Github Link
        </Label>
        <Input
          placeholder="https://"
          className="h-16 bg-[#0f1011] border-[#242425] rounded-[10px] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] px-[21px]"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="w-full h-[200px] bg-[#0f1011] border border-[#242425] rounded-[10px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-white opacity-60 text-center">
              <div className="text-lg mb-2">Demo Video</div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#0092ff] hover:bg-[#0092ff]/80 px-6 py-2 rounded-lg">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm">
                  Upload Video
                </span>
              </Button>
              <Button variant="outline" className="border-[#0092ff] text-[#0092ff] hover:bg-[#0092ff]/10 px-6 py-2 rounded-lg">
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                  Add Video Link
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Tech Stack Tags
          </Label>
          
          {/* Selected Tags */}
          {selectedTags.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap">
              {selectedTags.map((tag, index) => (
                <Badge
                  key={`selected-${index}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0092ff] text-white hover:bg-[#0092ff]/80 cursor-pointer transition-colors"
                  onClick={() => removeTag(tag)}
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                    {tag}
                  </span>
                  <span className="text-white/60 ml-1">×</span>
                </Badge>
              ))}
            </div>
          )}

          {/* Available Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            {availableTags
              .filter(tag => !selectedTags.includes(tag))
              .map((tag, index) => (
                <Badge
                  key={`available-${index}`}
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#738b9f] bg-transparent hover:bg-[#738b9f]/10 cursor-pointer transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm">
                    + {tag}
                  </span>
                </Badge>
              ))}
          </div>

          {/* Add Custom Tag */}
          <div className="flex items-center gap-3">
            <Input
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              placeholder="Enter Tag"
              className="h-12 bg-[#0f1011] border-[#242425] rounded-lg text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-sm px-4 max-w-[200px]"
              onKeyPress={(e) => e.key === 'Enter' && addCustomTag()}
            />
            <Button
              onClick={addCustomTag}
              variant="outline"
              className="border-[#738b9f] text-white hover:bg-[#738b9f]/10 px-4 py-2 rounded-lg h-12"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-sm">
                + Add New Tag
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};