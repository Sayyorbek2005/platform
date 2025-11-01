import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/SideBar";
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
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Responsive margin-left hisoblash
  const getContentMargin = () => {
    if (isMobile) {
      return "0";
    }
    
    if (window.innerWidth >= 1200) {
      // Desktop
      return sidebarOpen ? "280px" : "80px";
    } else if (window.innerWidth >= 992) {
      // Notebook
      return sidebarOpen ? "250px" : "70px";
    } else if (window.innerWidth >= 768) {
      // Planshet
      return sidebarOpen ? "220px" : "65px";
    }
    
    return "0";
  };

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
        isMobile={isMobile}
      />

      <Header
        sidebarOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
        isMobile={isMobile}
      />

      <div
        className="page-content"
        style={{
          marginLeft: getContentMargin(),
          transition: 'margin-left 0.3s ease, padding 0.3s ease',
          padding: '20px',
          marginTop: '70px',
          minHeight: 'calc(100vh - 70px)',
          overflowY: 'auto'
        }}
      >
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/reklamalar" element={<Reklamalar />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/taklifvamurojatlar" element={<TaklifVaMurojatlar />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frilace" element={<Frilace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;