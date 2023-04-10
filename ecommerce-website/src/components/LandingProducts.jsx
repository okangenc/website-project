// container for the "NewProducts" section of the landing page

import styled from "styled-components"
import React from 'react'
// import { newProductsData } from "../data" // imports the array data for the new products from data.js
import NewProducts from "./NewProducts"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;
`

const LandingProducts = ({category, filter, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( category ? `http://localhost:3000/api/products?category=${category}` :
        "http://localhost:3000/api/products");
        console.log('API response:', res); // Add this line
        setProducts(res.data);
      } catch(err) {
        console.error('Error fetching products:', err); // Add this line to log errors
      }
    }
    getProducts()
  }, [category]);
  

  // filtering objects and arrays in JS
  useEffect(() => {
    category && setFilteredProducts(
        products.filter(item => Object.entries(filter).every(([key, value]) => item[key].includes(value)))
    );
  }, [category, products, filter]);

  console.log('Products:', products);
  console.log('Filtered Products:', filteredProducts);

  // sorting the products in the category page
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts (prev => [...prev].sort( (x, y) => x.createdAt - y.createdAt ));
    } else if (sort === "ascending") {
      setFilteredProducts (prev => [...prev].sort( (x, y) => x.price - y.price ));
    } else {
      setFilteredProducts (prev => [...prev].sort( (x, y) => y.price - x.price ));
    };
  }, [sort]);

  // need to add a condition so the products still show up on the landing page
  // use .slice so that the landing page only displays 12 products at all times
  // (0, 12) means only 12 products are shown
  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <NewProducts item={item} key={item.id} />)
        : products
          .slice(0, 12)
          .map((item) => <NewProducts item={item} key={item.id} />)
      }
    </Container>
  );
  
};

export default LandingProducts