import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
