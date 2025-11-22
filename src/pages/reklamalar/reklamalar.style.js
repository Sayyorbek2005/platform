import styled from "styled-components";

export const ReklamalarSection = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;

  /* 300px chap, 300px o‘ng */
  grid-template-columns: 300px 300px;

  /* 2 qator: 300px */
  grid-template-rows: 300px 300px;

  gap: 20px;

  .leftBox {
    width: 300px;
    height: 300px;
    background: #cfcfcf;
    border-radius: 12px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rightBox {
    width: 300px;
    height: 600px;
    grid-row: span 2; /* 2 qator bo‘ylab cho‘ziladi */
    background: #d8d8d8;
    border-radius: 12px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
