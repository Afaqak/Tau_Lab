import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BookDemo from "./pages/bookDemo";
import Legal from "./pages/terms-of-use";
import Career from "./pages/career";
import Privacy from "./pages/privarcy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/terms-of-use" element={<Legal />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
