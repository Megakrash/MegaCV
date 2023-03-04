import React, { lazy, Suspense, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";

const Home = lazy(() => import("@pages/Home"));
const NavBar = lazy(() => import("@components/navBar/NavBar"));
const Projets = lazy(() => import("@components/projets/Projets"));
const Formation = lazy(() => import("@components/formation/Formation"));
const Experience = lazy(() => import("@components/experience/Experience"));
const Contact = lazy(() => import("@components/contact/Contact"));
const ContactMe = lazy(() => import("@components/contactme/ContactMe"));

function App() {
  const [themeToggle, setThemeToggle] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const themeControlObject = useMemo(() => {
    return { themeToggle, setThemeToggle };
  }, [themeToggle]);

  const backgroundStyle = () => {
    if (themeToggle === true) {
      return `url(${
        import.meta.env.VITE_PORT_BACKEND
      }/assets/images/backdark.jpg)`;
    }
    return `url(${
      import.meta.env.VITE_PORT_BACKEND
    }/assets/images/backlight.jpg)`;
  };

  return (
    <div
      className={!themeToggle ? "App light-theme" : "App dark-theme"}
      style={{ backgroundImage: backgroundStyle() }}
    >
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner" />
            <p>Loading</p>
          </div>
        }
      >
        <ThemeContext.Provider value={themeControlObject}>
          <div className="App_navBar">
            <NavBar showForm={showForm} setShowForm={setShowForm} />
          </div>
          <div className="App_comp">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projets />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/parcours" element={<Experience />} />
              <Route
                path="/contact"
                element={<ContactMe setShowForm={setShowForm} />}
              />
            </Routes>
          </div>
          <div className="App_contact">
            <Contact showForm={showForm} setShowForm={setShowForm} />
          </div>
        </ThemeContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
