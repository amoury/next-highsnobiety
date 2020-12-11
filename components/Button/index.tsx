import styled from 'styled-components';

type TProps = {
  title: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const Button = ({ title, disabled = false, type, fullWidth = true }: TProps): JSX.Element => {
  return (
    <Btn disabled={disabled} type={type} fullWidth={fullWidth}>
      {title}
    </Btn>
  )
}

const Btn = styled.button<{fullWidth: boolean}>`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 14px 40px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.7em;
  letter-spacing: 0.08em;
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
  border: none;

  &:hover {
    background-color: rgba(0,0,0,0.85);
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export default Button
