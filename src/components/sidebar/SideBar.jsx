// Sidebar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgLogo from "./assets/logotwo.png";
import lock from "./assets/lock.png";

import {
  IoHomeSharp,
  IoChatbubbleOutline,
  IoDocumentText,
} from "react-icons/io5";
import {
  FaLaptopCode,
  FaUserTie,
  FaBullhorn,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { MdContactMail, MdWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

import {
  SidebarContainer,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  Icon,
  Text,
  SocialIconsContainer,
  SocialIconLink,
  CloseButton,
  Overlay
} from "./Sidebar.styles";

const links = [
  { icon: <IoHomeSharp />, label: "Bosh sahifa", path: "/" },
  { icon: <FaLaptopCode />, label: "Web Loyiha", path: "/projects" },
  { icon: <FaUserTie />, label: "O'qituvchilar", path: "/mentors" },
  { icon: <FaBullhorn />, label: "Reklamalar", path: "/reklamalar" },
  { icon: <IoChatbubbleOutline />, label: "Chat", path: "/chat" },
  { icon: <IoDocumentText />, label: "Taklif va Fikirlar", path: "/taklifvamurojatlar" },
  { icon: <HiUserGroup />, label: "Bizga qo'shiling", path: "/joinus" },
  { icon: <MdContactMail />, label: "Contact", path: "/contact" },
  { 
    icon: <MdWork />,
    label: (
      <Text isOpen={true}>
        <span>Freelance</span>
        <img src={lock} width="18" alt="lock" />
      </Text>
    ),
    path: "/frilace"
  },
];

const socialLinks = [
  { icon: <FaTelegramPlane />, url: "https://t.me/It_Saf_samarqand", name: "Telegram" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/it_saf_sam/", name: "Instagram" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/@It_Saf", name: "YouTube" },
  { icon: <FaGithub />, url: "https://github.com/Sayyorbek2005", name: "GitHub" },
];

const Sidebar = ({ isOpen = true, onToggle, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    if (isMobile) onToggle(); // mobil qurilma bo'lsa sidebarni yopish
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        {isMobile && isOpen && <CloseButton onClick={onToggle}>✕</CloseButton>}

        {/* Logo bosilganda homega o'tadi */}
        <Logo isOpen={isOpen} onClick={() => navigate("/")}>
          <img src={imgLogo} alt="Logo" style={{ cursor: "pointer" }} />
        </Logo>

        <Menu>
          {links.map(({ icon, label, path }) => {
            const isActive = location.pathname === path;

            return (
              <MenuItem key={path}>
                <MenuLink
                  to={path}
                  className={isActive ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(path);
                  }}
                >
                  <Icon>{icon}</Icon>
                  <Text isOpen={isOpen}>{label}</Text>
                </MenuLink>
              </MenuItem>
            );
          })}
        </Menu>

        {isOpen && (
          <SocialIconsContainer>
            {socialLinks.map(({ icon, url }) => (
              <SocialIconLink key={url} href={url} target="_blank" rel="noreferrer">
                {icon}
              </SocialIconLink>
            ))}
          </SocialIconsContainer>
        )}
      </SidebarContainer>

      {isMobile && <Overlay isOpen={isOpen} onClick={onToggle} />}
    </>
  );
};

export default Sidebar;
