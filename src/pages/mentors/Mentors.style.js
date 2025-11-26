import styled from "styled-components";

export const MentorsSection = styled.div`
  max-width: 1280px;
  position: relative;
  left: 50px;
  top: 150px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 0 18px rgba(0,0,0,0.08);

  display: flex;
  justify-content: center;
  align-items: center;

  /* === RESPONSIVE WITH SIDEBAR === */

  @media (max-width: 1000px) {
    width: calc(100% - 220px);
    left: 220px;
  }

  @media (max-width: 900px) {
    /* Sidebar yo‘q deb ishlaymiz */
    width: 100%;
    left: 0;
    border-radius: 0;
    margin-top: 20px;
    position: relative;
    top: 0;
  }

  @media (max-width: 600px) {
    padding: 25px 15px;
  }
`;

/* CONTENT WRAPPER */
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
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
