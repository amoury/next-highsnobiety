import styled from 'styled-components';
import Link from 'next/link';
import AuthForm from "@components/AuthForm"
import Section from "@components/Section"

const Signup = (): JSX.Element => {
  return (
    <Wrapper>
      <Section title="Create your Account" edge="top">
        <AuthForm buttonText="Sign up" />
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
