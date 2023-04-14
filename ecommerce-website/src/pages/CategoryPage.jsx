import React from 'react'
import styled from "styled-components"
// import header bars
import BannerBar from '../components/BannerBar'
import NavigationBar from '../components/NavigationBar'
import CategoriesBar from '../components/CategoriesBar'
// import other page components
import LandingProducts from '../components/LandingProducts'
import Footer from '../components/Footer'
// import useLocation hook
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
    // text-align: center;
`

// contains the sort and filter elements
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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
    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilter ({
            ...filter,
            [event.target.name]: value.toLowerCase(), // database items in array will need to be lowercase
        });
    };


  return (
    <Container>

        <BannerBar/>
        <NavigationBar/>
        <CategoriesBar/>

        <FilterContainer>
            <FilterOptions>
                <FilterHeader>
                    SORT
                </FilterHeader>

                <Select onChange={event => setSort(event.target.value)}>
                    <Option value="" disabled selected> SORT </Option>
                    <Option value="newest"> NEWEST </Option>
                    <Option value="ascending"> PRICE (ASCENDING) </Option>
                    <Option value="descending"> PRICE (DESCENDING) </Option>
                </Select>

            </FilterOptions>

            <Title>{category.toUpperCase()}</Title>

            <FilterOptions>
                <FilterHeader>
                    FILTER
                </FilterHeader>

                <Select name="size" onChange={handleFilter}>
                    <Option value="" disabled selected> SIZE </Option>
                    <Option> XS </Option>
                    <Option> S </Option>
                    <Option> M </Option>
                    <Option> L </Option>
                    <Option> XL </Option>
                </Select>

                <Select name="colour" onChange={handleFilter}>
                    <Option value="" disabled selected> COLOUR </Option>
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
                </Select>

            </FilterOptions>
        </FilterContainer>

        <LandingProducts category={category} filter={filter} sort={sort} />

        <Footer/>

    </Container>
  )
}

export default CategoryPage