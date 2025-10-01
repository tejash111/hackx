import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMyContext } from "../../../context/createHackContext";

export const TechStackSection = () => {
  // Unified form state object
  const [formData, setFormData] = useState({
    githubLink: "",
    demoVideo: {
      type: "", // "upload" or "link"
      file: null,
      url: ""
    },
    techStackTags: []
  });


  const {createProjectData,setCreateProjectData}=useMyContext()
    
    const [customTag, setCustomTag] = useState("");
  
    // Update formData whenever any field changes
    useEffect(() => {
      setCreateProjectData((prev)=>({
        ...prev,
        ...formData
      }))
    }, [formData]);

  // Update formData whenever any field changes
  useEffect(() => {
    console.log("TechStack Form Data Updated:", formData);
  }, [formData]);

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

  // Generic form field update function
  const updateFormField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle nested demo video updates
  const updateDemoVideo = (property, value) => {
    setFormData(prev => ({
      ...prev,
      demoVideo: {
        ...prev.demoVideo,
        [property]: value
      }
    }));
  };

  const handleDemoVideoType = (type) => {
    updateDemoVideo("type", type);
    // Reset the other video option when switching types
    if (type === "upload") {
      updateDemoVideo("url", "");
    } else {
      updateDemoVideo("file", null);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateDemoVideo("file", file);
      updateDemoVideo("type", "upload");
    }
  };

  // Tech Stack tag management functions
  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      techStackTags: prev.techStackTags.includes(tag)
        ? prev.techStackTags.filter(t => t !== tag)
        : [...prev.techStackTags, tag]
    }));
  };

  const addCustomTag = () => {
    if (customTag.trim() && !formData.techStackTags.includes(customTag.trim())) {
      setFormData(prev => ({
        ...prev,
        techStackTags: [...prev.techStackTags, customTag.trim()]
      }));
      setCustomTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      techStackTags: prev.techStackTags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* GitHub Link */}
      <div className="flex flex-col gap-3">
        <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
          Github Link
        </Label>
        <Input
          value={formData.githubLink}
          onChange={(e) => updateFormField("githubLink", e.target.value)}
          placeholder="https://"
          className="h-16 bg-[#0f1011] border-[#242425] rounded-[10px] text-white placeholder:text-white placeholder:opacity-40 [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal] px-[21px]"
        />
      </div>

      {/* Demo Video Section */}
      <div className="flex flex-col gap-6">
        <div className="w-full h-[200px] bg-[#0f1011] border border-[#242425] rounded-[10px] flex items-center justify-center relative">
          <div className="flex flex-col items-center gap-4">
            <div className="text-white opacity-60 text-center">
              <div className="text-lg mb-2">Demo Video</div>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => handleDemoVideoType("upload")}
                className="bg-[#0092ff] hover:bg-[#0092ff]/80 px-6 py-2 rounded-lg"
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm">
                  Upload Video
                </span>
              </Button>
              <Button 
                onClick={() => handleDemoVideoType("link")}
                variant="outline" 
                className="border-[#0092ff] text-[#0092ff] hover:bg-[#0092ff]/10 px-6 py-2 rounded-lg"
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm">
                  Add Video Link
                </span>
              </Button>
            </div>
          </div>

          {/* File input for video upload */}
          {formData.demoVideo.type === "upload" && (
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="absolute bottom-4 left-4 text-white text-sm"
            />
          )}

          {/* URL input for video link */}
          {formData.demoVideo.type === "link" && (
            <Input
              value={formData.demoVideo.url}
              onChange={(e) => updateDemoVideo("url", e.target.value)}
              placeholder="Enter video URL"
              className="absolute bottom-4 left-4 right-4 bg-[#0f1011] border-[#242425] text-white"
            />
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-col gap-4">
          <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Tech Stack Tags
          </Label>
          
          {/* Selected Tags */}
          {formData.techStackTags.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap">
              {formData.techStackTags.map((tag, index) => (
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
              .filter(tag => !formData.techStackTags.includes(tag))
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
              className="text-white bg-black px-4 py-2 rounded-lg h-12"
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