import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../store/features/searchSlice";
import styled from "styled-components";
import { motion } from "framer-motion";


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
        <button onClick={() => dispatch(fetchSearchResult(searchInput))}>
          Search
        </button>
      </SearchDiv>
    </NavbarDiv>
  );
  
};

export default Navbar;

const NavbarDiv = styled(motion.div)`
  width: 80vw;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 24px;
  }
`;

const SearchDiv = styled(motion.div)`
  display: flex;
  input {
    padding: 16px 3rem;
    outline: none;
    border: none;
    text-decoration: none;
  }
  button {
    padding: 0 24px;
    outline: none;
    border: none;
    text-decoration: none;
  }
`;
