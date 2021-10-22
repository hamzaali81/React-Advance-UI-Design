import React from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Feature from './components/Feature/Feature';


function App() {
  return (
    <>
  <Container>
     <Navbar />
     <Intro />
     <IntoShape />
    </Container>
   
    <Container>

    </Container>
    
    </>
  );
}

export default App;


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  /* background-color: red; */
`;

const IntoShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(100% 0%, 60% 0%, 40% 100%, 100% 100%);
background-color: crimson;
   
`;
