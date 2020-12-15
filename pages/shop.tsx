import { GetStaticProps } from 'next';
import ProductCarousel from "@components/ProductCarousel"
import api from "@utils/api";

const products = [
  {image: '/assets/img/products/1_t-shirt.jpg', title: 'Jacket', price: 100},
  {image: '/assets/img/products/2_t-shirt.jpg', title: 'Shirt', price: 200},
  {image: '/assets/img/products/1_t-shirt.jpg', title: 'Denim', price: 300},
  {image: '/assets/img/products/2_t-shirt.jpg', title: 'Jacket', price: 400},
  {image: '/assets/img/products/1_t-shirt.jpg', title: 'Jacket', price: 500},
  {image: '/assets/img/products/2_t-shirt.jpg', title: 'Jacket', price: 600},
  {image: '/assets/img/products/1_t-shirt.jpg', title: 'Jacket', price: 700},
  {image: '/assets/img/products/2_t-shirt.jpg', title: 'Jacket', price: 800},
]

type TProduct = {
  images: Array<{ src: string; id: number; name: string; }>,
  id: number;
  description?: string;
  name: string;
  on_sale?: boolean;
  permalink: string;
  price: string;
  regular_price?: string;
  stock_status: string;
}

type TProps = {
  productsData: Array<TProduct>
}

const Shop = ({ productsData }: TProps): JSX.Element => {
  const data = productsData.map(product => ({ ...product, image: product.images[0].src, title: product.name, price: Number(product.price)}));
  return (
    <div>
      <ProductCarousel products={data} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('products');
  return {
    props: {productsData: response.data}
  }
}

export default Shop
