import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    change: (state) => {
      state.state = !state.state;
    }
  }
});

export const { change } = menuSlice.actions;
export default menuSlice.reducer;