import TeaserCard from '@components/TeaserCard';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import ProductCard from '@components/ProductCard';
import Button from '@components/Button';
import CampaignCard from '@components/CampaignCard';

type TSectionBorder = {
  edge?: 'top' | 'bottom' | 'left' | 'right'
};

type TListingSectionDir = {
  dir?: 'row' | 'column'
};

export default function Home(): JSX.Element {
  return (
    <div style={{ marginBottom: '100px' }}>
      <Navigation />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ListingSection dir="column">
          <TeaserCard style='horizontal' title="Hungry: The High Priestess of Distorted Drag" />
          <TeaserCard style='horizontal' title="MEET THE ARTISTS IN SOCIAL CLUB SELTZER’S CREATE THE CLUB CAMPAIGN adfasd asd fasdf asdf asdf asdf"/>
        </ListingSection>
      </div>

      <div>
        <ProductCard />

        <Button />
        <div style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1200px', gridColumnGap: '25px' }}>
          <CampaignCard title='COLETTE MON AMOUR BY HIGHSNOBIETY - TOKYO EDITION' />
          <CampaignCard title='ADIDAS SPEZIAL' />
          <CampaignCard title='HIGHSNOBIETY JAZZ TV: A NEWPORT JAZZ PROGRAM' />

        </div>
      </div>
    </div>
  )
}

const Section = styled.section<TSectionBorder>`
  ${({ edge, theme }) => !!edge && `border-${edge}: 1px solid ${theme.colors.darkgray}`};
  padding: 10px 0;
`;

const ListingSection = styled(Section)<TListingSectionDir>`
  display: flex;
  flex-direction: ${({ dir = 'row' }) => dir};
  justify-content: ${({ dir = 'row' }) => dir === 'row' && 'space-between'};
`;