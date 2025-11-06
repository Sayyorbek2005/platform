import React from "react";
import {
  BackgroundHeader,
  MaxWidth,
  HeaderWrapper,
  InputContainer,
  SearchIcon,
  RightSection,
  UploadBtn,
  UploadIcon,
  UserInfo,
  UserName,
  SidebarToggleBtn,
  Overlay,
} from "./Header.styles";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const Header = ({ sidebarOpen, onToggle, isMobile }) => {
  return (
    <>
      <BackgroundHeader>
        <MaxWidth>
          <HeaderWrapper sidebarOpen={sidebarOpen}>
            <InputContainer sidebarOpen={sidebarOpen}>
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </InputContainer>

            <RightSection>
              <SidebarToggleBtn onClick={onToggle} title="Toggle Sidebar">
                {sidebarOpen ? (
                  <RiMenuFoldFill size={22} />
                ) : (
                  <RiMenuUnfoldFill size={22} />
                )}
              </SidebarToggleBtn>

              <UploadBtn>
                <UploadIcon />
                Upload
              </UploadBtn>

              <UserInfo>
                <UserName>Mitchel</UserName>
              </UserInfo>
            </RightSection>
          </HeaderWrapper>
        </MaxWidth>
      </BackgroundHeader>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <Overlay onClick={onToggle} />
      )}
    </>
  );
};

export default Header;