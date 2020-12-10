import styled from 'styled-components';
import Image from 'next/image';
import Button from '@components/Button';
import CollapsibleSection from '@components/CollapsibleSection';

const ProductDetail = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/assets/img/products/1_t-shirt.jpg" width={379} height={473} layout='responsive' />  
      </ImageWrapper>

      <ImageWrapper>
        <Image src="/assets/img/products/2_t-shirt.jpg" width={379} height={473} layout='responsive' />  
      </ImageWrapper>

      <Details>
        <Title>ADIDAS X WALES BONNER - TEE LIGHT BLUE</Title>
        <Price>$100 USD</Price>

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
            <Button title='Add to Bag' disabled />
          </CTAContainer>
        </Inner>

        <AdditionalInfo>
          <CollapsibleSection title="Editor's Notes" content="adidas Originals and Wales Bonner have come together to present their first collaborative collection, having first been previewed on the runway during London Fashion Week in January 2020. Inspired by the designer’s own Jamaican heritage, the collection features a short sleeve tee."/>
          <CollapsibleSection title="Size &amp; Fit" content="Order your regular ADIDAS size."/>
          <CollapsibleSection title="Product Detials" content="Light blue. Cotton-blend. Round neck. Embroidered logo at the chest. Short sleeves. Side stripe detailing. Straight hem. 70% cotton, 30% polyester."/>
          <CollapsibleSection title="Shipping" html={`<ul style="list-style:none; padding: 0; font-family: 'Univers-regular'; font-size: 14px"><li>Standard<br>Delivery in 2-5 working days. Delivery times may vary for pre-order items</li><li class="shippingMethod___3bRfY" style="padding-top: 20px;">Free shipping over 280 USD<br>We ship to your door; any additional import charges such as duties will be taken care of by us.</li></ul>`} />
        </AdditionalInfo>
      </Details>
   
    </Container>
  )
}

const AdditionalInfo = styled.div`
  margin-top: 40px;
`;

const ImageWrapper = styled.div``;


const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
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