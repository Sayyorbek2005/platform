import styled from "styled-components";

export const ChatSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px);
  padding: 20px;
  position: absolute;
  height: 90%;
  top: 100px;
  left: 270px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  /* 📱 1000px dan past bo‘lsa — pozitsiyani normal qilamiz */
  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
    top: 0;
    height: auto;
    position: static; /* ✅ shu qator muammoni hal qiladi */
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
  background-color: rgba(194, 186, 190, 0.26);
  transition: 0.3s;

  /* 📱 Kichik ekranlarda ustma-ust joylashadi */
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    h2 {
      font-size: 28px;

      @media (max-width: 600px) {
        font-size: 22px;
      }
    }

    p {
      color: grey;
      font-size: 16px;

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    .Chat_icons {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;

      .icon {
        text-align: center;

        img {
          width: 50px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;

          @media (max-width: 600px) {
            width: 40px;
          }
        }

        .icon_top {
          font-size: 13px;
          color: gray;
          opacity: 0;
          transition: 0.3s;
          margin-bottom: 5px;
        }

        &:hover img {
          transform: scale(1.1);
        }

        &:hover .icon_top {
          opacity: 1;
        }
      }
    }
  }

  .right {
    img {
      width: 350px;
      height: 250px;
      border-radius: 10px;

      @media (max-width: 1000px) {
        width: 300px;
        height: 200px;
      }

      @media (max-width: 600px) {
        width: 250px;
        height: 170px;
      }
    }
  }
`;