import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

type TProduct = {
  id: number;
  image: string;
  title: string;
  price: number;
  slug?: string;
}

type TProductCardProps = {
  product: TProduct;
}

const ProductCard = ({ product }: TProductCardProps): JSX.Element => {
  const { image, title, price, slug, id } = product;
  return (
    <Card>
      <Link href={`/shop/product/${id}/${slug}`}>
        <a>
          <ImageWrapper>
            <Image src={image} alt={product.title} layout="responsive" width={200} height={250} />
          </ImageWrapper>
          <Details>
            <Title>{title}</Title>
            <Price>{`$${price} USD`}</Price>
          </Details>
        </a>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  max-width: 100%;
  width: 100%;
`;

const ImageWrapper = styled.div`
`;

const Details = styled.div`
  margin: 10px 0;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold };
  font-size: 14px;
`;

const Price = styled.span`
  display: block;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #8c8c8c;
`;

export default ProductCard
