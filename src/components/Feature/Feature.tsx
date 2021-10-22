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
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span``;
const SubTitle = styled.span``;
const Desc = styled.span``;
const Button = styled.span``;

const Feature = () => {
    return (
        <Container>
            <Left>
                {/* <Image src={}/> */}
            </Left>
            <Right>
                <Title>
                    good design <br />
                </Title>
                <SubTitle></SubTitle>
                <Desc></Desc>
                <Button></Button>
            </Right>
        </Container>
    )
}

export default Feature;
