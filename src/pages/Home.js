import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #ccc;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome. This is a website built on React.</h1>
    </HomeContainer>
  );
}

export default Home;
