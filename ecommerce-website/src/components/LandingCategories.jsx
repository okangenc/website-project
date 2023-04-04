import React from 'react'
import styled from "styled-components";
import CategoryItems from './CategoryItems';
import { categoriesContent } from "../data";

const Container = styled.div`
    display: flex; // horizontal
    padding: 10px;
    justify-content: space-between;
`

const LandingCategories = () => {
  return (
    <Container>
        {categoriesContent.map(item=>(
            <CategoryItems item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default LandingCategories