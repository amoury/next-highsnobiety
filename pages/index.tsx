import Head from 'next/head'
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      Hello
    </Container>
  )
}


const Container = styled.h1`
  border: 3px solid red;
  height: 90vh;
`