import joi from 'joi';

export const bodySchema = joi.object({
  name: joi.string().required(),
  organizationUuid: joi.string().required()
});
