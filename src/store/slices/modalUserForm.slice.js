import { createSlice } from '@reduxjs/toolkit';

const modalUserFormSlice = createSlice({
  name: 'modalUserForm',
  initialState: { isOpen: false, data: {} },
  reducers: {
    setModal: (state, action) => action.payload,
  },
});

export default modalUserFormSlice.reducer;
export const { setModal } = modalUserFormSlice.actions;
