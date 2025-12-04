import styled from "styled-components";

/* MAIN SECTION */
export const MentorsSection = styled.div`
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "80%")};
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 230px;

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 30px 15px;
    border-radius: 0;
    top: 150px;
  }
`;

/* WRAPPER */
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  /* 900px ↓ TAGMA-TAG */
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }

  button {
    font-size: 30px;
    border: 1px solid #0b63ff;
    background: none;
    cursor: pointer;
    color: #0b63ff;
    padding: 5px 10px;
    border-radius: 10px;
    transition: 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: rgba(11, 99, 255, 0.1);
  }
`;

/* LEFT SIDE */
export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 38px;
    color: #444;
    font-weight: bold;
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

  /* 900px ↓ TAGMA-TAG */
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 23px;
    }
    p {
      font-size: 15px;
    }
  }
`;

/* PHONE + TELEGRAM ICONS */
export const Phones = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  a {
    font-size: 25px;
    color: #0b63ff;
    transition: 0.3s;
  }

  a:hover {
    color: #064ec2;
  }

  /* 900px ↓ center bo‘ladi */
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

/* RIGHT SIDE */
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 380px;
    border-radius: 14px;
    object-fit: cover;
    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.04);
  }

  /* 900px ↓ TAGMA-TAG */
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 20px;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 90%;
    }
  }
`;

/* SLIDER BOX (ANIMATIONS) */
export const MentorsMax = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .slideNext {
    animation: slideNext 0.6s ease forwards;
  }

  .slidePrev {
    animation: slidePrev 0.6s ease forwards;
  }

  @keyframes slideNext {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slidePrev {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
