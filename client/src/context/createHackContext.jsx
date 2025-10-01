import React, { createContext, useContext, useState } from "react";

const CreateGlobalContext = createContext();

export const CreateHackthonContext = ({ children }) => {
  const [createHackData, setCreateHackData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Prepare hackathon object for backend
      const hackathonData = {
        id: `hackathon-${Date.now()}`,
        title: createHackData.name || "",
        description: createHackData.shortDesc || "",
        longDescription: createHackData.fullDesc || "",
        status: "upcoming", // default status
        statusColor: "bg-[#4ef4664c]", // default color
        registrationLabel: "Registration",
        registrationValue: createHackData.registrationDuration || "",
        techStack: createHackData.techStack || "",
        level: createHackData.experienceLevel || "",
        totalPrize: calculateTotalPrize(createHackData.prizeCohorts),
        participants: "0 Participants", // default
        image: "", // will be updated by backend if visual is uploaded
        type: "upcoming",
        organizer: "Your Organization", // you can add this field
        startDate: createHackData.hackathonDuration?.split(" - ")[0] || "",
        endDate: createHackData.hackathonDuration?.split(" - ")[1] || "",
        location: createHackData.location || "",
        requirements: [], // you can add this field
        prizes: formatPrizesForBackend(createHackData.prizeCohorts),
        sponsors: [], // you can add this field
        timeline: formatTimelineForBackend(createHackData),
        // Additional fields from your forms
        socialLinks: createHackData.socialLinks || [],
        judgingMode: createHackData.judgingMode || "",
        schedule: {
          endRegistration: createHackData.endRegistration,
          openingCeremony: createHackData.openingCeremony,
          submission: createHackData.submission,
          rewardAnnouncement: createHackData.rewardAnnouncement,
          awardCeremony: createHackData.awardCeremony,
          speakers: createHackData.speakers || [],
        },
      };

      // Create FormData for file upload
      const formData = new FormData();
      formData.append("hackathon", JSON.stringify(hackathonData));

      // Add image if present
      if (createHackData.visual) {
        formData.append("image", createHackData.visual);
      }

      // Send to backend
      const response = await fetch(
        "http://localhost:5000/api/hackathon/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      setSubmitResult(result);

      if (result.success) {
        console.log("Hackathon created successfully:", result);
        // Optionally reset form data
        // setCreateHackData({});
      }
    } catch (error) {
      console.error("Error submitting hackathon:", error);
      setSubmitResult({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions
  const calculateTotalPrize = (prizeCohorts) => {
    if (!prizeCohorts) return "0.00 USD";
    const total = prizeCohorts.reduce((sum, cohort) => {
      const amount = parseFloat(cohort.prizeAmount) || 0;
      return sum + amount;
    }, 0);
    return `${total.toFixed(2)} USD`;
  };

  const formatPrizesForBackend = (prizeCohorts) => {
    if (!prizeCohorts || prizeCohorts.length === 0) {
      return { first: "0 USD", second: "0 USD", third: "0 USD" };
    }
    // Map your prize cohorts to the expected format
    return {
      first: prizeCohorts[0]?.prizeAmount
        ? `${prizeCohorts[0].prizeAmount} USD`
        : "0 USD",
      second: prizeCohorts[1]?.prizeAmount
        ? `${prizeCohorts[1].prizeAmount} USD`
        : "0 USD",
      third: prizeCohorts[2]?.prizeAmount
        ? `${prizeCohorts[2].prizeAmount} USD`
        : "0 USD",
    };
  };

  const formatTimelineForBackend = (data) => {
    return {
      registrationStart: data.endRegistration?.from || "",
      registrationEnd: data.endRegistration?.to || "",
      hackathonStart: data.submission?.from || "",
      hackathonEnd: data.submission?.to || "",
      judging: data.rewardAnnouncement?.dateTime || "",
      resultsAnnounced: data.awardCeremony?.dateTime || "",
    };
  };

  return (
    <CreateGlobalContext.Provider
      value={{
        createHackData,
        setCreateHackData,
        handleSubmit,
        isSubmitting,
        submitResult,
      }}
    >
      {children}
    </CreateGlobalContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(CreateGlobalContext);
  if (!context) {
    throw new Error("useMyContext must be used inside CreateHackthonContext");
  }
  return context;
};
