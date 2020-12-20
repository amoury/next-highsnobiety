import styled from 'styled-components';
import Image from 'next/image';
import useSWR from 'swr'
import Button from '@components/Button';
import _get from 'lodash/get';
import CollapsibleSection from '@components/CollapsibleSection';
import { TProduct } from '@customTypes/product';
import sanitizeHtml  from '@utils/sanitizeHtml';
import { fetchShippingDetailsByProduct } from '@utils/api';

type TProps = {
  detail: TProduct;
}

const ProductDetail = ({ detail }: TProps) => {
  if (!detail) return <div />
  
  const productDetails = _get(detail, 'acf.product_details', '');
  const shippingClassId = _get(detail, 'shipping_class_id');
  const isOOS = _get(detail, 'stock_status') === 'outofstock';
  let shippingDescription = '';

  if(shippingClassId > 0) {
    const { data } = useSWR(`/products/shipping_classes/${shippingClassId}`, () => fetchShippingDetailsByProduct(shippingClassId));  
    shippingDescription = _get(data, 'data.description');
  }

  return (
    <Container>
      <ImageGallery>
        { detail?.images.map(image => (
          <ImageWrapper key={image.id}>
            <Image src={image.src} width={379} height={473} layout='responsive' />  
          </ImageWrapper>
        ))}
      </ImageGallery>

      <Details>
        <Title>{detail.name}</Title>
        <Price>{`$${detail.price} USD`}</Price>
        
        {!!detail.description && 
          <Description dangerouslySetInnerHTML={{ __html: sanitizeHtml(detail.description)}}/>
        }

        <Inner>
          <SelectField>
            <select placeholder="Select Size">
              <option>Select Size</option>
              <option value='s'>S</option>
              <option value='m'>M</option>
              <option value='l'>L</option>
              <option value='xl'>XL</option>
            </select>
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M3 13l17 18 17-18" vectorEffect="non-scaling-stroke"></path></svg>
          </SelectField>

          <CTAContainer>
            <Button title={isOOS ? 'Out of stock' : 'Add to Bag'} disabled={isOOS} />
          </CTAContainer>
        </Inner>

        <AdditionalInfo>
          {!!detail.short_description && 
            <CollapsibleSection title="Editor's Notes" html={detail.short_description} />
          }
          <CollapsibleSection title="Size &amp; Fit" content="Order your regular ADIDAS size."/>
          {productDetails && <CollapsibleSection title="Product Details" html={productDetails} />}
          {!!shippingDescription && <CollapsibleSection title="Shipping" content={shippingDescription} />}
        </AdditionalInfo>
      </Details>
   
    </Container>
  )
}

const AdditionalInfo = styled.div`
  margin-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  grid-auto-rows: min-content;
`;

const ImageWrapper = styled.div``;

const Description = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    line-height: 20px;
  }
`;

const CTAContainer = styled.div`
  margin: 50px 0;
`;

const SelectField = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 35px;
  position: relative;

  select {
    appearance: none;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    font-size: 1.1em;

    &:focus {
      outline: none;
    }
  }
  
  svg {
    position: absolute;
    right: 10px;
    width: 15px;
    height: 15px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

`;

const Details = styled.div`
  border-top: 1px solid black;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 44px;
  line-height: 40px;
  letter-spacing: -.5px;
  margin-top: 10px;
`;

const Price = styled.span`
  display: block;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const Inner = styled.div`
  margin-top: 32px;
`

export default ProductDetail;