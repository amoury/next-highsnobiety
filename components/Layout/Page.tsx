import { ReactNode } from 'react';
import Navigation from '@components/Navigation';
import styled from 'styled-components';

type TProps = {
  children: ReactNode;
}

const PageLayout = ({ children }: TProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      <PageWrapper>
        { children } 
      </PageWrapper>    
    </div>
  )
}

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default PageLayout;
