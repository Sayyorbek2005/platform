import styled from "styled-components";

export const ChatSection = styled.div`
  max-width: 1280px;
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "100%")};
  margin-left: ${(props) => (props.sidebarOpen ? "270px" : "0")};
  padding: 20px;
  position: relative;
  min-height: calc(100vh - 70px); /* Header balandligini hisobga oladi */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  box-sizing: border-box;
  top: 40px;
  /* background-color: red; */

  @media (max-width: 1300px) {
    width: 100%;
    margin-left: 0;
    min-height: calc(100vh - 110px);
  }

  @media (max-width: 1000px) {
    padding: 10px;
    flex-direction: column;
    min-height: calc(100vh - 110px);
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
  transition: 0.3s;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 600px) {
    padding: 20px;
    gap: 20px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 15px;

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
      gap: 15px;
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
        button{
          padding: 10px 30px;
          border-radius: 10px;
          border: none;
          background-color: blue;
        }
        a{
          color: white;
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
