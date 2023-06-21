import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../store/features/searchSlice";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSerachInput] = useState("");

  return (
    <NavbarDiv>
      <h3>GameShow</h3>
      <SearchDiv>
        <input
          value={searchInput}
          onChange={(e) => setSerachInput(e.target.value)}
          placeholder="eg. Cyberpunk"
        />
        <Link to="/search">
          <button
            onClick={() => {
              dispatch(fetchSearchResult(searchInput));
            }}
          >
            Search
          </button>
        </Link>
      </SearchDiv>
    </NavbarDiv>
  );
};

export default Navbar;

const NavbarDiv = styled(motion.div)`
  width: 100vw;
  padding: 24px 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #25262e;
  h3 {
    font-size: 24px;
  }
`;

const SearchDiv = styled(motion.div)`
  display: flex;

  input {
    padding: 16px 3rem 16px 1rem;
    outline: none;
    border: none;
    text-decoration: none;
    background: #32333e;
    color: #dedfe3;
  }

  button {
    padding: 0 24px;
    outline: none;
    border: none;
    height: 100%;
    text-decoration: none;
    background: #101216;
    color: #898a94;
    cursor: pointer;
  }
`;
