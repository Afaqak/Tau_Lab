import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BookDemo from "./pages/bookDemo";
import Legal from "./pages/terms-and-services";
import Career from "./pages/career";
import Privacy from "./pages/privacy";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/terms-and-services" element={<Legal />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
