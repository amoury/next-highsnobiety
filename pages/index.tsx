import { GetStaticProps } from 'next'
import { retrieveHomePage, retrievePostsById } from '@utils/api'
import styled from 'styled-components';
import TeaserCard from '@components/TeaserCard';
import TeaserGrid from '../modules/TeaserGrid';

type TSectionBorder = {
  edge?: 'top' | 'bottom' | 'left' | 'right'
};

type TListingSectionDir = {
  dir?: 'row' | 'column'
};

export default function Home({ modules }): JSX.Element {
  // console.log(modules);
  
  const renderModules = (module) => {
    switch (true) {
      case module.includes('teasers_grid'):
        return <div>Teaser Grid</div>
        // return <TeaserGrid key={module} teasers={modules[module]} />
      case module.includes('product_carousel'):
        return <div key={module}>Product carousel</div>
      default:
        throw new Error("No such module");
        
    }
    return <div>{module}</div>

  }

  return (
    <div>
      <TeaserCard title="Hello" />
      { Object.keys(modules).map(module => renderModules(module))}
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await retrieveHomePage();
  const teaserPosts = await retrievePostsById(response.data.acf.teasers_grid_I);
  const teaserPostsData = teaserPosts.map(post => post.data);
  console.log(teaserPostsData);
  return {
    props: {
      modules: [
        { teaser_grid: teaserPostsData }
      ]
    }
  }
}