import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import useSelector hook from react-redux
import { useSelector, useDispatch } from "react-redux" // import useDispatch
import { logout } from '../redux/userRedux'; // import the logout action
import { Link } from 'react-router-dom';
import { clearCart } from '../redux/shoppingCartRedux';

import { publicRequest } from '../requestMethods';

const changeColours = keyframes`
// changes the colour of the bolt to match the colour change of the banner bar
// these colours represent the Pazar brand theme
  0% { color: #a8e7f5; }
  33% { color: #b3a8f5; }
  66% { color: #94f28b; }
  100% { color: #a8e7f5; }
`;

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const Logo = styled.span`
  font-size: 32px;
  cursor: pointer;
  font-weight: bold;
  padding: 6px 16px;
  display: flex;
  align-items: center;
`;

const AnimatedBoltIcon = styled(BoltIcon)`
  transform: scaleX(2.6) scaleY(2.2); // scales the icon's width and height
  animation: ${changeColours} 15s linear infinite;
  // increases the space between the bolt icon and the logo letters
  margin-left: 10px;
  margin-right: 10px;
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1; // Change this line from 2000 to 1
`;

const SearchBar = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: white;
`;

const SearchInput = styled.input`
  border: none;
  width: 300px;
  font-size: 18px;
`;

const RightSide = styled.div`
  flex: 1; 
  align-items: center;
  justify-content: flex-end;
  display: flex;
  padding: 6px 16px;
`;

const NavBarItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 40px;
`;

const SuggestionList = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid lightgray;
  width: 100%;
  overflow-y: auto;
  z-index: 1000;
`;


const SuggestionItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;


// axion hook for the shopping cart icon
const NavigationBar = () => {
  const quantity = useSelector(state => state.cart.products.reduce((total, product) => total + product.quantity, 0));

  const [products, setProducts] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
  
    if (products.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSuggestionClick = (productId) => {
    // Navigate to the product page, e.g. /product/1
    // Replace with your own routing logic if necessary
    window.location.href = `/product/${productId}`;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await publicRequest.get('products');
      setProducts(response.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart()); // clears cart
  };
  
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>
              P A <AnimatedBoltIcon /> A R
            </Logo>
          </Link>
        </LeftSide>

        <Middle>
          <SearchContainer>
            <SearchBar>
              <SearchIcon style={{ color: 'black', fontSize: 20 }} />
              <SearchInput
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder=""
              />
            </SearchBar>
            {searchInput && (
              <SuggestionList>
                {filteredProducts.map((product) => (
                  <SuggestionItem
                    key={product._id}
                  >
                    <Link
                      to={`/product/${product._id}`}
                      onClick={() => handleSuggestionClick(product._id)}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {product.name}
                    </Link>
                  </SuggestionItem>
                ))}
              </SuggestionList>
            )}
          </SearchContainer>
        </Middle>


        <RightSide>
          {!currentUser && (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <NavBarItems>LOGIN</NavBarItems>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <NavBarItems>REGISTER</NavBarItems>
              </Link>
            </>
          )}
          {currentUser && (
            <>
              <NavBarItems onClick={handleLogout}>LOGOUT</NavBarItems>
              <Link to="/profile" style={{ marginLeft: '40px', textDecoration: 'none' }}>
                <PersonOutlineOutlinedIcon style={{ fontSize: 24 }} />
              </Link>
            </>
          )}
          <Link to="/shoppingcart" style={{ marginLeft: '40px', textDecoration: 'none' }}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </RightSide>

      </Wrapper>
    </Container>
  );
};

export default NavigationBar;
