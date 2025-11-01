import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgLogo from "./assets/logotwo.png";

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
  FaLinkedinIn,
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
  { icon: <IoHomeSharp />, label: "Home", path: "/" },
  { icon: <FaLaptopCode />, label: "Web Project", path: "/projects" },
  { icon: <FaUserTie />, label: "Mentors", path: "/mentors" },
  { icon: <FaBullhorn />, label: "Reklamalar", path: "/reklamalar" },
  { icon: <IoChatbubbleOutline />, label: "Chat", path: "/chat" },
  {
    icon: <IoDocumentText />,
    label: "Taklif va Murojatlar",
    path: "/taklifvamurojatlar",
  },
  { icon: <HiUserGroup />, label: "Join Us", path: "/joinus" },
  { icon: <MdContactMail />, label: "Contact", path: "/contact" },
  { icon: <MdWork />, label: "Frilance", path: "/frilace" },
];

const socialLinks = [
  {
    icon: <FaTelegramPlane />,
    url: "https://web.telegram.org/k/",
    name: "Telegram",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
    name: "Instagram",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/",
    name: "YouTube",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/",
    name: "GitHub",
  },
];

const Sidebar = ({ isOpen = true, onToggle, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    if (isMobile) {
      onToggle();
    }
  };

  const handleClose = () => {
    if (isMobile) {
      onToggle();
    }
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        {/* Mobile uchun yopish tugmasi */}
        {isMobile && isOpen && (
          <CloseButton onClick={handleClose}>
            ✕
          </CloseButton>
        )}
        
        <Logo isOpen={isOpen}>
          <img src={imgLogo} alt="Logo" />
        </Logo>

        <Menu>
          {links.map(({ icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <MenuItem key={label}>
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

        {/* Social iconlarni faqat sidebar ochiq bo'lganda ko'rsatish */}
        {isOpen && (
          <SocialIconsContainer>
            {socialLinks.map(({ icon, url, name }) => (
              <SocialIconLink
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
              >
                {icon}
              </SocialIconLink>
            ))}
          </SocialIconsContainer>
        )}
      </SidebarContainer>

      {/* Mobile overlay */}
      {isMobile && (
        <Overlay isOpen={isOpen} onClick={handleClose} />
      )}
    </>
  );
};

export default Sidebar;