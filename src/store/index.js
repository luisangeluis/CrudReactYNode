import { configureStore } from '@reduxjs/toolkit';
import modalUserForm from './slices/modalUserForm.slice';
import products from './slices/products.slice';
import modalDelete from './slices/modalDelete.slice';

export default configureStore({
  reducer: {
    modalUserForm,
    products,
    modalDelete,
  },
});
