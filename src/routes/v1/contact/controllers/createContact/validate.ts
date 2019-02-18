import joi from 'joi';

const emailError = () => 'Email must be a valid email';
const passwordError = (errors: any) => {
  console.log(errors);
  return 'Password is required';
};

export const bodySchema = joi.object({
  email: joi.string().email().required().error(emailError),
  password: joi.string().required().error(passwordError),
  first_name: joi.string(),
  last_name: joi.string()
});
