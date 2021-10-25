import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
 font-size: 70px;
 `;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;

  `;
const Desc = styled.span`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.span`
   width: 150px;
   border: none;
   padding: 15px 20px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   margin-top: 20px;
   cursor: pointer;
   
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                {/* <Image src={}/> */}
            </Left>
            <Right>
                <Title>
                  <b>good</b> design <br />
                  <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>
                  We help our clients succeed by creating brand identities, digital experiences, and the
                  print materials that communicate clearly, achievement marketing goals, and look fantastic.
                </Desc>
                <Button>Learn More</Button>
            </Right>
        </Container>
    )
}

export default Feature;
