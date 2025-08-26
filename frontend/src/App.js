import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import { mockProjects, mockServices } from "./data/mock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <main>
        <ProjectGrid projects={mockProjects} services={mockServices} />
      </main>
      <Footer />
    </div>
  );
};

export default App;