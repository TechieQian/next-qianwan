import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import About from "../pages/index";
import Project from "../pages/project";
import Resume from "../pages/resume";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div id="app">
        <Header />
        <main className="content fade-in">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <title>Qian Wan</title>
                  <About />
                </>
              }
            />
            <Route path="/project" element={<Project />} />
            <Route
              path="/resume"
              element={
                <>
                  <title>Resume | Qian Wan</title>
                  <Resume />
                </>
              }
            />
            <Route
              path="*"
              element={
                <article>
                  <title>Page not found | Qian Wan</title>
                  <h1>Page not found</h1>
                  <p>The page you’re looking for doesn’t exist.</p>
                </article>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
