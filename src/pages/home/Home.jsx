import React, { useState } from "react";
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

import { MdKeyboardArrowLeft } from "react-icons/md";

const technologu = [
  {
    name: "Html",
    img: html,
    description: "HTML asoslarini o‘rganamiz va veb-sahifa tuzilishini yaratishni boshlaymiz. Teglar, atributlar va semantik HTMLdan qanday foydalanishni amalda ko‘rasiz."
  },
  {
    name: "Css",
    img: cssImg,
    description: "CSS yordamida sahifaga dizayn berishni o‘rganamiz. Ranglar, fontlar va layoutlarni amaliyotda qo‘llaymiz."
  },
  {
    name: "Bootstrap",
    img: boostrap,
    description: "Bootstrap framework bilan tez va chiroyli sahifalar yaratishni o‘rganamiz. Grid tizimi va tayyor komponentlardan foydalanamiz."
  },
  {
    name: "Sass",
    img: sas,
    description: "Sass yordamida CSSni samarali va modul tarzda yozishni o‘rganamiz. O‘zgaruvchilar va mixinlar orqali kodni optimallashtiramiz."
  },
  {
    name: "JavaScript",
    img: jsScript,
    description: "JavaScript bilan sahifaga interaktivlik qo‘shishni o‘rganamiz. Funksiyalar, sikllar va DOM bilan ishlashni amalda ko‘ramiz."
  },
  {
    name: "React",
    img: react,
    description: "React framework orqali komponent asosida sahifalar yaratamiz. State va props yordamida dinamik interfeys hosil qilamiz."
  },
  {
    name: "Redux Toolkit",
    img: reduxToolkit,
    description: "Redux Toolkit bilan global state boshqarishni o‘rganamiz. Asosiy store va slice yaratib, ma’lumotlarni boshqaramiz."
  },
  {
    name: "TypeScript",
    img: tupeScript,
    description: "TypeScript orqali JavaScriptni kuchaytirilgan tarzda ishlatamiz. Typelar yordamida xatoliklarni oldindan aniqlaymiz."
  },
  {
    name: "Vue js",
    img: vueJs,
    description: "Vue.js framework bilan komponent asosida interaktiv sahifalar yaratamiz. Data binding va reaktivlikni amalda ko‘ramiz."
  },
  {
    name: "C++",
    img: c,
    description: "C++ dasturlash asoslarini o‘rganamiz va algoritmlar yaratamiz. Funksiyalar, sikllar va ma’lumot tuzilmalarini amalda qo‘llaymiz."
  },
  {
    name: "Python",
    img: pyhon,
    description: "Python dasturlash tilini o‘rganamiz va oddiy dasturlar yaratamiz. Funksiyalar, listlar va sikllar bilan amaliyot qilamiz."
  },
];

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
  const selectedTitle = technologu.find((tech) => tech.name === selectedTech)?.title;

  return (
    <section className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}>
      <HomeSection sidebarOpen={sidebarOpen}> 
        <Wrapper>
          {selectedTech ? (
            <div className="tech-details">
              <div className="back" onClick={() => setSelectedTech(null)}>
              <MdKeyboardArrowLeft 
                className="back-btn"
              />
              <p>Orqaga</p>
              </div>

              <h2 style={{fontSize:"35px", color:"#0b63ff"}}>{selectedTitle}</h2>

              <div className="videos">
                {videosByTech[selectedTech].map((video, index) => (
                  <div key={index} className="box">
                    {video}
                  </div>
                ))}
              </div>

              <div className="lock">
                <img src={lock} alt="lock" />
                <p>Boshqalarini ko'rish uchun pastdagi havolaga o'ting</p>
                <a href="https://t.me/furure_programmers" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </div>
{/* 
              <button onClick={() => setSelectedTech(null)}>Orqaga</button> */}
            </div>
          ) : (
            <>
              <div className="start">
                <div className="left">
                  <h1 style={{fontSize:"35px", color:"#0b63ff"}}>IT SAF - dasturlash kurslari</h1>
                  <p>
                    Biz zamonaviy veb-saytlar yaratishga ixtisoslashgan frontend dasturchilarimiz.
                    UI/UX, dizayn va funksionallikka e’tibor beramiz, shuningdek SSL, domenlar,
                    xosting va SEO bilan ishlaymiz. To‘liq moslashuvchan (responsive) veb-saytlar yaratamiz.
                  </p>
                </div>
                <div className="right">
                  <img src={logo} alt="logo" />
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
                    >
                      <img src={tech.img} alt={tech.name} />
                      <p>{tech.name}</p>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Wrapper>
      </HomeSection>
    </section>
  );
};

export default Home;
