import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Auth } from "./pages";
import { Nav, Sidebar } from "./components";
import styled from "styled-components";

const ContainerHome = styled.div`
  display: flex;
  width: 75%;
`;

function App() {
  return (
    <ContainerHome>
      <BrowserRouter>
        <Nav />
        <Sidebar />

        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContainerHome>
  );
}

export default App;
