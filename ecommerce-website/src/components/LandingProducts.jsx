import styled from "styled-components";
import React, { forwardRef, useEffect, useState } from "react";
import NewProducts from "./NewProducts";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
`;

const LandingProducts = forwardRef(({ category, filter, sort }, ref) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3000/api/products?category=${category}`
            : "http://localhost:3000/api/products"
        );
        console.log("API response:", res);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) => item[key].includes(value))
        )
      );
  }, [category, products, filter]);

  console.log("Products:", products);
  console.log("Filtered Products:", filteredProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((x, y) => new Date(y.createdAt) - new Date(x.createdAt))
      );
    } else if (sort === "ascending") {
      setFilteredProducts((prev) => [...prev].sort((x, y) => x.price - y.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((x, y) => y.price - x.price));
    }
  }, [sort]);

  // Sort products by newest first
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <Container ref={ref}>
      {category
        ? filteredProducts.map((item) => <NewProducts item={item} key={item.id} />)
        : sortedProducts
            .slice(0, 12)
            .map((item) => <NewProducts item={item} key={item.id} />)
      }
    </Container>
  );
});

export default LandingProducts;