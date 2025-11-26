import styled from "styled-components";

export const HomeSection = styled.div`
  max-width: 1280px;
  top: 70px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 900px) {
    top: 70px;
    border-radius: 0;
    padding: 25px;
  }

  @media (max-width: 768px) {
    top: 20px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
  @media (max-width: 350px) {
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  /* === START SECTION === */
  .start {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(194, 186, 190, 0.26);
    padding: 30px;
    border-radius: 10px;
    gap: 30px;
    transition: all 0.3s ease;

    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 700px;
      width: 100%;

      h1 {
        font-size: 36px;
        font-weight: 700;
        color: #333;

        @media (max-width: 900px) {
          text-align: center;
          font-size: 30px;
        }

        @media (max-width: 600px) {
          font-size: 26px;
        }

        @media (max-width: 350px) {
          font-size: 22px;
        }
      }

      p {
        color: grey;
        line-height: 1.6;
        font-size: 16px;

        @media (max-width: 900px) {
          text-align: center;
          font-size: 14px;
        }

        @media (max-width: 480px) {
          font-size: 13px;
        }

        @media (max-width: 350px) {
          font-size: 12px;
        }
      }
    }

    .right img {
      width: 220px;
      object-fit: contain;

      @media (max-width: 900px) {
        width: 180px;
      }

      @media (max-width: 600px) {
        width: 150px;
      }

      @media (max-width: 480px) {
        width: 120px;
      }

      @media (max-width: 350px) {
        width: 100px;
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
      padding: 25px;
    }
  }

  /* === END SECTION === */
  .end {
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    h1 {
      font-size: 32px;
      font-weight: 700;
      color: #333;

      @media (max-width: 900px) {
        font-size: 28px;
      }

      @media (max-width: 600px) {
        font-size: 24px;
      }

      @media (max-width: 350px) {
        font-size: 20px;
      }
    }

    .TexnologuesBoxs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 10px;

      @media (max-width: 768px) {
        gap: 15px;
      }

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }
    }

    .TexnologuesBox {
      display: flex;
      flex-direction: column;
      width: 280px;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
      cursor: pointer;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;

        @media (max-width: 768px) {
          height: 160px;
        }

        @media (max-width: 480px) {
          height: 140px;
        }

        @media (max-width: 350px) {
          height: 120px;
        }
      }

      p {
        padding: 12px;
        font-weight: 600;
        font-size: 18px;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        @media (max-width: 480px) {
          font-size: 15px;
        }

        @media (max-width: 350px) {
          font-size: 13px;
        }
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 1300px) {
        width: 260px;
      }

      @media (max-width: 1024px) {
        width: 240px;
      }

      @media (max-width: 768px) {
        width: 45%;
      }

      @media (max-width: 480px) {
        width: 90%;
      }

      @media (max-width: 350px) {
        width: 100%;
      }
    }
  }
`;
