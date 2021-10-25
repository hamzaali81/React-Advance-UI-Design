import React from 'react';
import styled from 'styled-components';

const Service = () => {
    return (
        <Container>
            <Left>
                <Image />
            </Left>
            <Right>
                <Wrapper></Wrapper>
            </Right>
        </Container>
    )
}

export default Service;


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 100px;
`;

const Right = styled.div`
  width: 50%;
 `;

 const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   flex-direction: column;
  `;