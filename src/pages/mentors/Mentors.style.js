import styled from "styled-components";

/* MENTORS SECTION WRAPPER */
export const MentorsSection = styled.div`
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "100%")};
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
  padding-top: 120px;
  border-radius: 20px;
  box-shadow: 0 0 18px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;  
  top: 160px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 30px 15px;
    border-radius: 0;
    padding-top: 80px;
  }
`;

/* CONTENT WRAPPER */
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  /* Buttons va carousel uchun markazlashgan layout */
  button {
    font-size: 30px;
    border: 1px solid #0b63ff;
    background: none;
    cursor: pointer;
    color: #0b63ff;
    padding: 5px;
    border-radius: 10px;
    transition: 0.3s ease;
  }

  button:hover {
    background: rgba(11, 99, 255, 0.1);
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

/* LEFT TEXT SECTION */
export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 38px;
    color: #444;
  }

  h2 {
    font-size: 26px;
    color: #0b63ff;
    font-weight: 600;
  }

  p {
    font-size: 17px;
    color: grey;
    line-height: 1.5;
  }

  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
    h1 { font-size: 32px; }
    h2 { font-size: 22px; }
    p { font-size: 15px; }
  }
`;

/* PHONE ICONS */
export const Phones = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 24px;
    color: #0b63ff;
    transition: 0.3s ease;
  }

  a:hover {
    color: #0646b5;
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

/* RIGHT IMAGE SECTION */
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 380px;
    border-radius: 14px;
    object-fit: cover;
    transition: 0.3s ease;
  }

  img:hover {
    transform: scale(1.04);
  }

  @media (max-width: 850px) {
    width: 100%;
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 230px;
    }
  }
`;

/* CAROUSEL BOX */
export const CarouselBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  overflow: hidden;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 25px;
  }

  /* Slide animation */
  .slideNext {
    animation: slideNext 0.6s ease forwards;
  }

  .slidePrev {
    animation: slidePrev 0.6s ease forwards;
  }

  @keyframes slideNext {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  @keyframes slidePrev {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;
