import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./features/detailSlice";
import gameReducer from "./features/gamesSlice";

const store = configureStore({
	reducer: { games: gameReducer, detail: detailSlice }
});

export default store;
