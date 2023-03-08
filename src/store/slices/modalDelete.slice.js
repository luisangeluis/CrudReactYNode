import { createSlice } from '@reduxjs/toolkit';

const modalDeleteSlice = createSlice({
  name: 'modalDelete',
  initialState: { isOpen: false, data: {} },
  reducers: {
    setModalDelete: (state, action) => action.payload,
  },
});

export default modalDeleteSlice.reducer;
export const { setModalDelete } = modalDeleteSlice.actions;
