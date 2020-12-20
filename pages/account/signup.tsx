import { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import AuthForm from "@components/AuthForm"
import Section from "@components/Section"
import { TRegisterCustomer } from '@customTypes/customer';
import { AuthContext } from '@contexts/AuthContext';

const Signup = (): JSX.Element => {
  const authContext = useContext(AuthContext);


  const handleRegister = async (userData: TRegisterCustomer) => {
    try {
      const response = await axios.post('/api/auth/registerCustomer', userData);
      authContext.setAuthState(response.data);
    } catch (error) {
      console.error('error > ', error.message); 
    }
  }
  return (
    <Wrapper>
      <Section title="Create your Account" edge="top">
        <AuthForm buttonText="Sign up" onSubmit={handleRegister} />
        <p>Already a member? <Link href='/account/login'><a>Log in</a></Link> </p>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 90vh;
`;

export default Signup
