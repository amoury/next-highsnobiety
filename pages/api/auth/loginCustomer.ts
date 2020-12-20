import { retrieveCustomerByEmail, generateToken } from '@utils/api'

export default async function loginHandler(req, res): Promise<any> {
  try {
    const { email, password } = req.body;
    const customer = await retrieveCustomerByEmail(email);
    if (!customer.data.length) {
      // Check how to properly handle errors in Express
      res.send({ message: 'Invalid credentails'})
      return;
    }
    const { username } = customer.data[0];
    const validationResponse = await generateToken({ username, password });
    res.send({ token: validationResponse.data.data.token, userInfo: customer.data[0] })
  } catch (error) {
    console.error(error.message);
  }
}


// Wrong Password Response to be handled - sample response

/**
 * {
  success: false,
  statusCode: 403,
  code: 'incorrect_password',
  message: 'Error: The password you entered for the username test is incorrect. Lost your password?',
  data: []
}
 */