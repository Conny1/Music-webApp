import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Auth } from "./pages";
import { Nav } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
