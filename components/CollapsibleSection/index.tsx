import { useState } from 'react';
import styled from 'styled-components';
import sanitizeHtml from '@utils/sanitizeHtml';

type TProps = {
  title: string;
  content?: string;
  html?: string;
}

const CollapsibleSection = ({ title, content, html }: TProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <TitleBar onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        { isOpen ? <Minus /> : <Plus /> }
      </TitleBar>
      { isOpen && !!content && 
        <Content>
          <p>{content}</p>  
        </Content>      
      }
      { isOpen && !!html && 
        <Content dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />
      }
    </Section>
  )
}

const Plus = () => <svg width="20" height="20" fill="none" viewBox="0 0 40 40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M37 20H3m17 17V3" vectorEffect="non-scaling-stroke"></path></svg>

const Minus = () => <svg width="20" height="20" fill="none" viewBox="0 0 40 40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M37 20H3" vectorEffect="non-scaling-stroke"></path></svg>

const Section = styled.section`
  border-top: 1px solid black;
  padding-bottom: 15px;
  padding-top: 15px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
    margin-right: 7px;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.9em;
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  line-height: 20px;
  padding-top: 10px;

  p {
    margin: 0;
  }
`;

export default CollapsibleSection
