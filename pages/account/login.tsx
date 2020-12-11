import styled from 'styled-components'
import { useForm } from "react-hook-form";
import Section from '@components/Section'
import Input from '@components/Input'
import Button from '@components/Button';

const Login = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <Wrapper>
      <Section title="Log in to your account" edge="top">
        <p>Already have an account? Log in now.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" name="email" label="Email" ref={register} />    
          <Input type="password" name="password" label="Password" ref={register} />    

          <Button title="Log in" type="submit" fullWidth={false} />  
        </form>
      </Section> 
      <Section title="Not a member yet?" edge="top" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 35px;
`;



export default Login
