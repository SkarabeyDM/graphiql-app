import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './slices/alertSlice';

const store = configureStore({
  reducer: {
    alertState: alertReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
