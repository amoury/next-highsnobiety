import styled from 'styled-components';

const Button = (): JSX.Element => {
  return (
    <Btn>
      Shop Now
    </Btn>
  )
}

const Btn = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 12px 20px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.7em;
  letter-spacing: 0.08em;
  width: 100%;
  border: none;

  &:hover {
    background-color: rgba(0,0,0,0.85);
  }
`;

export default Button
