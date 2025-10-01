import Joi from "joi";

export const hackathonSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  longDescription: Joi.string().required(),
  status: Joi.string().required(),
  statusColor: Joi.string().required(),
  registrationLabel: Joi.string().required(),
  registrationValue: Joi.string().required(),
  techStack: Joi.string().required(),
  level: Joi.string().required(),
  totalPrize: Joi.string().required(),
  participants: Joi.string().required(),
  image: Joi.string().allow("").optional(),
  type: Joi.string().valid("upcoming", "live", "past").required(),
  organizer: Joi.string().required(),
  startDate: Joi.string().allow("").required(),
  endDate: Joi.string().allow("").required(),
  location: Joi.string().required(),
  requirements: Joi.array().items(Joi.string()).optional(),
  prizes: Joi.object({
    first: Joi.string().required(),
    second: Joi.string().required(),
    third: Joi.string().required(),
  }).required(),
  sponsors: Joi.array().items(Joi.string()).optional(),
  timeline: Joi.object({
    registrationStart: Joi.string().required(),
    registrationEnd: Joi.string().required(),
    hackathonStart: Joi.string().required(),
    hackathonEnd: Joi.string().required(),
    judging: Joi.string().required(),
    resultsAnnounced: Joi.string().required(),
  }).required(),
  socialLinks: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required(),
        url: Joi.string().required(),
      })
    )
    .optional(),
  judgingMode: Joi.string().valid("judges", "public", "hybrid").optional(),
  schedule: Joi.object({
    endRegistration: Joi.object({
      from: Joi.string().allow(""),
      to: Joi.string().allow(""),
    }).optional(),
    openingCeremony: Joi.object({
      dateTime: Joi.string().allow(""),
      status: Joi.string().allow(""),
    }).optional(),
    submission: Joi.object({
      from: Joi.string().allow(""),
      to: Joi.string().allow(""),
      status: Joi.string().allow(""),
    }).optional(),
    rewardAnnouncement: Joi.object({
      dateTime: Joi.string().allow(""),
    }).optional(),
    awardCeremony: Joi.object({
      dateTime: Joi.string().allow(""),
    }).optional(),
    speakers: Joi.array()
      .items(
        Joi.object({
          id: Joi.number(),
          name: Joi.string(),
          link: Joi.string().allow(""),
          realName: Joi.string().allow(""),
          workPlace: Joi.string().allow(""),
          picture: Joi.string().allow(null),
        })
      )
      .optional(),
  }).optional(),
});
