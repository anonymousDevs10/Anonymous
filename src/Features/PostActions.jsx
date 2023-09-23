import { createSlice } from "@reduxjs/toolkit";

const initialLikeValue = 124;
const initialDislikeValue = 64;

export const postActionsSlice = createSlice({
  name: "postActions",
  initialState: {
    like: { value: initialLikeValue },
    disLike: { value: initialDislikeValue },
  },
  reducers: {
    likeIncrement: (state, action) => {
      if (!state.like.liked) {
        state.like.value = action.payload;
        state.like.liked = true;
        state.disLike.value = initialDislikeValue;
        state.disLike.disLiked = false;
      } else {
        state.like.value = initialLikeValue;
        state.like.liked = false;
      }
    },
    disLikeIncrement: (state, action) => {
      if (!state.disLike.disLiked) {
        state.disLike.value = action.payload;
        state.disLike.disLiked = true;
        state.like.value = initialLikeValue;
        state.like.liked = false;
      } else {
        state.disLike.value = initialDislikeValue;
        state.disLike.disLiked = false;
      }
    },
  },
});

export const { likeIncrement, disLikeIncrement } = postActionsSlice.actions;

export default postActionsSlice.reducer;
