import { configureStore } from '@reduxjs/toolkit';
import modalUserForm from './slices/modalUserForm.slice';
import productsSlice from './slices/products.slice';

export default configureStore({
  reducer: {
    modalUserForm,
    productsSlice,
  },
});
