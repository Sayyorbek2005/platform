import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  JoinUsContainer,
  FormWrapper,
  Form,
  Label,
  Input,
  Button,
  SwiperContainer,
  AvatarContainer,
  AvatarInput,
  AvatarLabel,
  CameraIcon,
  InputGroup,
  ImagePreview,
} from "./joinUs.style";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const JoinUs = ({ sidebarOpen }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  // 🔥 phone o‘rnida city ishlayapti
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const [slides, setSlides] = useState([
    { id: 1, type: "simple", content: "Slayd 1" },
    { id: 2, type: "simple", content: "Slayd 2" },
    { id: 3, type: "simple", content: "Slayd 3" },
  ]);

  const fileInputRef = useRef(null);

  let appendNumber = slides.length + 1;
  let prependNumber = 0;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
        setFormData((prev) => ({
          ...prev,
          avatar: file,
        }));
      };
      reader.readAsDataURL(file);

      toast.success("📸 Rasm muvaffaqiyatli yuklandi!");
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarContainerClick = (e) => {
    if (avatarPreview) {
      e.preventDefault();
      setShowImagePreview(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 validatsiya shahar bo‘yicha
    if (!formData.name.trim() || !formData.city.trim()) {
      toast.error("❌ Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const newMemberData = {
      id: Date.now(),
      name: formData.name,
      city: formData.city,
      avatar: avatarPreview,
      timestamp: new Date().toLocaleString("uz-UZ"),
    };

    const newMemberSlide = {
      id: Date.now(),
      type: "member",
      data: newMemberData,
    };

    setSlides((prev) => [newMemberSlide, ...prev]);

    toast.success(`✅ ${formData.name} muvaffaqiyatli qo'shildi!`);

    setFormData({ name: "", city: "", avatar: null });
    setAvatarPreview(null);
  };

  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <div>
          <main>
            <JoinUsContainer>
              <SwiperContainer>
                <h2 style={{fontSize:"35px", color:"#0b63ff"}}>
                  Manipulyatsiya demo
                </h2>

                <Swiper
                  onSwiper={setSwiperRef}
                  slidesPerView={3}
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{ type: "fraction" }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      {slide.type === "member" ? (
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "20px",
                            textAlign: "center",
                            minHeight: "200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {slide.data.avatar ? (
                            <div>
                              <img
                                src={slide.data.avatar}
                                alt={slide.data.name}
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                  marginBottom: "10px",
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "#007bff",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "18px",
                                fontWeight: "bold",
                                marginBottom: "10px",
                              }}
                            >
                              {slide.data.name.charAt(0).toUpperCase()}
                            </div>
                          )}

                          <h3 style={{ margin: "5px 0", color: "#333" }}>
                            {slide.data.name}
                          </h3>

                          {/* 🔥 Shahar chiqariladi */}
                          <p
                            style={{
                              margin: "3px 0",
                              color: "#666",
                              fontSize: "12px",
                            }}
                          >
                            {slide.data.city}
                          </p>

                          <small style={{ color: "#999", fontSize: "10px" }}>
                            {slide.data.timestamp}
                          </small>
                        </div>
                      ) : (
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "20px",
                            textAlign: "center",
                            minHeight: "150px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          {slide.content}
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SwiperContainer>

              {/* -------- Form -------- */}

              <FormWrapper>
                <Form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: "20px", color: "#333" }}>
                    Yangi A'zo Qo'shish
                  </h3>

                  <AvatarContainer onClick={handleAvatarContainerClick}>
                    <AvatarInput
                      type="file"
                      ref={fileInputRef}
                      onChange={handleAvatarChange}
                      accept="image/*"
                    />
                    <AvatarLabel
                      hasImage={!!avatarPreview}
                      imageUrl={avatarPreview}
                      onClick={handleAvatarClick}
                    >
                      {!avatarPreview && "👤"}
                    </AvatarLabel>
                    <CameraIcon>📷</CameraIcon>
                  </AvatarContainer>

                  <InputGroup>
                    <Label>Ismingiz</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ismingizni kiriting"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Shahringiz</Label>
                    <Input
                      type="text"
                      name="city"
                      placeholder="Shahringizni kiriting"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </InputGroup>

                  <Button type="submit">A'zo Bo'lish</Button>
                </Form>
              </FormWrapper>

              {showImagePreview && avatarPreview && (
                <ImagePreview onClick={() => setShowImagePreview(false)}>
                  <img src={avatarPreview} alt="Avatar preview" />
                  <button onClick={() => setShowImagePreview(false)}>✕</button>
                </ImagePreview>
              )}

              <ToastContainer position="top-right" autoClose={3000} theme="light" />
            </JoinUsContainer>
          </main>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
