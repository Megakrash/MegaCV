import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const NavBar = lazy(() => import("@components/navBar/NavBar"));
const Projets = lazy(() => import("@components/projets/Projets"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner" />
            <p>Loading</p>
          </div>
        }
      >
        <div className="App_navBar">
          <NavBar />
        </div>
        <div className="App_comp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
