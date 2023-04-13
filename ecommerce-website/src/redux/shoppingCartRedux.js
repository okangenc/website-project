import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            const existingProductIndex = state.products.findIndex(
                (item) => item._id === action.payload._id
            );
        
            if (existingProductIndex >= 0) {
                const updatedQuantity = state.products[existingProductIndex].quantity + action.payload.quantity;
                if (updatedQuantity > 9) {
                    const difference = 9 - state.products[existingProductIndex].quantity;
                    state.products[existingProductIndex].quantity = 9;
                    state.quantity += difference;
                    state.total += action.payload.price * difference;
                } else {
                    state.products[existingProductIndex].quantity += action.payload.quantity;
                    state.quantity += action.payload.quantity;
                    state.total += action.payload.price * action.payload.quantity;
                }
            } else {
                state.products.push(action.payload);
                state.quantity += action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
            const productToRemove = state.products.find(item => item._id === action.payload);
            state.total -= productToRemove.price * productToRemove.quantity;
            state.products = state.products.filter(item => item._id !== action.payload);
          },        
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if (product.quantity < 9) {
                product.quantity++;
                state.total += product.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if (product.quantity > 1) {
                product.quantity--;
                state.total -= product.price;
            }
        },
    },
});

export const { addProduct, clearCart, increaseQuantity, decreaseQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer


