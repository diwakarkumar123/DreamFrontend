import { createSlice } from "@reduxjs/toolkit";




let initialState = {
    my_profile_data: null,
    isLogin: false
}

const my_dataSlice = createSlice({
    name: 'my_data',
    initialState,
    reducers: {
        add_my_profile_data(state, action) {
            state.my_profile_data = action.payload;
        },
        addIsLogin(state, action) {
            state.isLogin = action.payload
        },
        update_wallet_diamond(state, action) {
            state.my_profile_data.wallet = action.payload;
        },
        update_nickname(state, action) {
            state.my_profile_data.nickname = action.payload;
        },
        update_gender(state, action) {
            state.my_profile_data.gender = action.payload;
        },
        update_bio(state, action) {
            state.my_profile_data.bio = action.payload;
        },
        update_website(state, action) {
            state.my_profile_data.website = action.payload;
        },
        update_dob(state, action) {
            state.my_profile_data.dob = action.payload;
        },
        update_profile_pic(state, action) {
            state.my_profile_data.profile_pic = action.payload;
        },
        update_lat(state, action) {
            state.my_profile_data.lat = action.payload;
        },
        update_lang(state, action) {
            state.my_profile_data.lang = action.payload;
        },
        update_online(state, action) {
            state.my_profile_data.online = action.payload;
        },
        update_verified(state, action) {
            state.my_profile_data.verified = action.payload;
        },
        update_city(state, action) {
            state.my_profile_data.city = action.payload;
        },
        update_country(state, action) {
            state.my_profile_data.country = action.payload;
        },
        update_fb_id(state, action) {
            state.my_profile_data.fb_id = action.payload;
        },
        update_emotion_state(state, action) {
            state.my_profile_data.emotion_state = action.payload;
        },
        update_making_friend_intention(state, action) {
            state.my_profile_data.making_friend_intention = action.payload;
        },
        update_hobbies(state, action) {
            state.my_profile_data.hobbies = action.payload;
        },
        update_person_height(state, action) {
            state.my_profile_data.person_height = action.payload;
        },
        update_person_weight(state, action) {
            state.my_profile_data.person_weight = action.payload;
        },
        update_instagram(state, action) {
            state.my_profile_data.instagram = action.payload;
        },
        update_you_tube(state, action) {
            state.my_profile_data.instagram = action.payload;
        },
        update_facebook(state, action) {
            state.my_profile_data.instagram = action.payload;
        },
        update_occupation(state, action) {
            state.my_profile_data.instagram = action.payload;
        },
        update_profile_video(state, action) {
            state.my_profile_data.instagram = action.payload;
        },
        update_twitter(state, action) {
            state.my_profile_data.instagram = action.payload;
        },

    }
})

export const {
    add_my_profile_data,
    addIsLogin,
    update_wallet_diamond,
    update_nickname,
    update_gender,
    update_bio,
    update_website,
    update_dob,
    update_profile_pic,
    update_lat,
    update_lang,
    update_online,
    update_verified,
    update_city,
    update_country,
    update_fb_id,
    update_emotion_state,
    update_making_friend_intention,
    update_hobbies,
    update_person_height,
    update_person_weight,
    update_instagram,
    update_you_tube,
    update_facebook,
    update_occupation,
    update_profile_video,
    update_twitter
    
} = my_dataSlice.actions;
export default my_dataSlice.reducer;