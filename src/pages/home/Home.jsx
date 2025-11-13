import React, { useState } from "react";
import "./Home.styles.js";
import { HomeSection, Wrapper } from "./Home.styles.js";
import logo from "./assets/logo.png";
import html from "./assets/html.png";
import cssImg from "./assets/Css.png";
import jsScript from "./assets/javaScripts.png";
import react from "./assets/React.png";
import tupeScript from "./assets/typyScripts.png";
import boostrap from "./assets/bostrap.png";
import sas from "./assets/sass.png";
import pyhon from "./assets/pyhon.png";
import c from "./assets/c++.png";
import reduxToolkit from "./assets/redux tuld kid.png";
import vueJs from "./assets/vue js.png";
import lock from "./assets/icons8-lock-50.png";

const technologu = [
  { name: "Html", img: html, title: "HTML video darsliklari" },
  { name: "Css", img: cssImg, title: "CSS video darsliklari" },
  { name: "Bootstrap", img: boostrap, title: "Bootstrap video darsliklari" },
  { name: "Sass", img: sas, title: "Sass video darsliklari" },
  { name: "JavaScript", img: jsScript, title: "JavaScript video darsliklari" },
  { name: "React", img: react, title: "React video darsliklari" },
  {
    name: "redux toolkit",
    img: reduxToolkit,
    title: "Redux Toolkit video darsliklari",
  },
  {
    name: "TypeScript",
    img: tupeScript,
    title: "TypeScript video darsliklari",
  },
  { name: "Vue js", img: vueJs, title: "Vue.js video darsliklari" },
  { name: "C++", img: c, title: "C++ video darsliklari" },
  { name: "Python", img: pyhon, title: "Python video darsliklari" },
];

// Har bir texnologiyaga tegishli 3 ta video box
const videosByTech = {
  Html: ["HTML Video 1", "HTML Video 2", "HTML Video 3"],
  Css: ["CSS Video 1", "CSS Video 2", "CSS Video 3"],
  Bootstrap: ["Bootstrap Video 1", "Bootstrap Video 2", "Bootstrap Video 3"],
  Sass: ["Sass Video 1", "Sass Video 2", "Sass Video 3"],
  JavaScript: ["JS Video 1", "JS Video 2", "JS Video 3"],
  React: ["React Video 1", "React Video 2", "React Video 3"],
  "redux toolkit": ["Redux Video 1", "Redux Video 2", "Redux Video 3"],
  TypeScript: ["TS Video 1", "TS Video 2", "TS Video 3"],
  "Vue js": ["Vue Video 1", "Vue Video 2", "Vue Video 3"],
  "C++": ["C++ Video 1", "C++ Video 2", "C++ Video 3"],
  Python: ["Python Video 1", "Python Video 2", "Python Video 3"],
};

const Home = ({ sidebarOpen }) => {
  const [selectedTech, setSelectedTech] = useState(null);
  const selectedTitle = technologu.find(
    (tech) => tech.name === selectedTech
  )?.title;

  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <HomeSection>
          <Wrapper>
            {selectedTech ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "50px",
                  gap: "30px",
                }}
              >
                <h2>{selectedTitle}</h2>
                {selectedTech && videosByTech[selectedTech] && (
                  <div
                    className="videos"
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      marginTop: "20px",
                    }}
                  >
                    {videosByTech[selectedTech].map((video, index) => (
                      <div
                        key={index}
                        className="box"
                        style={{
                          width: "300px",
                          height: "200px",
                          backgroundColor: "red",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fff",
                          fontWeight: "bold",
                          borderRadius: "8px",
                          fontSize: "16px",
                        }}
                      >
                        {video}
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className="lock"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={lock} alt="" />
                  <p style={{ color: "grey", fontSize: "20px" }}>
                    Boshqalarini ko'rish uchun pastdagi havolaga o'ting
                  </p>
                  <a
                    href="https://t.me/furure_programmers"
                    style={{ fontSize: "20px" }}
                  >
                    Telegram
                  </a>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  style={{
                    marginTop: "25px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#333",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Orqaga
                </button>
              </div>
            ) : (
              <>
                <div className="start">
                  <div className="left">
                    <h1>IT SAF - dasturlash kurslari</h1>
                    <p>
                      “We are frontend developers specializing in creating
                      modern websites. 
                      We focus on UI/UX, design, and functionality, as well as
                      working with SSL, domains, hosting, 
                      and SEO to build fully responsive websites.”
                    </p>
                    <p></p>
                  </div>
                  <div className="right">
                    <img src={logo} alt="" style={{ width: "400px" }} />
                  </div>
                </div>
                <div className="end">
                  <h1>Kurslar</h1>
                  <div className="TexnologuesBoxs">
                    {technologu.map((tech, index) => (
                      <div
                        key={index}
                        className="TexnologuesBox"
                        onClick={() => setSelectedTech(tech.name)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={tech.img}
                          alt={tech.name}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <p
                          style={{
                            padding: "10px",
                            fontWeight: "600",
                            fontSize: "19px",
                          }}
                        >
                          {tech.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Wrapper>
        </HomeSection>
      </div>
    </section>
  );
};

export default Home;
