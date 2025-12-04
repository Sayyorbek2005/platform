import styled from "styled-components";

export const HomeSection = styled.div`
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "calc(100% - 80px)")};
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 40px;
  padding-top: 110px; 
  min-height: 100vh;
  box-sizing: border-box;
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: 1300px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    padding: 20px;
    padding-top: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-x: hidden;

  .start {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(194, 186, 190, 0.26);
    padding: 30px;
    border-radius: 10px;
    gap: 30px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 700px;
      margin: 0 auto;

      h1 {
        font-size: 36px;
        font-weight: 700;
        color: #333;
      }

      p {
        color: grey;
        font-size: 16px;
        line-height: 1.6;
      }
    }

    .right img {
      width: 220px;
      object-fit: contain;
      margin: 0 auto;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;

      .right img {
        width: 180px;
      }

      .left {
        max-width: 100%;
      }
    }
  }

  .end {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    h1 {
      font-size: 30px;
      font-weight: 700;
      color: #333;
    }

    .TexnologuesBoxs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      padding: 10px;
      justify-items: center;
    }

    @media (max-width: 1100px) {
      .TexnologuesBoxs {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .TexnologuesBoxs {
        grid-template-columns: 1fr;
      }
    }

    .TexnologuesBox {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
      cursor: pointer;
      width: 100%;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      p {
        padding: 12px;
        font-weight: 600;
        font-size: 18px;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .tech-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    padding-top: 40px;
    /* 🔹 BACK ICON STYLE */
    .back {
      /* font-size: 32px; */
      position: absolute;
      top: 0;
      left: 10px;
      cursor: pointer;
      color: #333;
      transition: 0.2s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background-color: red; */
      border-radius: 10px;
      padding: 0px 10px;
      /* border: 1px solid black; */

      .back-btn{
        font-size: 35px;
        font-weight: 300;
        color: #0b63ff;
      }
      p{
        font-size: 20px;
      }
    }

    h2 {
      text-align: center;
      /* color: #333; */
    }

    .videos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      .box {
        width: 300px;
        height: 200px;
        background-color: #ff4d4d;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        border-radius: 8px;
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: translateY(-5px);
        }
      }
    }

    .lock {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 50px;
        height: 50px;
      }

      p {
        color: grey;
        font-size: 18px;
        text-align: center;
      }

      a {
        font-size: 18px;
        color: #2563eb;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
      margin-top: 25px;
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      background: #333;
      color: #fff;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background: #555;
      }
    }
  }
`;
