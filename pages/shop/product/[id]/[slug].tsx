import React from 'react'
import { GetServerSideProps } from 'next';
import { fetchProductById } from '@utils/api';
import ProductDetail from '@components/ProductDetail';

const ProductDetailPage = ({ productData }) => {
  if (!productData) return <p>Loading...</p>
  return (
    <ProductDetail detail={productData} />
  )
}

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
