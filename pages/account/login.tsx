import { useContext } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Section from '@components/Section'

import Button from '@components/Button';
import AuthForm from '@components/AuthForm';
import { AuthContext } from '@contexts/AuthContext';

const Login = (): JSX.Element => {
  const authContext = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post('/api/auth/loginCustomer', credentials);
      authContext.setAuthState(response.data);
    } catch (error) {
      console.error('error > ', error.message); 
    }
  }

  return (
    <Wrapper>
      <Section title="Log in to your account" edge="top">
        <p>Already have an account? Log in now.</p>

        <AuthForm buttonText="Log in" onSubmit={handleLogin} />
        
      </Section> 
      <Section title="Not a member yet?" edge="top">
        <p>Sign up to create your new account.</p>
        <ButtonWrapper>
          <Button title="Sign up" basic fullWidth={false} redirectTo="/account/signup" />
        </ButtonWrapper>
      </Section>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 35px;
`;

const ButtonWrapper = styled.div`
  margin: 40px 0;
`;


export default Login
