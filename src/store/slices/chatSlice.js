import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    contacts: [],
    chatUsers: [],
    chats: [],
    loginuser: {},
  },
  reducers: {
    setChat(state, action) {
      state.chats = action.payload;
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addChats(state, action) {
      state.chats.push(action.payload);
    },
    setLoginUser(state, action) {
      state.loginuser = action.payload;
    },
    setChatUsers(state, action) {
      state.chatUsers = action.payload;
    },
    addChatUsers(state, action) {
      state.chatUsers.push(action.payload);
    },
    updateChatUsers(state, action) {
      return {
        ...state,
        chatUsers: [
          ...state.chatUsers.slice(0, action.payload.updateid),
          {
            id: action.payload.id,
            name: action.payload.name,
            text: action.payload.text,
          },
          ...state.chatUsers.slice(action.payload.updateid + 1),
        ],
      };
    },
  },
});

export const {
  setChat,
  setContacts,
  addChats,
  setLoginUser,
  setChatUsers,
  addChatUsers,
  updateChatUsers,
} = chatSlice.actions;
export default chatSlice.reducer;

export function fetchChat() {
  return async function fetchChatThunk(dispatch, getState) {
    try {
      const res = await fetch('Api url should come to here');
      const data = await res.json();
      dispatch(setChat(data.chats));
      dispatch(setContacts(data.users));
      dispatch(setChatUsers(data.chatUsers));
      dispatch(setLoginUser(data.loginUser));
    } catch (err) {
      console.log(err);
    }
  };
}
