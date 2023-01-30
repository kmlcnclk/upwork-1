import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice';
import abandonedReducer from './slices/abandonedSlice';
import chatReducer from './slices/chatSlice';
import userChatReducer from './slices/userChatSlice';

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    abandoned: abandonedReducer,
    chat: chatReducer,
    userChat: userChatReducer,
  },
});
