import { GetStaticProps } from 'next';
import ProductCarousel from "@components/ProductCarousel"
import { fetchProducts } from "@utils/api";
import { TProduct } from '@customTypes/product';

type TProps = {
  productsData: Array<TProduct>
}

const Shop = ({ productsData }: TProps): JSX.Element => {
  // const { data, error } = useSWR('/products', fetchProducts);
  // if(!data) return <div />;

  console.log(productsData);

  const products = productsData.map(product => ({ ...product, image: product.images[0].src, title: product.name, price: Number(product.price)}));
  return (
    <div>
      <ProductCarousel products={products} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchProducts();
  return {
    props: {productsData: response.data}
  }
}

export default Shop
