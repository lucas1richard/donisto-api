import joi from 'joi';

export const bodySchema = joi.object({
  title: joi.string().required(),
  story: joi.string().required(),
  organizationUuid: joi.string().required(),
  causesUuid: joi.array().items(joi.string())
});
