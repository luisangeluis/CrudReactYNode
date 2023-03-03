import { createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
  axios
    .get(`${baseUrl}/products`)
    .then((res) => dispatch(setProducts(res.data.response)))
    .catch((error) => console.log(error));
};
