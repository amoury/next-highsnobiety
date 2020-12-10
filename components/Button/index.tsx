import styled from 'styled-components';

type TProps = {
  title: string;
  disabled?: boolean;
}

const Button = ({ title, disabled = false, }: TProps): JSX.Element => {
  return (
    <Btn disabled={disabled}>
      {title}
    </Btn>
  )
}

const Btn = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 14px 20px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.7em;
  letter-spacing: 0.08em;
  width: 100%;
  border: none;

  &:hover {
    background-color: rgba(0,0,0,0.85);
  }

  &:disabled {
    background-color: #ccc;
  }
`;

export default Button
