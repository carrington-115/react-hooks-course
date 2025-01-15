import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/posts";
import styled from "styled-components";
import React, { useState } from "react";

export const ThemeContext = React.createContext(false);

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark((prevTheme) => !prevTheme);
  return (
    <>
      <ThemeContext.Provider value={dark}>
        <Router>
          <HeaderContainer>
            <Link to="/">Home</Link>
            <Link to="/posts">dynamic</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </HeaderContainer>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

const HeaderContainer = styled.header`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
`;
