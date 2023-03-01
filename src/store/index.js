import { configureStore } from '@reduxjs/toolkit';
import modalUserForm from './slices/modalUserForm.slice';

export default configureStore({
  reducer: {
    modalUserForm,
  },
});
