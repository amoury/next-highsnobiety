import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import ProductCard from '@components/ProductCard';

const PrevBtn = ({ size }) => <svg width={size} height={size} fill="none" viewBox="0 0 40 40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M28 3L10 20l18 17" vectorEffect="non-scaling-stroke"></path></svg>
const NextBtn = ({ size }) => <svg width={size} height={size} fill="none" viewBox="0 0 40 40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12 37l18-17L12 3" vectorEffect="non-scaling-stroke"></path></svg>

type TProps = {
  products: Array<{ image: string; title: string; price: number }>
}

const ProductCarousel = ({ products }: TProps): JSX.Element => {
  const [widthPerSlide, setWidthPerSlide] = useState(0);
  const [currentScrollStep, setCurrentScrollStep] = useState(0);
  const slideTrackRef = useRef(null);
  
  useEffect(() => {
    calculateSlideWidth(); 
    console.log('runnign .......')
  }, []);

  const calculateSlideWidth = () => {
    const slideTrackTotalWidth = slideTrackRef.current.scrollWidth;
    const childrenCount = slideTrackRef.current.childElementCount;
    setWidthPerSlide(slideTrackTotalWidth / childrenCount);
  }



  return (
    <Carousel style={{ width: '1200px'}}>
      <NavBtn onClick={() => currentScrollStep > 0 && setCurrentScrollStep(currentScrollStep - 1)}>
        <PrevBtn size={20} />
      </NavBtn>
      <SlideTrack >
        <Slides ref={slideTrackRef} shiftBy={-(widthPerSlide * currentScrollStep)}>
          {products.map((product, i) => (
            <Slide key={i}>
              <ProductCard image={product.image} title={product.title} price={product.price} />
            </Slide>
          ))}
        </Slides>
      </SlideTrack>
      <NavBtn onClick={() => currentScrollStep < (products.length - 3) && setCurrentScrollStep(currentScrollStep + 1)}>
        <NextBtn size={20}/>
      </NavBtn>
    </Carousel>
  )
}

const Carousel = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  align-items: center;
  height: 500px;

  margin-top: 100px;
`;

const SlideTrack = styled.div`
  overflow: hidden;
  position: relative;
  height:  100%;
`;

const Slides = styled.div<{ shiftBy: number }>`
  display: grid;
  grid-template-columns: repeat(8, calc(33.33%)); 
  position: absolute;
  width: 100%;
  left: ${({ shiftBy }) => `${shiftBy}px`};
  top: 0;
  transition: all 0.3s ease-in;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
`;

const NavBtn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;



export default ProductCarousel
