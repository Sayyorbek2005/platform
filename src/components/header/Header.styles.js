import styled from "styled-components";
import { IoSearch, IoCloudUpload } from "react-icons/io5";

export const device = {
  mobile: "480px",
  tablet: "768px",
  notebook: "1024px",
  desktop: "1200px",
};

export const BackgroundHeader = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 997;

  /* Telefon */
  @media (max-width: 767px) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  /* Notebook (1199px - 992px) */
  @media (max-width: 1199px) and (min-width: 992px) {
    padding: 0 20px;
  }

  /* Planshet (991px - 768px) */
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 0 18px;
  }

  /* Telefon (767px va kichik) */
  @media (max-width: 767px) {
    padding: 0 16px;
  }

  /* Kichik telefon (480px va kichik) */
  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  /* Desktop (1200px+) */
  @media (min-width: 1200px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "280px" : "80px")};
  }

  /* Notebook (1199px - 992px) */
  @media (max-width: 1199px) and (min-width: 992px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "70px")};
  }

  /* Planshet (991px - 768px) */
  @media (max-width: 991px) and (min-width: 768px) {
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "220px" : "65px")};
  }

  /* Telefon (767px va kichik) */
  @media (max-width: 767px) {
    margin-left: 0;
    height: 60px;
  }

  /* Kichik telefon (480px va kichik) */
  @media (max-width: 480px) {
    height: 56px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 10px 15px;
  width: 520px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:focus-within {
    box-shadow: 0 0 0 1px #0b63ff;
    background-color: #ffffff;
  }

  /* Search natijalari ko'rinayotganda border radiusni o'zgartirish */
  &.search-active {
    border-radius: 20px 20px 0 0;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    color: #333;
    width: 100%;
    
    &::placeholder {
      color: #a0a0a0;
    }
  }

  /* Desktop (1200px+) */
  @media (min-width: 1200px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "520px" : "600px")};
  }

  /* Notebook (1199px - 992px) */
  @media (max-width: 1199px) and (min-width: 992px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "480px" : "550px")};
  }

  /* Planshet (991px - 768px) */
  @media (max-width: 991px) and (min-width: 768px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "400px" : "480px")};
  }

  /* Telefon (767px va kichik) */
  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    padding: 8px 14px;
    
    input {
      font-size: 15px;
    }
  }

  /* Kichik telefon (480px va kichik) */
  @media (max-width: 480px) {
    padding: 7px 12px;
    max-width: 100%;
    
    input {
      font-size: 14px;
    }
  }

  /* Juda kichik telefon (360px va kichik) */
  @media (max-width: 360px) {
    padding: 6px 10px;
    
    input {
      font-size: 13px;
    }
  }
`;

export const SearchIcon = styled(IoSearch)`
  color: #a0a0a0;
  font-size: 1.2rem;
  margin-right: 10px;
  flex-shrink: 0;

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 1.15rem;
    margin-right: 9px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 1.1rem;
    margin-right: 8px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    font-size: 1.1rem;
    margin-right: 8px;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-right: 6px;
  }
`;

export const SearchResults = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-top: 0;
  padding: 8px 0;
  max-height: 300px;
  overflow-y: auto;
  z-index: 999;
  list-style: none;
  animation: slideDown 0.2s ease;
  border: 1px solid #e0e0e0;
  border-top: none;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Desktop */
  @media (min-width: 1200px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "520px" : "600px")};
  }

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "480px" : "550px")};
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    width: ${({ sidebarOpen }) => (sidebarOpen ? "400px" : "480px")};
  }

  /* Telefon */
  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const SearchResultItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
  font-size: 15px;
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
    color: #0b63ff;
  }

  &.no-results {
    color: #999;
    cursor: default;
    
    &:hover {
      background-color: transparent;
      color: #999;
    }
  }

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    padding: 11px 18px;
    font-size: 14px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    padding: 10px 16px;
    font-size: 14px;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    padding: 9px 14px;
    font-size: 13px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: transparent;
  margin: 0;
  padding: 0;
  list-style: none;

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    gap: 12px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    gap: 10px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    gap: 8px;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const UploadBtn = styled.button`
  background-color: #0b63ff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* box-shadow: 0 6px 15px rgba(11, 99, 255, 0.4); */
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #0550d4;
    box-shadow: 0 8px 20px rgba(11, 99, 255, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    padding: 7px 16px;
    font-size: 14px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 7px 15px;
    font-size: 14px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    padding: 6px 14px;
    font-size: 13px;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    padding: 5px 12px;
    font-size: 12px;
  }

  /* Juda kichik telefon */
  @media (max-width: 360px) {
    padding: 4px 10px;
    font-size: 11px;
  }
`;

export const UploadIcon = styled(IoCloudUpload)`
  font-size: 1.1rem;
  margin-right: 6px;
  flex-shrink: 0;

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    font-size: 1.05rem;
    margin-right: 5px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 1rem;
    margin-right: 5px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-right: 4px;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-right: 3px;
  }
`;

export const SidebarToggleBtn = styled.button`
  background: #0b63ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background: #0550d4;
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(11, 99, 255, 0.5);
  }

  &:active {
    transform: scale(1);
  }

  /* Desktop */
  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }

  /* Notebook */
  @media (max-width: 1199px) and (min-width: 992px) {
    width: 38px;
    height: 38px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
    display: flex;
  }

  /* Kichik telefon */
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }

  /* Juda kichik telefon */
  @media (max-width: 360px) {
    width: 34px;
    height: 34px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: none;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`;