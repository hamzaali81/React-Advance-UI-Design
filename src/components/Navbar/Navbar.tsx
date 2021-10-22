import React from 'react';
import styled from 'styled-components';


const Navbar = () => {
    return (
    <Container>
        <Wrapper>
           <Left>
            <Logo>Resume</Logo>
             <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>Contact</MenuItem>
             </Menu>
            </Left>
            <Button>JOIN TODAY</Button>
        </Wrapper>
    </Container>
    )
};

export default Navbar;


const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
   border: 2px solid white;
   padding: 10px 15px;
   background-color: crimson;
   color: white;
   border-radius: 10px;
   cursor: pointer;
`;
