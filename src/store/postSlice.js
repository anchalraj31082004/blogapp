import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/config"

const initialState = {
    posts:[],
    loader:true,
}

export const getPosts = createAsyncThunk("getPosts", async () => {
    const response = await appwriteService.getPosts()
    return response
})

const postSlice = createSlice({
    name:"post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loader = true
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.loader = false
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.loader = false
        })
    }

    // reducers:{
    //     // getPosts: (state, action) => {
    //     //     appwriteService.getPosts()
    //     //     .then((posts) => {
    //     //         if(posts) {
    //     //             state.posts = posts;
    //     //         }
    //     //     })
    //     // }
    // }
})

// export const {getPosts} = postSlice.actions;


export default postSlice.reducer;