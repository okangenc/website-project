import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.span`
  font-size: 14px;
  margin: 50px;
  cursor: pointer;
`;

const CategoriesBar = () => {
  return (
    <Container>
      <Category>MENS CLOTHING</Category>
      <Category>WOMENS CLOTHING</Category>
      <Category>ACCESSORIES</Category>
      <Category>EQUIPMENT</Category>
    </Container>
  );
};

export default CategoriesBar;
