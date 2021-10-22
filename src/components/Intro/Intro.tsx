import React from 'react';
import styled from 'styled-components';
import AnimatedShapes from '../AnimatedShapes/AnimatedShapes';
import Men from './../../img/Men.png';


const Intro = () => {
    return (
        <Container>
               <Left>
                <Title>Cloudnative Mern Stack Developer</Title>
                <Desc>
                    Hi, I am Hamza Ali with +1 year of experience in Mern Stack technologies. Jamstack development our new mission.
                    
                </Desc>
                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call us (+92) 313-3932783</Phone>
                         <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
                </Left>
            <Right>
                {/* <Image src={Men}/> */}
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro;


const Container = styled.div`
   height: calc(100vh- 50px);
   display: flex;
   padding: 20px;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Title = styled.h1`
   width: 60%;
   font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
 `;

const Info = styled.div`
   width: 60%;
   margin-top: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
 `;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
 `;

const ContactText = styled.span`
  color: gray;
 `;

const Right = styled.div`
    width: 40%;
`;


const Image = styled.img`
  width: 100%;
`