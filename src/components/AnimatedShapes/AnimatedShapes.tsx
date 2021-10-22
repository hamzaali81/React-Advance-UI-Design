import React from 'react';
import styled from 'styled-components';


const AnimatedShapes = () => {
    return (
      <div> 
        <Square />
        <Circle />
        <Rect />
      </div>
    )
}

export default AnimatedShapes;


const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square{
    to {transform: translate(100vw, 100vh)}

  }
`;


const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top:  200px;
  left: -100px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square{
    to {transform: translate(100vw, -100vh)}
    /* from {transform: translate(0, 0)} */

  }
`;
const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #c8edaa;
  position: absolute;
  top:  400px;
  left: -50px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square{
    to {transform: translate(100vw, -50vh)}
    /* from {transform: translate(0, 0)} */

  }
`;