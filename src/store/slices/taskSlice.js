import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    list: [],
    updatedAt: null,
  },
  reducers: {
    loadTasks: (state, action) => {
      state.list = action.payload;
    },
    setUpdated: state => {
      state.updatedAt = Math.random();
    },
  },
});

// Action creators are generated for each case reducer function
export const {loadTasks, setUpdated} = taskSlice.actions;

export default taskSlice.reducer;
