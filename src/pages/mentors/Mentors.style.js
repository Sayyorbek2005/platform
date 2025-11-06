import styled from "styled-components";

export const MentorsSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px); 
  padding: 20px;
  background-color: rgba(244, 236, 240, 0.35);
  position: absolute;
  height: 97%;
  left: 270px; 
  border-radius: 20px;
  transition: all 0.3s ease;
  margin: auto;

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 700px) {
    padding: 40px 15px 25px 15px; 
  }

  @media (max-width: 450px) {
    padding: 30px 10px 15px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px; 

  button {
    font-size: 30px;
    cursor: pointer;
    transition: 0.2s ease;
    border: none;
    background: none;
  }

  button:hover {
    transform: scale(1.1);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
`;

export const Left = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 50px;
    color: grey;
  }

  h2 {
    font-size: 30px;
    color: #111;
  }

  p {
    font-size: 20px;
    color: grey;
  }

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 38px;
    }
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const Phones = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 430px;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1100px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    img {
      width: 90%;
      max-width: 320px;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 100%;
      max-width: 250px;
    }
  }
`;