import { createSlice } from '@reduxjs/toolkit';

const userChatSlice = createSlice({
  name: 'userChat',
  initialState: {
    userChat: [],
  },
  reducers: {
    setUserChat(state, action) {
      state.userChat = action.payload;
    },
    addChat(state, action) {
      state.userChat.push(action.payload);
    },
  },
});

export const { setUserChat, addChat } = userChatSlice.actions;
export default userChatSlice.reducer;
