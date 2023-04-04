import React from 'react'
import styled from "styled-components"
// import header bars
import BannerBar from '../components/BannerBar'
import NavigationBar from '../components/NavigationBar'
import CategoriesBar from '../components/CategoriesBar'
// import other page components
import LandingProducts from '../components/LandingProducts'
import Footer from '../components/Footer'

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

// contains the sort and filter elements
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterOptions = styled.div`
    margin: 20px;
`

const FilterHeader = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Option = styled.option`
    
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const CategoryPage = () => {
  return (
    <Container>

        <BannerBar/>
        <NavigationBar/>
        <CategoriesBar/>

        <Title>
            MENS CLOTHING
        </Title>

        <FilterContainer>
            <FilterOptions>
                <FilterHeader>
                    SORT
                </FilterHeader>

                <Select>
                    <Option disabled selected> NEWEST </Option>
                    <Option> PRICE (ASCENDING) </Option>
                    <Option> PRICE (DESCENDING) </Option>
                </Select>

            </FilterOptions>
            <FilterOptions>
                <FilterHeader>
                    FILTER
                </FilterHeader>

                <Select>
                    <Option disabled selected> SIZE </Option>
                    <Option> XS </Option>
                    <Option> S </Option>
                    <Option> M </Option>
                    <Option> L </Option>
                    <Option> XL </Option>
                    <Option> XXL </Option>
                </Select>

                <Select>
                    <Option disabled selected> COLOUR </Option>
                    <Option> BLACK </Option>
                    <Option> WHITE </Option>
                    <Option> GRAY </Option>
                    <Option> RED </Option>
                    <Option> GREEN </Option>
                    <Option> BLUE </Option>
                    <Option> YELLOW </Option>
                    <Option> PINK </Option>
                    <Option> PURPLE </Option>
                    <Option> BROWN </Option>
                    <Option> MULTI COLOURED </Option>
                </Select>

            </FilterOptions>
        </FilterContainer>

        <LandingProducts/>

        <Footer/>

    </Container>
  )
}

export default CategoryPage