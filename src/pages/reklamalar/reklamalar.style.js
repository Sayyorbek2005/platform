// import styled from "styled-components";

// export const ReklamalarSection = styled.div`
//   max-width: 1280px;
//   width: calc(100% - 270px);
//   padding: 20px;
//   position: absolute;
//   height: 90%;
//   top: 100px;
//   left: 270px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: 0.3s;
// `;

// export const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     font-size: 32px;
//     margin-bottom: 20px;
//   }
// `;

// export const Grid = styled.div`
//   display: grid;

//   /* 300px chap, 300px o‘ng */
//   grid-template-columns: 300px 300px;

//   /* 2 qator: 300px */
//   grid-template-rows: 300px 300px;

//   gap: 20px;

//   .leftBox {
//     width: 300px;
//     height: 300px;
//     background: #cfcfcf;
//     border-radius: 12px;
//     font-size: 22px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .rightBox {
//     width: 300px;
//     height: 620px;
//     grid-row: span 2; /* 2 qator bo‘ylab cho‘ziladi */
//     background: #d8d8d8;
//     border-radius: 12px;
//     font-size: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;


import styled from "styled-components";

export const ReklamalarSection = styled.div`
  max-width: 1280px;
  width: calc(100% - 270px);
  padding: 20px;
  position: absolute;
  top: 100px;
  left: 270px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;

  /* 2 ustun: 300 + 300 */
  grid-template-columns: 300px 300px;

  /* 2 qator: yuqori 1-qator, pastgi 1-qator */
  grid-template-rows: 300px 300px;

  gap: 20px;

  .topBox {
    width: 300px;
    height: 300px;
    background: #cfcfcf;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  }

  .bottomBox {
    grid-column: span 2; /* ikkita ustunni egallaydi */
    width: 100%;
    height: 300px;
    background: #d8d8d8;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
`;

