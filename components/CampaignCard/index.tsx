import styled from 'styled-components';
import Image from 'next/image';
import Button from '@components/Button';

type TProps = {
  title: string;
}

const CampaignCard = ({ title }: TProps): JSX.Element => {
  return (
    <Card>
      <ImageWrapper>
        <Image src='/assets/img/campaigns/1.jpg' alt="Man" layout='responsive' width='378' height='212' />
      </ImageWrapper>
      <Details>
        <Title>
          {title} 
        </Title>
        <Button />
      </Details>
    </Card>
  )
}

const Card = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 0.95em;
  text-transform: uppercase;
`;

export default CampaignCard
