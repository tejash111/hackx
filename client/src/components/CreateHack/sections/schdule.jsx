import React, { useState } from 'react'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { Card, CardContent } from '../../ui/card'
import { date } from 'drizzle-orm/mysql-core'

const Schdule = () => {
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [speakerForm, setSpeakerForm] = useState({
    name: "",
    link: "",
    realName: "",
    workPlace: "",
    picture: null
  });

  const handleInputChange = (field, value) => {
    setSpeakerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSpeakerForm(prev => ({
        ...prev,
        picture: URL.createObjectURL(file)
      }));
    }
  };

  const addSpeaker = () => {
    console.log('Speaker added:', speakerForm);
    // Add your logic here to save the speaker
    setSpeakerForm({
      name: "",
      link: "",
      realName: "",
      workPlace: "",
      picture: null
    });
    setShowSpeakerForm(false);
  };

  return (
   <div className="ml-[250px] mt-20 p-8">
        {/* Schedule Section */}
        <div className="space-y-6">
          {/* End Registration */}
          <div>
            <Label className="text-white text-lg mb-3 block">End Registration</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">From</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select start date & time"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">To</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select end date & time"
                />
              </div>
            </div>
          </div>

          {/* Opening Ceremony */}
          <div>
            <Label className="text-white text-lg mb-3 block">Opening Ceremony</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Date & Time</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select date & time"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Status</Label>
                <select className="border-[#252525] bg-[#0E1010] w-32 text-[#F3FEFF] h-12 rounded-md px-3">
                  <option value="">Select status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submission */}
          <div>
            <Label className="text-white text-lg mb-3 block">Submission</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">From</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select start date & time"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">To</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select end date & time"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Status</Label>
                <select className="border-[#252525] bg-[#0E1010] w-32 text-[#F3FEFF] h-12 rounded-md px-3">
                  <option value="">Select status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reward Announcement */}
          <div>
            <Label className="text-white text-lg mb-3 block">Reward Announcement</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Date & Time</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select date & time"
                />
              </div>
            </div>
          </div>

          {/* Award Ceremony & Live Demo */}
          <div>
            <Label className="text-white text-lg mb-3 block">Award Ceremony & Live Demo</Label>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Date & Time</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select date & time"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-5 border border-[#252525]'/>

        {/* Speaker Section */}
        <div className="mt-8">
          <Card className="mb-6 bg-[#0f1011] border border-[#242425]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <input 
                  type="checkbox" 
                  checked={showSpeakerForm} 
                  onChange={(e) => setShowSpeakerForm(e.target.checked)}
                  className="w-4 h-4 text-[#0092ff] bg-gray-100 border-gray-300 rounded focus:ring-[#0092ff] focus:ring-2"
                />
                <span className="text-white text-sm">Include Speaker</span>
              </div>

              {showSpeakerForm && (

                <div className="space-y-6">
                  {/* Speaker Picture */}
                  <div>
                    <Label className="text-white text-sm mb-3 block">
                      Speaker Picture
                    </Label>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-lg bg-[#2a2a2a] border-2 border-dashed border-[#666] flex flex-col items-center justify-center">
                        {speakerForm.picture ? (
                          <img
                            src={speakerForm.picture}
                            alt="Speaker"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <>
                            <div className="w-8 h-8 mb-1">
                              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#666]">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="10" cy="13" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-xs text-[#666] text-center">
                              Drag'n'drop project<br />logo here or:
                            </span>
                          </>
                        )}
                      </div>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="picture-upload"
                        />
                        <Button
                          variant="link"
                          onClick={() => document.getElementById('picture-upload').click()}
                          className="text-[#0092ff] hover:text-[#0092ff]/80 p-0 h-auto text-sm"
                        >
                          Click to browse
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Speaker x.com name */}
                    <div>
                      <Label className="text-white text-sm mb-3 block">
                        Speaker x.com name
                      </Label>
                      <Input
                        value={speakerForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full h-12 bg-[#1b1a1d] border border-[#242425] text-white placeholder:text-[#666]"
                        placeholder="Enter speaker x.com name"
                      />
                    </div>

                    {/* Speaker x.com link */}
                    <div>
                      <Label className="text-white text-sm mb-3 block">
                        Speaker x.com link
                      </Label>
                      <Input
                        value={speakerForm.link}
                        onChange={(e) => handleInputChange('link', e.target.value)}
                        className="w-full h-12 bg-[#1b1a1d] border border-[#242425] text-white placeholder:text-[#666]"
                        placeholder="Enter speaker x.com link"
                      />
                    </div>

                    {/* Speaker real name */}
                    <div>
                      <Label className="text-white text-sm mb-3 block">
                        Speaker real name
                      </Label>
                      <Input
                        value={speakerForm.realName}
                        onChange={(e) => handleInputChange('realName', e.target.value)}
                        className="w-full h-12 bg-[#1b1a1d] border border-[#242425] text-white placeholder:text-[#666]"
                        placeholder="Enter speaker real name"
                      />
                    </div>

                    {/* Speaker work place & position */}
                    <div>
                      <Label className="text-white text-sm mb-3 block">
                        Speaker work place & position
                      </Label>
                      <Input
                        value={speakerForm.workPlace}
                        onChange={(e) => handleInputChange('workPlace', e.target.value)}
                        className="w-full h-12 bg-[#1b1a1d] border border-[#242425] text-white placeholder:text-[#666]"
                        placeholder="Enter speaker details"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={addSpeaker}
                      className="bg-[#0092ff] hover:bg-[#0092ff]/90 text-white px-6"
                    >
                      Add Speaker
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowSpeakerForm(false)}
                      className="bg-transparent border-[#666] text-[#666] hover:bg-[#666] hover:text-white px-6"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

export default Schdule