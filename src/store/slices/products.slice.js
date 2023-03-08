//Dependencies
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const handlerSubmitCreate = (data) => (dispatch) => {
  const { name, description, category, price, available } = data;
  console.log({ available });
  const newProduct = {
    name,
    description,
    categoryId: category,
    price,
    //TODO No dejar que el front meta el valor que desee en status
    status: available ? 'active' : 'suspended',
  };

  axios
    .post(`${baseUrl}/products`, newProduct)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      dispatch(getProducts());
    });
};

export const handlerSubmitUpdate = (productId, data) => (dispatch) => {
  console.log(data);

  const { name, description, category, price, available } = data;

  const editedProduct = {
    name,
    description,
    categoryId: category,
    price,
    //TODO No dejar que el front meta el valor que desee en status
    status: available ? 'active' : 'suspended',
  };

  axios
    .put(`${baseUrl}/products/${productId}`, editedProduct)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      dispatch(getProducts());
    });
};

export const handlerSubmitDelete = (productId) => (dispatch) => {
  axios
    .delete(`${baseUrl}/products/${productId}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => dispatch(getProducts()));
};
