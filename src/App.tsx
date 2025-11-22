import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  return (
    <PageTransition>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
