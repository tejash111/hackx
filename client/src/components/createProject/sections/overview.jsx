import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { LinkIcon, UploadIcon } from "lucide-react";

export const Overview = () => {
  // Unified form state object
  const [formData, setFormData] = useState({
    projectName: "",
    projectIntro: "",
    sectors: [],
    pitchVideo: {
      type: "", // "upload" or "link"
      file: null,
      url: ""
    },
    progressDuringHackathon: "",
    fundraisingStatus: "",
    fullDescription: ""
  });


  
  const [customTag, setCustomTag] = useState("");

  // Update formData whenever any field changes
  useEffect(() => {
    console.log("Overview Form Data Updated:", formData);
  }, [formData]);

  const buttonData = [
    {
      icon: UploadIcon,
      text: "Upload Video",
      className: "w-40",
      action: () => handlePitchVideoType("upload")
    },
    {
      icon: LinkIcon,
      text: "Add Video Link",
      className: "w-[171px]",
      action: () => handlePitchVideoType("link")
    },
  ];

  // Generic form field update function
  const updateFormField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle nested pitch video updates
  const updatePitchVideo = (property, value) => {
    setFormData(prev => ({
      ...prev,
      pitchVideo: {
        ...prev.pitchVideo,
        [property]: value
      }
    }));
  };

  const handlePitchVideoType = (type) => {
    updatePitchVideo("type", type);
    // Reset the other video option when switching types
    if (type === "upload") {
      updatePitchVideo("url", "");
    } else {
      updatePitchVideo("file", null);
    }
  };
  
  const availableTags = [
    "SocialFi", "DeFi", "NFT", "Infra", "Gaming", 
    "DAO", "RWA", "AI", "Other"
  ];

  // Sector/Tag management functions
  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.includes(tag)
        ? prev.sectors.filter(t => t !== tag)
        : [...prev.sectors, tag]
    }));
  };

  const addCustomTag = () => {
    if (customTag.trim() && !formData.sectors.includes(customTag.trim())) {
      setFormData(prev => ({
        ...prev,
        sectors: [...prev.sectors, customTag.trim()]
      }));
      setCustomTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      updatePitchVideo("file", file);
      updatePitchVideo("type", "upload");
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Project Name */}
      <div>
        <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Project Name
        </Label>
        <div className="relative">
          <Input
            value={formData.projectName}
            onChange={(e) => updateFormField("projectName", e.target.value)}
            placeholder="Enter project name"
            className="h-16 bg-[#0f1011] border-[#242425] rounded-[10px] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] px-[21px]"
          />
        </div>
      </div>

      {/* Project Intro */}
      <div className="w-full flex flex-col gap-3">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Project Intro
        </Label>
        <div className="relative">
          <textarea
            value={formData.projectIntro}
            onChange={(e) => updateFormField("projectIntro", e.target.value)}
            placeholder="Short project intro"
            className="min-h-[140px] w-full bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] resize-none px-4 py-3"
          />
        </div>
      </div>

      {/* Sector Selection */}
      <section className="w-full flex flex-col gap-3">
        <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Sector
        </h2>
        {/* Selected Tags */}
        {formData.sectors.length > 0 && (
          <div className="flex items-center gap-3 flex-wrap">
            {formData.sectors.map((tag, index) => (
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
            .filter(tag => !formData.sectors.includes(tag))
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
            className="border-[#738b9f] bg-transparent hover:bg-[#738b9f]/10 text-white hover:text-white px-4 py-2 rounded-lg h-12"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-sm">
              + Add New Tag
            </span>
          </Button>
        </div>
      </section>

      {/* Pitch Video Section */}
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
                onClick={button.action}
                className={`${button.className} inline-flex h-[46px] items-center justify-center gap-2 px-6 py-5 bg-[#0092ff] rounded-lg hover:bg-[#0092ff]/90`}
              >
                <button.icon className="w-3.5 h-3.5" />
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
                  {button.text}
                </span>
              </Button>
            ))}
          </div>

          {/* File input for video upload */}
          {formData.pitchVideo.type === "upload" && (
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="absolute top-40 left-4 text-white text-sm"
            />
          )}

          {/* URL input for video link */}
          {formData.pitchVideo.type === "link" && (
            <Input
              value={formData.pitchVideo.url}
              onChange={(e) => updatePitchVideo("url", e.target.value)}
              placeholder="Enter video URL"
              className="absolute top-40 left-4 right-4 bg-[#0f1011] border-[#242425] text-white"
            />
          )}
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

      {/* Progress During Hackathon */}
      <div className="w-full flex flex-col gap-3">
        <div className="w-52 h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Progress During Hackathon
        </div>
        <div className="relative">
          <textarea
            value={formData.progressDuringHackathon}
            onChange={(e) => updateFormField("progressDuringHackathon", e.target.value)}
            placeholder="Describe what you have accomplished during the hackathon"
            className="min-h-[140px] w-full bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] resize-none px-4 py-3"
          />
        </div>
      </div>

      {/* Fundraising Status */}
      <div className="w-full flex flex-col gap-3">
        <div className="w-52 h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Fundraising Status
        </div>
        <div className="relative">
          <textarea
            value={formData.fundraisingStatus}
            onChange={(e) => updateFormField("fundraisingStatus", e.target.value)}
            placeholder="Have you raised any money already? How much do you need to finish the product? Etc."
            className="min-h-[140px] w-full bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] resize-none px-4 py-3"
          />
        </div>
      </div>

      {/* Full Description */}
      <div className="w-full flex flex-col gap-3">
        <div className="w-52 h-[19px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          Full Description
        </div>
        <div className="relative">
          <textarea
            value={formData.fullDescription}
            onChange={(e) => updateFormField("fullDescription", e.target.value)}
            placeholder="Provide a comprehensive description of your project, including features, goals, and implementation details."
            className="min-h-[340px] w-full bg-[#0f1011] rounded-[10px] border border-solid border-[#242425] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] resize-none px-4 py-3"
          />
        </div>
      </div>

    </div>
  );
};
