import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./features/detailSlice";
import gameReducer from "./features/gamesSlice";
import searchReducer from "./features/searchSlice";

const store = configureStore({
  reducer: { games: gameReducer, detail: detailSlice, search: searchReducer },
});

export default store;
