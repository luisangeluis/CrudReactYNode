import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: null,
  reducers: {
    setModal: (state, action) => action.payload,
  },
});

export default modalsSlice.reducer;
export const { setModal } = modalsSlice.actions;
