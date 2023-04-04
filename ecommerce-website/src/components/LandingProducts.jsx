// container for the "NewProducts" section of the landing page

import styled from "styled-components"
import React from 'react'
import { newProductsData } from "../data" // imports the array data for the new products from data.js
import NewProducts from "./NewProducts"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
`

const LandingProducts = () => {
  return (
    <Container>
        {newProductsData.map(item=>(
            <NewProducts item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default LandingProducts