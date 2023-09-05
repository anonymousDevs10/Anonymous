{
  /* Only the states for actions meant to be global are to be here, actions such as the state of a current page being switched, light mode or dark mode being toggled and similar actions thats not meant to return back to default when they rerender */
}

import { createSlice } from "@reduxjs/toolkit";

const initialModeValue = false;
const initialSwitchPageValue = 0;
const initialFollowValue = false;

export const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    mode: { value: initialModeValue },
    pageSwitch: { value: initialSwitchPageValue },
    followToggle: { value: initialFollowValue },
  },
  reducers: {
    setMode: (state) => {
      state.mode.value = !state.mode.value;
      {
        /*To keep track of the state of either dark mode or light mode toggle*/
      }
    },
    setPageSwitch: (state, action) => {
      state.pageSwitch.value = action.payload;
      {
        /*To keep track of the state of any current page*/
      }
    },
    setFollow: (state) => {
      state.followToggle.value = !state.followToggle.value;
      {
        /*To keep track of the state of either Follow or Unfollow*/
      }
    },
  },
});

export const { setMode, setPageSwitch, setFollow } = actionsSlice.actions;

export default actionsSlice.reducer;
