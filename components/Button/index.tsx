import { useRouter } from 'next/router';
import styled from 'styled-components';

type TProps = {
  title: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  basic?: boolean;
  onClick?: () => void;
  // onClick?(event: MouseEvent<HTMLButtonElement>): void;
  redirectTo?: string;
}

const Button = ({ title, disabled = false, type, fullWidth = true, basic = false , redirectTo, onClick }: TProps): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo);
      return;
    }

    if (typeof onClick === 'function') {
      onClick();
    }
  }

  return (
    <Btn disabled={disabled} type={type} fullWidth={fullWidth} basic={basic} onClick={handleClick}>
      {title}
    </Btn>
  )
}

const Btn = styled.button<{fullWidth: boolean; basic: boolean;}>`
  background-color: ${({ basic }) => basic ? 'white' : 'black'};
  color: ${({ basic }) => basic ? 'black' : 'white'};
  cursor: pointer;
  padding: 14px 40px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.7em;
  letter-spacing: 0.08em;
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
  border: none;
  ${({ basic }) => basic && 'border: 1px solid black'};

  &:hover {
    background-color: rgba(0,0,0,0.85);
    ${({ basic }) => basic && 'color: white'};
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export default Button
