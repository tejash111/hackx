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
  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-8 bg-[#1b1a1d]">
      
      {/* Hackathon Name */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Hackathon Name
        </Label>
        <Input
          className="w-full h-16 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400"
          placeholder="Enter hackathon name"
        />
      </div>

      {/* Hackathon Visual Upload */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Hackathon Visual
        </Label>
        <Card className="w-full h-80 bg-[#0f1011] rounded-lg border border-[#242425]">
          <CardContent className="p-8 h-full flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <ImageIcon className="w-12 h-12 text-[#738b9f]" />
              <div className="text-center text-[#738b9f] text-sm">
                Drag 'n' drop a hackathon visual here or:
              </div>
              <Button
                variant="link"
                className="text-[#0092ff] text-sm font-semibold p-0 h-auto"
              >
                Click to browse
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Short Description */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Short Description
        </Label>
        <Textarea
          className="w-full h-80 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 resize-none"
          placeholder="Short description that goes under key visual"
        />
      </div>

      {/* Date Fields Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Registration Duration
          </Label>
          <div className="relative">
            <Input
              className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
              placeholder="From — to dates"
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Hackathon Duration
          </Label>
          <div className="relative">
            <Input
              className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
              placeholder="From — to dates"
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Voting Duration
          </Label>
          <div className="relative">
            <Input
              className="w-full h-14 bg-[#0f1011] rounded-lg border border-[#242425] text-white placeholder:text-gray-400 pr-12"
              placeholder="From — to dates"
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Tech Stack and Experience Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Tech Stack
          </Label>
          <Select>
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
          <Select>
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
          />
        </div>

        <div className="space-y-3">
          <Label className="text-white text-base font-normal">
            Judging Mode
          </Label>
          <Select>
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
        <Label className="text-white text-base font-normal">
          Social Links
        </Label>
        <div className="flex gap-4">
          <Select>
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
          />
        </div>
        <Button
          variant="link"
          className="text-[#0092ff] text-lg font-normal p-0 h-auto"
        >
          + add another link
        </Button>
      </div>

      {/* Full Description */}
      <div className="space-y-3">
        <Label className="text-white text-base font-normal">
          Full Description
        </Label>
        <Card className="w-full bg-[#0f1011] rounded-lg border border-[#242425]">
          <CardContent className="p-6">
            {/* Rich Text Editor Toolbar */}
            <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-[#242425]">
              <div className="flex items-center gap-2 bg-[#2b3740] rounded px-3 py-2">
                <span className="text-white text-sm font-medium">Paragraph text</span>
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex items-center bg-[#2b3740] rounded">
                <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a4a55]">-</Button>
                <span className="px-2 text-white text-sm">14</span>
                <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a4a55]">+</Button>
              </div>
              
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a4a55]">B</Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a4a55]">I</Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-[#3a4a55]">U</Button>
              </div>
            </div>
            
            {/* Text Editor Area */}
            <div className="min-h-96 w-full text-white">
              <Textarea
                className="w-full min-h-96 bg-transparent border-none text-white placeholder:text-gray-400 resize-none focus:outline-none"
                placeholder="Write your full hackathon description here..."
              />
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};
