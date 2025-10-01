import React, { useState, useEffect } from 'react'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { Card, CardContent } from '../../ui/card'
import { useMyContext } from '../../../context/createHackContext'

const Schdule = () => {
  // Schedule state
  const [endRegistration, setEndRegistration] = useState({
    from: "",
    to: ""
  });
  const [openingCeremony, setOpeningCeremony] = useState({
    dateTime: "",
    status: ""
  });
  const [submission, setSubmission] = useState({
    from: "",
    to: "",
    status: ""
  });
  const [rewardAnnouncement, setRewardAnnouncement] = useState({
    dateTime: ""
  });
  const [awardCeremony, setAwardCeremony] = useState({
    dateTime: ""
  });

  // Speaker state
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [speakerForm, setSpeakerForm] = useState({
    name: "",
    link: "",
    realName: "",
    workPlace: "",
    picture: null
  });
  const [speakers, setSpeakers] = useState([]);

  // Complete schedule data object
  const {createHackData,setCreateHackData}=useMyContext()

  console.log(createHackData);
  
  useEffect(() => {
    const updatedData = {
      endRegistration,
      openingCeremony,
      submission,
      rewardAnnouncement,
      awardCeremony,
      speakers,
      includeSpeaker: showSpeakerForm,
      lastUpdated: new Date().toISOString()
    };
     setCreateHackData((prev)=>({
      ...prev,
      ...updatedData
    }))
   
  }, [endRegistration, openingCeremony, submission, rewardAnnouncement, awardCeremony, speakers, showSpeakerForm]);

  // Handler functions
  const handleEndRegistrationChange = (field, value) => {
    setEndRegistration(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOpeningCeremonyChange = (field, value) => {
    setOpeningCeremony(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmissionChange = (field, value) => {
    setSubmission(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRewardAnnouncementChange = (value) => {
    setRewardAnnouncement({ dateTime: value });
  };

  const handleAwardCeremonyChange = (value) => {
    setAwardCeremony({ dateTime: value });
  };

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
    if (speakerForm.name.trim()) {
      setSpeakers(prev => [...prev, { ...speakerForm, id: Date.now() }]);
      setSpeakerForm({
        name: "",
        link: "",
        realName: "",
        workPlace: "",
        picture: null
      });
      setShowSpeakerForm(false);
    }
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
                  value={endRegistration.from}
                  onChange={(e) => handleEndRegistrationChange('from', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">To</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select end date & time"
                  value={endRegistration.to}
                  onChange={(e) => handleEndRegistrationChange('to', e.target.value)}
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
                  value={openingCeremony.dateTime}
                  onChange={(e) => handleOpeningCeremonyChange('dateTime', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Status</Label>
                <select 
                  className="border-[#252525] bg-[#0E1010] w-32 text-[#F3FEFF] h-12 rounded-md px-3"
                  value={openingCeremony.status}
                  onChange={(e) => handleOpeningCeremonyChange('status', e.target.value)}
                >
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
                  value={submission.from}
                  onChange={(e) => handleSubmissionChange('from', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">To</Label>
                <Input 
                  type="datetime-local" 
                  className="border-[#252525] bg-[#0E1010] w-48 text-[#F3FEFF] h-12"
                  placeholder="Select end date & time"
                  value={submission.to}
                  onChange={(e) => handleSubmissionChange('to', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400 text-sm">Status</Label>
                <select 
                  className="border-[#252525] bg-[#0E1010] w-32 text-[#F3FEFF] h-12 rounded-md px-3"
                  value={submission.status}
                  onChange={(e) => handleSubmissionChange('status', e.target.value)}
                >
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
                  value={rewardAnnouncement.dateTime}
                  onChange={(e) => handleRewardAnnouncementChange(e.target.value)}
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
                  value={awardCeremony.dateTime}
                  onChange={(e) => handleAwardCeremonyChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-5 border border-[#252525]'/>

        {/* Added Speakers List */}
        {speakers.length > 0 && (
          <div className="mt-8">
            <Label className="text-white text-lg mb-4 block">Added Speakers</Label>
            <div className="space-y-4">
              {speakers.map((speaker, index) => (
                <Card key={speaker.id} className="bg-[#0f1011] border border-[#242425]">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {speaker.picture && (
                        <img 
                          src={speaker.picture} 
                          alt={speaker.realName} 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{speaker.realName}</h4>
                        <p className="text-gray-400 text-sm">{speaker.workPlace}</p>
                        <p className="text-blue-400 text-sm">@{speaker.name}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSpeakers(speakers.filter(s => s.id !== speaker.id))}
                        className="bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

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

        {/* Data Status */}
        <div className="mt-8 text-center text-gray-400">
          <p>Schedule data is automatically collected in scheduleData object</p>
          <p className="text-xs mt-2">Check console to see current data</p>
        </div>
    </div>
  )
}

export default Schdule