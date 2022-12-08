import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: #ccc;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome to the Home page!</h1>
    </HomeContainer>
  );
}

export default Home;
