import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    video_url: null,
    show_loader: false,
    play_video: true,
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
        },
        set_play_video(state, action){
            state.play_video = !state.play_video
        }
    }

})

export const {
    change_video_url, 
    change_loading,
    set_play_video
} = videoSlice.actions;
export default videoSlice.reducer;