import Joi from 'joi';

const emailError = () => 'Email must be a valid email';
const passwordError = () => 'Password is required';

export const bodySchema = Joi.object({
  email: Joi.string().email().required().error(emailError),
  password: Joi.string().required().error(passwordError),
  first_name: Joi.string(),
  last_name: Joi.string(),
  facebook_id: Joi.string()
});
