import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled(Link)`
  font-size: 14px;
  margin: 50px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CategoriesBar = () => {
  return (
    <Container>
      <Category to="/category/mens">MENS CLOTHING</Category>
      <Category to="/category/womens">WOMENS CLOTHING</Category>
      <Category to="/category/accessories">ACCESSORIES</Category>
      <Category to="/category/equipment">EQUIPMENT</Category>
    </Container>
  );
};

export default CategoriesBar;


