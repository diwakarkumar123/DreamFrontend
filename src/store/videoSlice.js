import { createSlice } from "@reduxjs/toolkit";
import { stat } from "react-native-fs";

let initialState = {
    video_url: null,
    show_loader: false
}


const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        change_video_url(state, action){
            state.video_url = action.payload
        },
        change_loading(state, action){
            state.show_loader = action.payload
        }
    }

})

export const {change_video_url, change_loading} = videoSlice.actions;
export default videoSlice.reducer;