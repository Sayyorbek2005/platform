// import styled from "styled-components";

// export const ChatSection = styled.div`
//   max-width: 1280px;
//   width: calc(100% - 270px);
//   padding: 20px;
//   position: absolute;
//   height: 90%;
//   top: 70px;
//   left: 270px;
//   /* border-radius: 20px; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: 0.3s;
//   /* background-color: red; */

//   /* 📱 1000px dan past bo‘lsa — pozitsiyani normal qilamiz */
//   @media (max-width: 1000px) {
//     width: 100%;
//     left: 0;
//     top: 0;
//     height: auto;
//     position: static; /* ✅ shu qator muammoni hal qiladi */
//     padding: 10px;
//   }
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 50px;
//   padding: 50px;
//   border-radius: 20px;
//   /* background-color: rgba(194, 186, 190, 0.26); */
//   box-shadow: 0px 0px 19px 2px rgba(117, 139, 155, 0.15);
//   transition: 0.3s;

//   /* 📱 Kichik ekranlarda ustma-ust joylashadi */
//   @media (max-width: 1000px) {
//     flex-direction: column;
//     gap: 30px;
//     padding: 30px;
//   }

//   @media (max-width: 600px) {
//     padding: 20px;
//   }

//   .left {
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     /* text-align: center; */

//     h2 {
//       font-size: 28px;

//       @media (max-width: 600px) {
//         font-size: 22px;
//       }
//     }

//     p {
//       color: grey;
//       font-size: 16px;

//       @media (max-width: 600px) {
//         font-size: 14px;
//       }
//     }

//     .Chat_icons {
//       display: flex;
//       /* justify-content: center; */
//       gap: 0px;
//       flex-wrap: wrap;

//       .icon {
//         text-align: center;

//         img {
//           width: 50px;
//           border-radius: 10px;
//           cursor: pointer;
//           transition: 0.3s;

//           @media (max-width: 600px) {
//             width: 40px;
//           }
//         }

//         .icon_top {
//           font-size: 13px;
//           color: gray;
//           opacity: 0;
//           transition: 0.3s;
//           margin-bottom: 5px;
//         }

//         /* &:hover img {
//           transform: scale(1.1);
//         }

//         &:hover .icon_top {
//           opacity: 1;
//         } */
//       }
//     }
//   }

//   .right {
//     img {
//       width: 350px;
//       height: 250px;
//       border-radius: 10px;

//       @media (max-width: 1000px) {
//         width: 300px;
//         height: 200px;
//       }

//       @media (max-width: 600px) {
//         width: 250px;
//         height: 170px;
//       }
//     }
//   }
// `;

import styled from "styled-components";

export const ChatSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px);
  padding: 20px;
  position: absolute;
  height: 90%;
  top: 70px;
  left: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  /* 🧠 1300px dan past bo‘lsa — markazga joylash */
  @media (max-width: 1300px) {
    width: 100%;
    left: 0;
    top: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 📱 1000px dan past bo‘lsa — ustma-ust joylash */
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    position: static;
    top: 0;
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
  transition: 0.3s;

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