import {registerCustomer, generateToken} from '@utils/api';

export default async function handler(req, res): Promise<any> {
  try {
    const { password } = req.body;
    const resp = await registerCustomer(req.body);
    const { username } = resp.data;
    const tokenResponse = await generateToken({ username, password });
    res.send({ token: tokenResponse.data.data.token, userInfo: resp.data });    
  } catch (error) {
    console.error('error from server > ', error.message)
    throw new Error(error.message || 'Something went wrong');  
  }
}