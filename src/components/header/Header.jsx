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

// Sizning sahifalaringiz uchun search ma'lumotlari
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

  // Inputdan tashqariga bosilganda search natijalarini yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search funksiyasi
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowResults(true);
  };

  // Search natijasiga bosilganda
  const handleResultClick = (path) => {
    // React Router bilan navigation
    navigate(path);
    
    setShowResults(false);
    setSearchQuery("");
  };

  // Inputga fokus bo'lganda
  const handleInputFocus = () => {
    if (searchQuery.trim() !== "" && searchResults.length > 0) {
      setShowResults(true);
    }
  };

  // Enter bosilganda birinchi natijani ochish
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      handleResultClick(searchResults[0].path);
    }
  };

  return (
    <>
      <BackgroundHeader>
        <MaxWidth>
          <HeaderWrapper sidebarOpen={sidebarOpen}>
            <div ref={searchRef} style={{ position: "relative" }}>
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
                  onFocus={handleInputFocus}
                  onKeyPress={handleKeyPress}
                />
              </InputContainer>

              {/* Search natijalari */}
              {showResults && searchResults.length > 0 && (
                <SearchResults sidebarOpen={sidebarOpen}>
                  {searchResults.map((result) => (
                    <SearchResultItem 
                      key={result.id}
                      onClick={() => handleResultClick(result.path)}
                    >
                      {result.title}
                    </SearchResultItem>
                  ))}
                </SearchResults>
              )}

              {/* Natija topilmasa */}
              {showResults && searchQuery.trim() !== "" && searchResults.length === 0 && (
                <SearchResults sidebarOpen={sidebarOpen}>
                  <SearchResultItem className="no-results">
                    Hech narsa topilmadi
                  </SearchResultItem>
                </SearchResults>
              )}
            </div>

            <RightSection>
              <SidebarToggleBtn onClick={onToggle} title="Toggle Sidebar">
                {sidebarOpen ? (
                  <RiMenuFoldFill size={22} />
                ) : (
                  <RiMenuUnfoldFill size={22} />
                )}
              </SidebarToggleBtn>
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

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && <Overlay onClick={onToggle} />}
    </>
  );
};

export default Header;