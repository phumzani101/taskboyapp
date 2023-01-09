import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import taskSlice from './slices/taskSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    task: taskSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
