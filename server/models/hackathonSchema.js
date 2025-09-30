import Joi from "joi";

export const hackathonSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  longDescription: Joi.string().required(),
  techStack: Joi.string().required(),
  level: Joi.string().required(),
  location: Joi.string().required(),
  socialLinks: Joi.array().items(
    Joi.object({
      type: Joi.string().required(),
      url: Joi.string().uri().required(),
    })
  ),
  registrationDuration: Joi.string().required(),
  hackathonDuration: Joi.string().required(),
  votingDuration: Joi.string().required(),
  judgingMode: Joi.string().valid("judges", "public", "hybrid").required(),
});
