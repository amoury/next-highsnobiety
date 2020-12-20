import React from 'react'
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchProductById } from '@utils/api';
import ProductDetail from '@components/ProductDetail';
import { PrevBtn } from 'icons';

const ProductDetailPage = ({ productData }) => {
  const router = useRouter();

  if (!productData) return <p>Loading...</p>
  return (
    <PageWrapper>
      <PageHeader>
        <BackBtn onClick={router.back}>
          <PrevBtn size={8} />
          <span>Back</span>
        </BackBtn>
      </PageHeader>
      <ProductDetail detail={productData} />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  padding: 25px 0;
`;

const PageHeader = styled.div`
  margin-bottom: 25px;
`;

const BackBtn = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  span {
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 14px;
    padding-bottom: 3px;
  }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  try {
    const details = await fetchProductById(Number(id));
    return {
      props: { productData: details.data }
    }
  } catch (error) {
    console.error(`Couldn't fetch product detail - ${error.message || error}`)
  }

  return { props: { productData: null }};
}

export default ProductDetailPage
