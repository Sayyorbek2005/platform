import styled from "styled-components";

export const AdviseSection = styled.div`
  max-width: 1280px;
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "100%")};
  margin-left: ${(props) => (props.sidebarOpen ? "270px" : "0px")};
  margin-top: 70px; /* Header balandligi */
  padding: 20px;

  min-height: calc(100vh - 70px); /* Scroll chiqarmaydi */
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  background-color: #f9fafb;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  padding: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 19px 2px rgba(117, 139, 155, 0.15);

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
    padding: 25px;
  }

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 40px;

    @media (max-width: 600px) {
      font-size: 28px;
    }
  }

  p {
    color: grey;
    font-size: 16px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  img {
    width: 300px;

    @media (max-width: 600px) {
      width: 240px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }

  .inputs {
    position: relative;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    background-color: white;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  textarea {
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1.5px solid #0b63ff;
  }

  .inputs p {
    position: absolute;
    left: 12px;
    top: 12px;
    color: #777;
    background-color: white;
    pointer-events: none;
    transition: 0.3s;
  }

  .inputs input:focus + p,
  .inputs textarea:focus + p {
    top: -17px;
    color: #0b63ff;
    padding: 2px 6px;
    font-size: 12px;
  }

  button {
    padding: 12px;
    width: 60%;
    align-self: center;

    border-radius: 10px;
    border: none;
    background-color: #0b63ff;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    font-size: 16px;
  }

  button:hover {
    background-color: #084bcc;
  }
`;
