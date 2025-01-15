import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/posts";
import styled from "styled-components";
function App() {
  return (
    <>
      <Router>
        <HeaderContainer>
          <Link to="/">Home</Link>
          <Link to="/posts">dynamic</Link>
        </HeaderContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
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
