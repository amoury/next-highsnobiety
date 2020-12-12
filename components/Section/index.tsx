import React from 'react'
import styled from 'styled-components';

type TSectionBorder = {
  edge?: 'top' | 'bottom' | 'left' | 'right'
};

type TProps = TSectionBorder & {
  title?: string;
  children?: React.ReactNode;
}

const Section = ({ title, edge, children }: TProps): JSX.Element => {
  return (
    <SSection edge={edge}>
      {!!title && <Title>{title}</Title>}
      <Content>
        { children }
      </Content>
    </SSection>
  )
}

const SSection = styled.section<TSectionBorder>`
  ${({ edge, theme }) => !!edge && `border-${edge}: 1px solid ${theme.colors.darkgray}`};
  padding: 10px 0;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-size: 14px;
  letter-spacing: -.3px;
  margin: 0;

  &::before {
    content: "";
    height: 13px;
    width: 13px;
    background-color: ${({ theme }) => theme.colors.darkgray};
    margin-right: 8px;
    border-radius: 50%;
    display: inline-block;
    transform: translateY(1px);
  }
`;


export default Section
