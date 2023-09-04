import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BookDemo from "./pages/bookDemo";
import Legal from "./pages/legal";
import Career from "./pages/career";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
