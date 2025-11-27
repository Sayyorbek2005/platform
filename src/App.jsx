import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/SideBar";

// Pages
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Mentors from "./pages/mentors/Mentors";
import Chat from "./pages/chat/Chat";
import TaklifVaMurojatlar from "./pages/taklifVaMurojatlar/TaklifVaMurojatlar";
import JoinUs from "./pages/joinUs/JoinUs";
import Reklamalar from "./pages/reklamalar/Reklamalar";
import Frilace from "./pages/frilace/Frilace";
import NotFound from "./pages/notfound/NotFound";

// Styles
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // Mobile: closed, Desktop: open
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on route change for mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Toggle sidebar
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Common props to pass to pages
  const commonProps = {
    sidebarOpen,
    onToggle: handleSidebarToggle,
    isMobile,
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
        isMobile={isMobile}
      />

      {/* Header */}
      <Header {...commonProps} />

      {/* Page content */}
      <div className={`page-content ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home {...commonProps} />} />
          <Route path="/projects" element={<Projects {...commonProps} />} />
          <Route path="/mentors" element={<Mentors {...commonProps} />} />
          <Route path="/reklamalar" element={<Reklamalar {...commonProps} />} />
          <Route path="/chat" element={<Chat {...commonProps} />} />
          <Route path="/taklifvamurojatlar" element={<TaklifVaMurojatlar {...commonProps} />} />
          <Route path="/joinus" element={<JoinUs {...commonProps} />} />
          <Route path="/contact" element={<Contact {...commonProps} />} />
          <Route path="/frilace" element={<Frilace {...commonProps} />} />
          <Route path="*" element={<NotFound {...commonProps} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
