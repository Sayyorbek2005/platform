import React from 'react'
// import "./home.styles.js"
import { HomeSection, Wrapper } from './Home.styles.js'
import homeImg from "./assets/React-icon.svg.png"
import logo from "./assets/logo.png"
import html from "./assets/html.png";
import css from "./assets/Css.png";
import jsScript from "./assets/javaScripts.png";
import react from "./assets/React.png";
import tupeScript from "./assets/typyScripts.png";
import boostrap from "./assets/bostrap.png";
import sas from "./assets/sass.png";
import pyhon from "./assets/pyhon.png";
import c from "./assets/c++.png";
import 𝗿𝗲𝗱𝘂𝘅𝗧𝗼𝗼𝗹𝗸𝗶𝘁 from "./assets/redux tuld kid.png";
import 𝗩𝘂𝗲𝗝𝘀 from "./assets/vue js.png";

const technologu = [
  { name: "Html", img: html },
  { name: "Css", img: css },
  { name: "Bootstrap", img: boostrap },
  { name: "Sass", img: sas },
  { name: "JavaScript", img: jsScript },
  { name: "React", img: react },
  { name: "redux toolkit", img: 𝗿𝗲𝗱𝘂𝘅𝗧𝗼𝗼𝗹𝗸𝗶𝘁 },
  { name: "TypeScript", img: tupeScript },
  { name: "Vue js", img: 𝗩𝘂𝗲𝗝𝘀 },
  { name: "C++", img: c },
  { name: "Python", img: pyhon },
];

const Home = () => {
  return (
    <HomeSection>
      <Wrapper>
        <div className="start">
          <div className="left">
          <h1>IT SAF - dasturlash kurslari</h1>
          <p>“We are frontend developers specializing in creating modern websites. <br /> We focus on UI/UX, design, and functionality, as well as working with SSL, domains, hosting, <br /> and SEO to build fully responsive websites.”</p>
          </div>
          <div className="right">
            <img src={logo} alt="" style={{width:"400px"}} />
          </div>
        </div>
        <div className="end">
        <h1>Kurslar</h1>
        <div className="TexnologuesBoxs">
          {technologu.map((tech, index) => (
            <div className="TexnologuesBox">
              <img
                src={tech.img}
                alt=""
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <p
                style={{ padding: "10px", fontWeight: "600", fontSize: "19px" }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
        </div>
      </Wrapper>
    </HomeSection>
  )
}

export default Home