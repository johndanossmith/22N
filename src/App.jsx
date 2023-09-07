import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="app bg-color-bg-black ">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route
            path="*"
            element={
              <h1 className="min-h-screen flex justify-center items-center">
                Page not found
              </h1>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
