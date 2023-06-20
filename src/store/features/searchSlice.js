import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getSerachResult} from '../api'
const initialState = {
    data:[],
    isLoading: false
}

export const fetchSearchResult = createAsyncThunk(
    'search/fetchSerachResult',
    async (name)=>{
        const searchResult = await axios.get(getSerachResult(name))
        return searchResult.data.resutls
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        
    }
    extraReducers: builder=>{
    builder.addCase(fetchSearchResult.fulfilled, (state, action)=>{
        state.data = action.payload
    })
    }
})

export default searchSlice.reducers