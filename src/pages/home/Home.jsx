import React, { useState } from 'react'
import "./Home.styles.js"
import { HomeSection, Wrapper } from './Home.styles.js'
import logo from "./assets/logo.png"
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

const technologu = [
  { name: "Html", img: html, title: "HTML video darsliklari" },
  { name: "Css", img: cssImg, title: "CSS video darsliklari" },
  { name: "Bootstrap", img: boostrap, title: "Bootstrap video darsliklari" },
  { name: "Sass", img: sas, title: "Sass video darsliklari" },
  { name: "JavaScript", img: jsScript, title: "JavaScript video darsliklari" },
  { name: "React", img: react, title: "React video darsliklari" },
  { name: "redux toolkit", img: reduxToolkit, title: "Redux Toolkit video darsliklari" },
  { name: "TypeScript", img: tupeScript, title: "TypeScript video darsliklari" },
  { name: "Vue js", img: vueJs, title: "Vue.js video darsliklari" },
  { name: "C++", img: c, title: "C++ video darsliklari" },
  { name: "Python", img: pyhon, title: "Python video darsliklari" },
];

const techDetails = {
  Html: { color: "orange"},
  Css: { color: "blue"},
  Bootstrap: { color: "purple"},
  Sass: { color: "pink"},
  "JavaScript": { color: "yellow"},
  React: { color: "cyan"},
  "redux toolkit": { color: "red"},
  TypeScript: { color: "lightblue"},
  "Vue js": { color: "green"},
  "C++": { color: "gray"},
  Python: { color: "gold"},
};

const Home = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const selectedTitle = technologu.find(tech => tech.name === selectedTech)?.title;

  return (
    <HomeSection>
      <Wrapper>
        {selectedTech ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{selectedTitle}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <div style={{
                width: "280px",
                height: "250px",
                background: techDetails[selectedTech]?.color || "red",
                borderRadius: "15px"
              }}></div>
              <div style={{
                width: "280px",
                height: "250px",
                background: techDetails[selectedTech]?.color || "blue",
                borderRadius: "15px"
              }}></div>
              <div style={{
                width: "280px",
                height: "250px",
                background: techDetails[selectedTech]?.color || "green",
                borderRadius: "15px"
              }}></div>
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
                  “We are frontend developers specializing in creating modern websites. <br />
                  We focus on UI/UX, design, and functionality, as well as working with SSL, domains, hosting, <br />
                  and SEO to build fully responsive websites.”
                </p>
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
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                    <p style={{ padding: "10px", fontWeight: "600", fontSize: "19px" }}>
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
  );
};

export default Home;
