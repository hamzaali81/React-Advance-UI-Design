import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <Container>
      <Left>
        <Image />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to start</Title>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, omnis
            quae pariatur accusamus aspernatur alias voluptatem. Enim, ea,
            nesciunt, odit distinctio esse vero explicabo quo dolore ipsa qui
            vel tenetur?
          </p>
        </Wrapper>
      </Right>
    </Container>
  );
};

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

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;