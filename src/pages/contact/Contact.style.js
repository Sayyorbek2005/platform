import styled from "styled-components";

const vars = {
  bg: "#FFFFFF",
  accent: "#0B63FF",
  text: "#031E44",
  muted: "#6B7280",
  inputBg: "#F8FAFC",
  border: "#E6E9EE",
  radius: "14px",
  sidebarWidth: "240px",
  shadow: "0 8px 28px rgba(9, 30, 66, 0.07)",
};

const device = {
  desktop: "1440px",
  notebook: "1200px",
  tablet: "768px", // 900px dan 768px ga o'zgartirildi
  phone: "480px",  // 600px dan 480px ga o'zgartirildi
};

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
  color: ${vars.text};
  transition: all 0.3s ease;

  // Desktop (1440px+)
  @media (min-width: ${device.desktop}) {
    max-width: 1400px;
    padding: 60px;
  }

  // Notebook (1200px - 1439px)
  @media (max-width: ${device.notebook}) {
    grid-template-columns: 1fr 340px;
    gap: 36px;
    padding: 32px;
  }

  // Tablet (768px - 1199px)
  @media (max-width: ${device.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 90%;
    padding: 24px;
  }

  // Phone (480px va kichikroq)
  @media (max-width: ${device.phone}) {
    padding: 16px;
    gap: 24px;
    max-width: 95%;
  }
`;

export const FormSection = styled.section`
  background: ${vars.bg};
  border-radius: ${vars.radius};
  padding: 36px;
  box-shadow: ${vars.shadow};
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(9, 30, 66, 0.09);
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: ${vars.muted};
    margin-bottom: 24px;
    font-size: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input,
    textarea {
      width: 100%;
      padding: 14px 16px;
      border-radius: 10px;
      border: 1px solid ${vars.border};
      background: ${vars.inputBg};
      font-size: 15px;
      color: ${vars.text};
      outline: none;
      transition: all 0.2s ease;

      &:focus {
        border-color: ${vars.accent};
        box-shadow: 0 0 0 4px rgba(11, 99, 255, 0.1);
      }
    }

    textarea {
      min-height: 140px;
      resize: vertical;
    }

    button[type="submit"] {
      align-self: flex-start;
      padding: 12px 26px;
      border: none;
      border-radius: 10px;
      background: ${vars.accent};
      color: #fff;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(11, 99, 255, 0.25);
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(11, 99, 255, 0.28);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 4px 12px rgba(11, 99, 255, 0.22);
      }
    }
  }

  // Tablet
  @media (max-width: ${device.tablet}) {
    padding: 28px;
    
    h2 {
      font-size: 24px;
    }
    
    form {
      gap: 14px;
      
      input, textarea {
        padding: 12px 14px;
        font-size: 14px;
      }
      
      textarea {
        min-height: 120px;
      }
    }
  }

  // Phone
  @media (max-width: ${device.phone}) {
    padding: 20px;
    
    h2 {
      font-size: 22px;
    }
    
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
    
    form {
      gap: 12px;
      
      input, textarea {
        padding: 10px 12px;
        font-size: 14px;
      }
      
      textarea {
        min-height: 100px;
      }
      
      button[type="submit"] {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  // Tablet
  @media (max-width: ${device.tablet}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  // Phone
  @media (max-width: ${device.phone}) {
    gap: 10px;
  }
`;

export const InfoSection = styled.aside`
  background: ${vars.bg};
  border-radius: ${vars.radius};
  padding: 32px;
  box-shadow: ${vars.shadow};
  display: flex;
  flex-direction: column;
  gap: 22px;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(9, 30, 66, 0.09);
  }

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${vars.text};
  }

  p,
  a {
    margin: 0;
    font-size: 14px;
    color: ${vars.muted};
  }

  a {
    text-decoration: none;
    color: ${vars.accent};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  // Tablet
  @media (max-width: ${device.tablet}) {
    padding: 28px;
    gap: 20px;
  }

  // Phone
  @media (max-width: ${device.phone}) {
    padding: 22px;
    gap: 18px;
    
    h4 {
      font-size: 15px;
    }
    
    p, a {
      font-size: 13px;
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  svg {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
    background: rgba(11, 99, 255, 0.08);
    color: ${vars.accent};
    flex-shrink: 0;
  }

  // Tablet
  @media (max-width: ${device.tablet}) {
    gap: 12px;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }

  // Phone
  @media (max-width: ${device.phone}) {
    gap: 10px;
    
    svg {
      width: 32px;
      height: 32px;
      padding: 6px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  // Phone
  @media (max-width: ${device.phone}) {
    gap: 10px;
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${vars.inputBg};
  border: 1px solid ${vars.border};
  color: ${vars.accent};
  font-size: 18px;
  text-decoration: none;
  transition: all 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(3, 30, 68, 0.1);
  }

  // Tablet
  @media (max-width: ${device.tablet}) {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }

  // Phone
  @media (max-width: ${device.phone}) {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }
`;