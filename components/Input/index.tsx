import { useState, forwardRef } from 'react'
import styled, { css } from 'styled-components';

type TProps = {
  type?: string;
  name: string;
  label: string;
};

const Input = ({ type = 'text', name, label }: TProps, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleLabelOnBlur = ({ target }) => {
    if(target.value) return;
    setIsFocused(false);
  }

  return (
    <InputField>
      <SInput ref={ref} type={type} name={name} onFocus={() => setIsFocused(true)} onBlur={handleLabelOnBlur}/>
      <Label htmlFor={name} isFocused={isFocused}>{label}</Label>
    </InputField>
  )
}

const InputField = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 0 0 #ccc;
    color: ${({ theme }) => theme.colors.darkgray};
    display: flex;
    margin: 20px 0;
    position: relative;
`;

const SInput = styled.input`
    letter-spacing: 0;
    border: 0;
    color: inherit;
    flex: 1;
    line-height: 24px;
    margin-bottom: 3px;
    margin-top: 5px;
    padding-left: 1px;
    border-radius: 0;

    &:focus {
      outline: none; 
    }
`;

const Label = styled.label<{isFocused: boolean;}>`
    color: #8c8c8c;
    cursor: text;
    left: 0;
    padding-left: 1px;
    position: absolute;
    transition: all .2s ease-out;

    ${({ isFocused }) => isFocused && css`
      top: -4px;
      transform: translateY(-12px);
      font-size: 12px;
    `}
`;

export default forwardRef(Input)
