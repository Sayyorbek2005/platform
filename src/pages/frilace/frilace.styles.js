import styled from 'styled-components'

export const FrilanceSection = styled.div`
  width: ${(props) => (props.sidebarOpen ? "calc(100% - 270px)" : "calc(100% - 80px)")};
  max-width: 1280px; 
  margin: 0 auto; 
  padding: 40px;
  padding-top: 110px; 
  min-height: 100vh;
  box-sizing: border-box;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* vertikal markazlashuv */
  transition: 0.3s;

  h2{
    color: #0b63ff;
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    left: 80px;
  }

  @media (max-width: 480px) {
    width: 100%;
    left: 0;
    padding: 10px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    max-height: 300px; /* maksimal bo'yi */
    height: 100%;      /* proporsiyasini saqlaydi */
    width: auto;       /* eni proporsiyaga moslashadi */
    object-fit: contain;
  }

  h2 {
    font-size: 22px;
    text-align: center;
  }

  @media (max-width: 768px) {
    img {
      max-height: 250px;
    }

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 200px;
    }

    h2 {
      font-size: 18px;
    }
  }
`
