import styled from "styled-components";

export const HomeSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px);
  padding: 40px;
  position: absolute;
  top: 77px;
  left: 270px;
  border-radius: 20px;
  /* background-color: rgba(124, 109, 117, 0.16); */
  transition: all 0.3s ease;

  /* 1300px dan past */
  @media (max-width: 1300px) {
    width: calc(100% - 240px);
    left: 240px;
    padding: 35px;
  }

  /* 1024px dan past */
  @media (max-width: 1024px) {
    width: calc(100% - 200px);
    left: 200px;
    padding: 30px;
  }

  /* 900px dan past */
  @media (max-width: 900px) {
    width: 100%;
    left: 0;
    padding: 25px;
    border-radius: 0;
  }

  /* 768px dan past */
  @media (max-width: 768px) {
    padding: 20px;
  }

  /* 480px dan past */
  @media (max-width: 480px) {
    padding: 15px;
  }

  /* 350px dan past */
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
      max-width: 700px !important;
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
          font-size: 24px;
        }

        @media (max-width: 350px) {
          font-size: 20px;
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

    .right {
      img {
        width: 220px;
        height: auto;
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
    }

    /* 900px dan past — ustma-ust */
    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
      padding: 25px;
    }

    @media (max-width: 480px) {
      padding: 20px;
    }

    @media (max-width: 350px) {
      padding: 15px;
      gap: 15px;
    }
  }

  /* === END SECTION (KURSLAR) === */
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
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        gap: 15px;
      }

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      @media (max-width: 350px) {
        gap: 10px;
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