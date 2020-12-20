import styled from 'styled-components';
import TeaserCard from '@components/TeaserCard';

const TeaserGrid = ({ teasers }) => {
  return (
    <STeaserGrid columns={2}>
      {teasers.map(teaser => (
        <TeaserCard key={teaser.ID} title={teaser.post_title} />
      ) )}
    </STeaserGrid>
  )
}

const STeaserGrid = styled.div<{columns: number}>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default TeaserGrid;
