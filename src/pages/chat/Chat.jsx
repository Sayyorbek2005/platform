import React from "react";
// import "./chat.style";
import { ChatSection, Wrapper } from "./chat.style";
import ChatImg from "./assets/ChatImg.jpg";
import Telgram from "./assets/telegram 2.png";
// import Instagram from "./assets/instagram.png";
// import Youtube from "./assets/youtube.png";

const Chat = ({ sidebarOpen }) => {
  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <main>
          <ChatSection>
            <Wrapper>
              <div className="left">
                <h2>Bizga qo'shiling</h2>
                <p>
                  Biz va boshqalar bilan bog‘lanish uchun <br /> quyidagi
                  havoladan foydalaning
                </p>
                <div className="Chat_icons">
                  <div className="icon">
                    <p className="icon_top">Telagram</p>
                    <a href="https://t.me/furure_programmers">
                      {/* <img src={Telgram} alt="" /> */}
                      Telagram
                    </a>
                  </div>
                  {/* <div className="icon">
                    <p className="icon_top">Instagram</p>
                    <a href="https://www.instagram.com/IT_saf_sam">
                      <img src={Instagram} alt="" />
                    </a>
                  </div>
                  <div className="icon">
                    <p className="icon_top">Youtube</p>
                    <a href="https://www.youtube.com/@It_Saf">
                      <img src={Youtube} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="right">
                <img src={ChatImg} alt="" />
              </div>
            </Wrapper>
          </ChatSection>
        </main>
      </div>
    </section>
  );
};

export default Chat;


