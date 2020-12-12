import ProductCarousel from "@components/ProductCarousel"

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

const Shop = (): JSX.Element => {
  return (
    <div>
      <ProductCarousel products={products} />
    </div>
  )
}

export default Shop
