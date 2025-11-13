import styled from "styled-components";

export const AdviseSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px);
  padding: 20px;
  /* background-color: rgba(244, 236, 240, 0.35); */
  position: absolute;
  /* min-height: 90vh; */
  height: 100%;
  top: 125px;
  left: 270px;
  border-radius: 20px;
  transition: all 0.3s ease;
  /* display: flex;
  align-items: center;
  justify-content: center; */

  @media (max-width: 1024px) {
    width: calc(100% - 230px);
    left: 230px;
    top: 80px;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    top: 90px;
    border-radius: 0;
    padding: 15px;
  }

  @media (max-width: 480px) {
    top: 70px;
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 19px 2px rgba(117, 139, 155, 0.15);
  background: white;

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 15px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;

  h1 {
    font-size: 40px;
    line-height: 1.2;
  }

  p {
    color: grey;
    font-size: 16px;
  }

  img {
    width: 300px;
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 32px;
    }
    img {
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 15px;
    }
    img {
      width: 220px;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }
    img {
      width: 180px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;

  .inputs {
    position: relative;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    transition: all 0.3s ease;
    background-color: white;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1.5px solid #0b63ff;
  }

  .inputs p {
    position: absolute;
    left: 10px;
    top: 10px;
    color: gray;
    transition: all 0.3s ease;
    background-color: white;
    pointer-events: none;
  }

  .inputs input:focus + p,
  .inputs textarea:focus + p {
    top: -18.5px;
    color: #0b63ff;
    padding: 5px;
  }

  button {
    padding: 10px 15px;
    width: 60%;
    border-radius: 10px;
    border: none;
    background-color: #0b63ff;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    align-self: center;
  }

  button:hover {
    background-color: #084bcc;
  }

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    gap: 15px;
    input,
    textarea {
      font-size: 14px;
      padding: 8px;
    }
  }
`;