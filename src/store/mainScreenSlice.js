import { createSlice } from '@reduxjs/toolkit';

const mainScreenSlice = createSlice({
  name: 'search',
  initialState: {
    isShowComment: false,
    currentComment: '',
    showReply: false,
    comment_id: ''
  },
  reducers: {
    setIsShowComment: (state, action) => {
      state.isShowComment = action.payload;
    },
    setCurrentComment: (state, action) => {
      state.currentComment = action.payload;
    },
    setShowReply: (state, action) => {
      state.showReply = action.payload
    },
    setCommentId: (state, action) => {
      state.comment_id = action.payload
    }
  },
});

export default mainScreenSlice.reducer;

export const {
  setIsShowComment,
  setCurrentComment,
  setShowReply,
  setCommentId
} = mainScreenSlice.actions;
