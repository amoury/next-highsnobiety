import { useForm } from "react-hook-form";
import Input from '@components/Input'
import Button from "@components/Button";
import { TRegisterCustomer } from "@customTypes/customer";

type TProps = {
  buttonText: string;
  onSubmit: (data: TRegisterCustomer) => void;
}

const AuthForm = ({ buttonText, onSubmit }: TProps): JSX.Element => {
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" name="email" label="Email" ref={register} />    
      <Input type="password" name="password" label="Password" ref={register} />    

      <Button title={buttonText} type="submit" fullWidth={false} />  
    </form>
  )
}

export default AuthForm
