import React, { useState } from "react";
import { Left, MentorsSection, Phones, Right, Wrapper } from "./Mentors.style";
import { FiPhone } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import img from "./assets/mentors.img.png";

const Mentors = [
  {
    number: "1",
    name: "Lazizjon",
    des: "Men chiroyli va funksional saytlar yarataman. Har bir loyihamda toza dizayn, tezkorlik va mukammal foydalanuvchi tajribasiga e’tibor beraman.",
    phone: <FiPhone />,
    teleg: <PiTelegramLogoLight />,
    img: img,
  },
  {
    number: "2",
    name: "Sayyorbek",
    des: "Men frontend dasturchiman. Saytlarimda soddalik, chiroy va qulaylik uyg‘unligini yaratishga intilaman.",
    phone: <FiPhone />,
    teleg: <PiTelegramLogoLight />,
    img: img,
  },
  {
    number: "3",
    name: "Ibrohim",
    des: "Men frontend ishlab chiquvchiman. Ishlarimda minimalizm va foydalanuvchi qulayligini birinchi o‘ringa qo‘yaman.",
    phone: <FiPhone />,
    teleg: <PiTelegramLogoLight />,
    img: img,
  },
  {
    number: "4",
    name: "Sayyor",
    des: "Men frontend ishlab chiquvchiman. Ishlarimda minimalizm va foydalanuvchi qulayligini birinchi o‘ringa qo‘yaman.",
    phone: <FiPhone />,
    teleg: <PiTelegramLogoLight />,
    img: img,
  },
  {
    number: "5",
    name: "Muhammad",
    des: "Men frontend ishlab chiquvchiman. Ishlarimda minimalizm va foydalanuvchi qulayligini birinchi o‘ringa qo‘yaman.",
    phone: <FiPhone />,
    teleg: <PiTelegramLogoLight />,
    img: img,
  },
];

const Projects = ({ sidebarOpen }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("none");

  const next = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % Mentors.length);
  };

  const prev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + Mentors.length) % Mentors.length);
  };

  const box = Mentors[index];

  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <MentorsSection>
          <Wrapper>
            <button
              onClick={prev}
              style={{
                fontSize: "30px",
                border: "1px solid #0b63ff",
                background: "none",
                cursor: "pointer",
                color: "#0b63ff",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              <IoMdArrowBack />
            </button>

            <div
              style={{
                overflow: "hidden",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  animation:
                    direction === "next"
                      ? "slideNext 0.6s ease forwards"
                      : direction === "prev"
                      ? "slidePrev 0.6s ease forwards"
                      : "none",
                }}
              >
                <Left>
                  <h1>{box.number}</h1>
                  <h2 style={{ color: "#0b63ff" }}>{box.name}</h2>
                  <p>{box.des}</p>

                  <Phones>
                    <a
                      href="tel:883443036"
                      style={{ color: "#0b63ff", fontSize: "25px" }}
                    >
                      {box.phone}
                    </a>

                    <a
                      href="https://t.me/@azimjonovich_13"
                      rel="noopener noreferrer"
                      style={{ color: "#0b63ff", fontSize: "25px" }}
                    >
                      {box.teleg}
                    </a>
                  </Phones>
                </Left>

                <Right>
                  <img src={box.img} alt={box.name} />
                </Right>
              </div>
            </div>

            <button
              onClick={next}
              style={{
                fontSize: "30px",
                border: "1px solid #0b63ff",
                background: "none",
                cursor: "pointer",
                color: "#0b63ff",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              <IoArrowForwardOutline />
            </button>
          </Wrapper>

          <style>{`
            @keyframes slideNext {
              0% { transform: translateX(100%); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
            @keyframes slidePrev {
              0% { transform: translateX(-100%); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
          `}</style>
        </MentorsSection>
      </div>
    </section>
  );
};

export default Projects;
