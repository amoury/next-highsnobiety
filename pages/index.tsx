import { GetStaticProps } from 'next'
import { fetchAllCustomers } from '@utils/api'
import styled from 'styled-components';
import ProductDetail from '@components/ProductDetail';

type TSectionBorder = {
  edge?: 'top' | 'bottom' | 'left' | 'right'
};

type TListingSectionDir = {
  dir?: 'row' | 'column'
};

export default function Home(): JSX.Element {
  return (
    <ProductDetail /> 
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

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetchAllCustomers();
//   console.log(response);
//   return {
//     props: {productsData: response.data}
//   }
// }