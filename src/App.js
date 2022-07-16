import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Shop from "./screens/shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
