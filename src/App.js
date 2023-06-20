import { fetchGames } from "./store/features/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import Navbar from "./components/Navbar";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./components/Detail";

export default function App() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router(dispatch, details)}></RouterProvider>
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar variants={fadeIn} initial="hidden" animate="show"></Navbar>
      <Outlet />
    </>
  );
};

const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home />}>
          <Route path={"/game/:id"} element={<Detail />} />
        </Route>
      </Route>
    )
  );
};
