import Image from 'next/image';
import styled, { css } from 'styled-components'

type TCardStyle = {
  style?: 'vertical' | 'horizontal';
}

type TProps = TCardStyle & {
  title: string;
}

const TeaserCard = ({ title, style = 'vertical' }: TProps): JSX.Element => {
  return (
    <Card style={style}>
      <ImageContainer>
        <Image src="/assets/img/articles/hungry-interview-julien-tell-feat.jpg" width="583px" height="340px" />
      </ImageContainer> 
      <Meta>
        <a href="#">
          <Title>{title}</Title>
        </a>
        
        <p>
          (Design, Sponsored) Nov 17, 2020
        </p>
      </Meta> 
    </Card>
  )
}


const Card = styled.article<TCardStyle>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkgray};
  padding: 10px 0;
  display: flex;
  flex-direction: ${({ style }) => style === 'vertical' ? 'column' : 'row'};
  flex: 1 1;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }

  ${({ style }) => style === 'horizontal' && css`
    ${ImageContainer} {
      max-width: 300px;
      margin-right: 20px;
    }

    ${Meta} {
      height: unset;
    }

    ${Title} {
      margin-top: 0;
    }
  `}
`;

const ImageContainer = styled.div``;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  height: 100%;

  p {
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 0.7em;
    margin: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkgray};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export default TeaserCard;
