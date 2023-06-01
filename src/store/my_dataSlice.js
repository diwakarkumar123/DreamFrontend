import { createSlice } from "@reduxjs/toolkit";



let initialState = {
    my_profile_data: null,
    isLogin: false
}

const my_dataSlice = createSlice({
    name: 'my_data',
    initialState,
    reducers: {
        add_my_profile_data(state, action){
            state.my_profile_data = action.payload;
        },
        addIsLogin(state, action){
            state.isLogin = action.payload
        }
    }
})

export const {add_my_profile_data, addIsLogin} = my_dataSlice.actions;
export default my_dataSlice.reducer;