import styled from 'styled-components'

import Section from '@components/Section'

import Button from '@components/Button';
import AuthForm from '@components/AuthForm';

const Login = (): JSX.Element => {
  return (
    <Wrapper>
      <Section title="Log in to your account" edge="top">
        <p>Already have an account? Log in now.</p>

        <AuthForm buttonText="Log in" />
        
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
