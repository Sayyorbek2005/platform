import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen, isMobile }) => {
    if (isMobile) {
      return isOpen ? "350px" : "0";
    }
    return isOpen ? "280px" : "80px";
  }};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  transition: all 0.3s ease;
  overflow: hidden;

  /* Desktop (1200px+) */
  @media (min-width: 1200px) {
    width: ${({ isOpen }) => (isOpen ? "280px" : "80px")};
  }

  /* Notebook (992px - 1199px) */
  @media (max-width: 1199px) and (min-width: 992px) {
    width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  }

  /* Planshet (768px - 991px) */
  @media (max-width: 991px) and (min-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? "220px" : "65px")};
  }

  /* Telefon (767px va kichik) */
  @media (max-width: 767px) {
    width: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  }

  /* Kichik telefon (480px va kichik) */
  @media (max-width: 480px) {
    width: ${({ isOpen }) => (isOpen ? "320px" : "0")};
  }
`;

export const Logo = styled.div`
  text-align: center;
  padding: 25px 0;
  img {
    width: ${({ isOpen, isMobile }) => {
      if (isMobile && isOpen) return "160px";
      return isOpen ? "140px" : "50px";
    }};
    transition: width 0.3s ease;
  }

  /* Planshet va telefon */
  @media (max-width: 991px) {
    padding: 20px 0;
    img {
      width: ${({ isOpen, isMobile }) => {
        if (isMobile && isOpen) return "160px";
        return isOpen ? "120px" : "40px";
      }};
    }
  }

  /* Telefon */
  @media (max-width: 767px) {
    padding: 20px 0;
    img {
      width: ${({ isOpen }) => (isOpen ? "160px" : "0")};
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 0 10px;
    gap: 5px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    padding: 0 15px;
    gap: 8px;
  }
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 10px;
  color: #031e44;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(11, 99, 255, 0.1);
  }

  &.active {
    background-color: rgba(11, 99, 255, 0.12);
    color: #0b63ff;
  }

  &.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 4px;
    background-color: #0b63ff;
    border-radius: 6px;
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    padding: 10px 14px;
    gap: 12px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    padding: 14px 18px;
    gap: 16px;
    font-size: 16px;
  }
`;

export const Icon = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    font-size: 20px;
    min-width: 28px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    font-size: 24px;
    min-width: 32px;
  }
`;

export const Text = styled.span`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  white-space: nowrap;
  transition: opacity 0.3s ease;

  /* Telefon */
  @media (max-width: 767px) {
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    font-size: 16px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 18px 0;
  border-top: 1px solid #f1f1f1;
  background-color: #ffffff;

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    gap: 12px;
    padding: 15px 0;
  }

  /* Telefon */
  @media (max-width: 767px) {
    gap: 16px;
    padding: 20px 0;
  }
`;

export const SocialIconLink = styled.a`
  color: #0b63ff;
  font-size: 18px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #0b63ff;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #0b63ff;
    color: #ffffff;
    transform: translateY(-15%);
  }

  /* Planshet */
  @media (max-width: 991px) and (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  /* Telefon */
  @media (max-width: 767px) {
    width: 42px;
    height: 42px;
    font-size: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #031e44;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background-color: rgba(11, 99, 255, 0.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;  
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;

  @media (max-width: 767px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;