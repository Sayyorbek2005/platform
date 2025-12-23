import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundHeader,
  MaxWidth,
  HeaderWrapper,
  InputContainer,
  SearchIcon,
  RightSection,
  UploadBtn,
  UploadIcon,
  SearchResults,
  SearchResultItem,
  SidebarToggleBtn,
  Overlay,
} from "./Header.styles";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

// Search ma'lumotlari
const searchData = [
  { id: 1, title: "Bosh sahifa", path: "/" },
  { id: 2, title: "Web Loyiha", path: "/projects" },
  { id: 3, title: "O'qituvchilar", path: "/mentors" },
  { id: 4, title: "Reklamalar", path: "/reklamalar" },
  { id: 5, title: "Chat", path: "/chat" },
  { id: 6, title: "Taklif va Murojatlar", path: "/taklifvamurojatlar" },
  { id: 7, title: "Bizga qo'shiling", path: "/joinus" },
  { id: 8, title: "Contact", path: "/contact" },
  { id: 9, title: "Freelance", path: "/frilace" },
];

const Header = ({ sidebarOpen, onToggle, isMobile }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Tashqariga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
    setShowResults(true);
  };

  // Natijani bosganda
  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setShowResults(false);
  };

  // Enter bosilganda
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      handleResultClick(searchResults[0].path);
    }
  };

  return (
    <>
      <BackgroundHeader>
        <MaxWidth>
          <HeaderWrapper sidebarOpen={sidebarOpen}>

            {/* 🔹 CHAP QISM (MENU + SEARCH) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flex: 1,
              }}
            >
              {/* MENU ICON */}
              <SidebarToggleBtn onClick={onToggle} title="Toggle Sidebar">
                {sidebarOpen ? (
                  <RiMenuFoldFill size={22} />
                ) : (
                  <RiMenuUnfoldFill size={22} />
                )}
              </SidebarToggleBtn>

              {/* SEARCH */}
              <div ref={searchRef} style={{ position: "relative", width: "100%" }}>
                <InputContainer
                  sidebarOpen={sidebarOpen}
                  className={showResults ? "search-active" : ""}
                >
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Bo‘limni qidirish..."
                    value={searchQuery}
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                  />
                </InputContainer>

                {/* NATIJALAR */}
                {showResults && searchResults.length > 0 && (
                  <SearchResults sidebarOpen={sidebarOpen}>
                    {searchResults.map((item) => (
                      <SearchResultItem
                        key={item.id}
                        onClick={() => handleResultClick(item.path)}
                      >
                        {item.title}
                      </SearchResultItem>
                    ))}
                  </SearchResults>
                )}

                {/* TOPILMADI */}
                {showResults && searchResults.length === 0 && (
                  <SearchResults sidebarOpen={sidebarOpen}>
                    <SearchResultItem className="no-results">
                      Hech narsa topilmadi
                    </SearchResultItem>
                  </SearchResults>
                )}
              </div>
            </div>

            {/* 🔹 O‘NG QISM */}
            <RightSection>
              <UploadBtn
                as="a"
                href="/assets/IT_SAF.docx"
                download="IT_SAF_CV.docx"
              >
                <UploadIcon />
                Yuklab olish
              </UploadBtn>
            </RightSection>

          </HeaderWrapper>
        </MaxWidth>
      </BackgroundHeader>

      {/* MOBILE OVERLAY */}
      {isMobile && sidebarOpen && <Overlay onClick={onToggle} />}
    </>
  );
};

export default Header;
