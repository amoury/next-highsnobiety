import styled from 'styled-components';
import Image from 'next/image';

type TProductCardProps = {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: TProductCardProps): JSX.Element => {
  return (
    <Card>
      <a href="#">
        <ImageWrapper>
          <Image src="/assets/img/products/jacket.jpg" alt="Jacket" layout="responsive" width={200} height={250} />
        </ImageWrapper>
        <Details>
          <Title>Adidas x Wales Bonner - Rock Blouson Brown</Title>
          <Price>$300.00 USD</Price>
        </Details>
      </a>
    </Card>
  )
}

const Card = styled.div`
  width: 400px;
`;

const ImageWrapper = styled.div``;

const Details = styled.div`
  margin: 10px 0;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 14px;
`;

const Price = styled.span`
  display: block;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export default ProductCard
