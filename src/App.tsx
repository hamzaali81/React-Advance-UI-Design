import React from 'react'
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Feature from './components/Feature/Feature';
import Service from './components/Service/Service';


function App() {
  return (
    <>
  <Container>
     <Navbar />
     <Intro />
     <IntoShape />
    </Container>
   
    <Container>
        <Feature />
        <FeatureShape />
    </Container>
    <Container>
        <Service />
    </Container>
    
    </>
  );
}

export default App;


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* background-color: red; */
`;

// const Shape = css`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
// `;

/* ${Shape} */
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


/* ${Shape} */
const FeatureShape = styled.div`
   clip-path: polygon(0 0, 55% 0%, 100% 100%, 0% 100%);
   background-color: pink;
`
/* ${Shape} */
const ServiceShape = styled.div`
   clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
   background-color: #f88497;

`