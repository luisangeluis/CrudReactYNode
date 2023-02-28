import { configureStore } from '@reduxjs/toolkit';
import modalsSlice from './slices/modals.slice';

export default configureStore({
  reducer: {
    modalsSlice,
  },
});
