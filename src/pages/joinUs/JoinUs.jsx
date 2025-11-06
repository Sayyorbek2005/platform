// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { 
//   JoinUsContainer, 
//   FormWrapper, 
//   Form, 
//   Label, 
//   Input, 
//   Button,
//   SwiperContainer,
//   AvatarContainer,
//   AvatarInput,
//   AvatarLabel,
//   CameraIcon,
//   InputGroup,
//   ImagePreview
// } from "./joinUs.style";

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import { Pagination, Navigation } from 'swiper/modules';

// const JoinUs = () => {
//   const [swiperRef, setSwiperRef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '+998',
//     avatar: null
//   });
//   const [avatarPreview, setAvatarPreview] = useState(null);
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [slides, setSlides] = useState([
//     { id: 1, type: 'simple', content: 'Slide 1' },
//     { id: 2, type: 'simple', content: 'Slide 2' },
//     { id: 3, type: 'simple', content: 'Slide 3' },
//     { id: 4, type: 'simple', content: 'Slide 4' }
//   ]);
//   const fileInputRef = useRef(null);

//   let appendNumber = slides.length + 1;
//   let prependNumber = 0;

//   const prepend2 = () => {
//     const newSlides = [
//       { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` },
//       { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` },
//     ];
//     setSlides(prev => [...newSlides, ...prev]);
//   };

//   const prepend = () => {
//     const newSlide = { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` };
//     setSlides(prev => [newSlide, ...prev]);
//   };

//   const append = () => {
//     const newSlide = { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` };
//     setSlides(prev => [...prev, newSlide]);
//   };

//   const append2 = () => {
//     const newSlides = [
//       { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` },
//       { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` },
//     ];
//     setSlides(prev => [...prev, ...newSlides]);
//   };

//   const handleInputChange = (e) => {
//     let value = e.target.value;
//     const name = e.target.name;

//     if (name === "phone") {
//       value = value.replace(/[^\d+]/g, "");
//       if (!value.startsWith("+998")) value = "+998";
//       if (value.length > 13) value = value.slice(0, 13);
//     }

//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setAvatarPreview(e.target.result);
//         setFormData(prev => ({
//           ...prev,
//           avatar: file
//         }));
//       };
//       reader.readAsDataURL(file);
      
//       toast.success('📸 Rasm muvaffaqiyatli yuklandi!');
//     }
//   };

//   const handleAvatarClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleAvatarContainerClick = (e) => {
//     if (avatarPreview) {
//       e.preventDefault();
//       setShowImagePreview(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name.trim() || !formData.phone.trim()) {
//       toast.error("❌ Iltimos, barcha maydonlarni to'ldiring!");
//       return;
//     }

//     if (formData.phone.length !== 13) {
//       toast.error("📞 Telefon raqam to'liq emas!");
//       return;
//     }

//     let finalAvatar = formData.avatar;
//     let avatarFileName = '';

//     if (finalAvatar && formData.phone !== '+998') {
//       const phoneFileName = formData.phone.replace(/\+/g, '');
//       const fileExtension = finalAvatar.name.split('.').pop();
//       avatarFileName = `${phoneFileName}.${fileExtension}`;
//     }

//     const newMemberData = {
//       id: Date.now(),
//       name: formData.name,
//       phone: formData.phone,
//       avatar: avatarPreview,
//       avatarFileName: avatarFileName,
//       timestamp: new Date().toLocaleString('uz-UZ')
//     };

//     const newMemberSlide = {
//       id: Date.now(),
//       type: 'member',
//       data: newMemberData
//     };

//     setSlides(prev => [newMemberSlide, ...prev]);

//     toast.success(`✅ ${formData.name} muvaffaqiyatli qo'shildi!`);
    
//     setFormData({ name: "", phone: "+998", avatar: null });
//     setAvatarPreview(null);
//   };

//   return (
//     <div>
//       <main>
//         <JoinUsContainer>
//           <SwiperContainer>
//             <h2 style={{ marginBottom: '20px', color: '#333' }}>
//               Manipulation Demo
//             </h2>
            
//             <Swiper
//               onSwiper={setSwiperRef}
//               slidesPerView={3}
//               centeredSlides={true}
//               spaceBetween={30}
//               pagination={{
//                 type: 'fraction',
//               }}
//               navigation={true}
//               modules={[Pagination, Navigation]}
//               className="mySwiper"
//             >
//               {slides.map((slide) => (
//                 <SwiperSlide key={slide.id}>
//                   {slide.type === 'member' ? (
//                     // Member slaydi
//                     <div style={{
//                       background: '#fff',
//                       borderRadius: '12px',
//                       padding: '20px',
//                       textAlign: 'center',
//                       minHeight: '200px',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}>
//                       {slide.data.avatar ? (
//                         <div>
//                           <img 
//                             src={slide.data.avatar} 
//                             alt={slide.data.name}
//                             style={{
//                               width: '60px',
//                               height: '60px',
//                               borderRadius: '50%',
//                               objectFit: 'cover',
//                               marginBottom: '10px'
//                             }}
//                           />
//                           {slide.data.avatarFileName && (
//                             <div style={{
//                               fontSize: '10px',
//                               color: '#888',
//                               marginTop: '5px'
//                             }}>
//                               📁 {slide.data.avatarFileName}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <div style={{
//                           width: '60px',
//                           height: '60px',
//                           borderRadius: '50%',
//                           background: '#007bff',
//                           color: 'white',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontSize: '18px',
//                           fontWeight: 'bold',
//                           marginBottom: '10px'
//                         }}>
//                           {slide.data.name.charAt(0).toUpperCase()}
//                         </div>
//                       )}
//                       <h3 style={{ 
//                         margin: '5px 0', 
//                         color: '#333',
//                         fontSize: '16px'
//                       }}>
//                         {slide.data.name}
//                       </h3>
//                       <p style={{ 
//                         margin: '3px 0', 
//                         color: '#666',
//                         fontSize: '12px'
//                       }}>
//                         {slide.data.phone}
//                       </p>
//                       <small style={{ 
//                         color: '#999',
//                         fontSize: '10px'
//                       }}>
//                         {slide.data.timestamp}
//                       </small>
//                     </div>
//                   ) : (
//                     <div style={{
//                       background: '#fff',
//                       borderRadius: '12px',
//                       padding: '20px',
//                       textAlign: 'center',
//                       minHeight: '150px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '18px',
//                       fontWeight: '600'
//                     }}>
//                       {slide.content}
//                     </div>
//                   )}
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//           </SwiperContainer>

//           <FormWrapper>
//             <Form onSubmit={handleSubmit}>
//               <h3 style={{ marginBottom: '20px', color: '#333' }}>
//                 Yangi A'zo Qo'shish
//               </h3>

//               <AvatarContainer onClick={handleAvatarContainerClick}>
//                 <AvatarInput 
//                   type="file" 
//                   ref={fileInputRef}
//                   onChange={handleAvatarChange}
//                   accept="image/*"
//                 />
//                 <AvatarLabel 
//                   htmlFor="avatar"
//                   hasImage={!!avatarPreview}
//                   imageUrl={avatarPreview}
//                   onClick={handleAvatarClick}
//                 >
//                   {!avatarPreview && '👤'}
//                 </AvatarLabel>
//                 <CameraIcon>📷</CameraIcon>
//               </AvatarContainer>

//               <InputGroup>
//                 <Label htmlFor="name">Ismingiz</Label>
//                 <Input 
//                   type="text" 
//                   id="name"
//                   name="name"
//                   placeholder='Ismingizni kiriting' 
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required 
//                 />
//               </InputGroup>

//               <InputGroup>
//                 <Label htmlFor="phone">Telefon raqamingiz</Label>
//                 <Input 
//                   type="tel" 
//                   id="phone"
//                   name="phone"
//                   placeholder='+998-(__)-___-____' 
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required 
//                 />
//               </InputGroup>

//               <Button type='submit'>A'zo Bo'lish</Button>
//             </Form>
//           </FormWrapper>

//           {/* Rasmni kattaroq ko'rish */}
//           {showImagePreview && avatarPreview && (
//             <ImagePreview onClick={() => setShowImagePreview(false)}>
//               <img src={avatarPreview} alt="Avatar preview" />
//               <button onClick={() => setShowImagePreview(false)}>✕</button>
//             </ImagePreview>
//           )}

//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </JoinUsContainer>
//       </main>
//     </div>
//   )
// }

// export default JoinUs




















































import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  ImagePreview
} from "./joinUs.style";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const JoinUs = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '+998',
    avatar: null
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [slides, setSlides] = useState([
    { id: 1, type: 'simple', content: 'Slide 1' },
    { id: 2, type: 'simple', content: 'Slide 2' },
    { id: 3, type: 'simple', content: 'Slide 3' }
  ]);
  const fileInputRef = useRef(null);

  let appendNumber = slides.length + 1;
  let prependNumber = 0;

  const prepend2 = () => {
    const newSlides = [
      { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` },
      { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` },
    ];
    setSlides(prev => [...newSlides, ...prev]);
  };

  const prepend = () => {
    const newSlide = { id: --prependNumber, type: 'simple', content: `Slide ${prependNumber}` };
    setSlides(prev => [newSlide, ...prev]);
  };

  const append = () => {
    const newSlide = { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` };
    setSlides(prev => [...prev, newSlide]);
  };

  const append2 = () => {
    const newSlides = [
      { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` },
      { id: ++appendNumber, type: 'simple', content: `Slide ${appendNumber}` },
    ];
    setSlides(prev => [...prev, ...newSlides]);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "phone") {
      value = value.replace(/[^\d+]/g, "");
      if (!value.startsWith("+998")) value = "+998";
      if (value.length > 13) value = value.slice(0, 13);
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
        setFormData(prev => ({
          ...prev,
          avatar: file
        }));
      };
      reader.readAsDataURL(file);
      
      toast.success('📸 Rasm muvaffaqiyatli yuklandi!');
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

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("❌ Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    if (formData.phone.length !== 13) {
      toast.error("📞 Telefon raqam to'liq emas!");
      return;
    }

    let finalAvatar = formData.avatar;
    let avatarFileName = '';

    if (finalAvatar && formData.phone !== '+998') {
      const phoneFileName = formData.phone.replace(/\+/g, '');
      const fileExtension = finalAvatar.name.split('.').pop();
      avatarFileName = `${phoneFileName}.${fileExtension}`;
    }

    const newMemberData = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      avatar: avatarPreview,
      avatarFileName: avatarFileName,
      timestamp: new Date().toLocaleString('uz-UZ')
    };

    const newMemberSlide = {
      id: Date.now(),
      type: 'member',
      data: newMemberData
    };

    setSlides(prev => [newMemberSlide, ...prev]);

    toast.success(`✅ ${formData.name} muvaffaqiyatli qo'shildi!`);
    
    setFormData({ name: "", phone: "+998", avatar: null });
    setAvatarPreview(null);
  };

  return (
    <div>
      <main>
        <JoinUsContainer>
          <SwiperContainer>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>
              Manipulation Demo
            </h2>
            
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {slide.type === 'member' ? (
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {slide.data.avatar ? (
                        <div>
                          <img 
                            src={slide.data.avatar} 
                            alt={slide.data.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              marginBottom: '10px'
                            }}
                          />
                          {slide.data.avatarFileName && (
                            <div style={{
                              fontSize: '10px',
                              color: '#888',
                              marginTop: '5px'
                            }}>
                              📁 {slide.data.avatarFileName}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#007bff',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          marginBottom: '10px'
                        }}>
                          {slide.data.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <h3 style={{ 
                        margin: '5px 0', 
                        color: '#333',
                        fontSize: '16px'
                      }}>
                        {slide.data.name}
                      </h3>
                      <p style={{ 
                        margin: '3px 0', 
                        color: '#666',
                        fontSize: '12px'
                      }}>
                        {slide.data.phone}
                      </p>
                      <small style={{ 
                        color: '#999',
                        fontSize: '10px'
                      }}>
                        {slide.data.timestamp}
                      </small>
                    </div>
                  ) : (
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '20px',
                      textAlign: 'center',
                      minHeight: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      {slide.content}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </SwiperContainer>

          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>
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
                  htmlFor="avatar"
                  hasImage={!!avatarPreview}
                  imageUrl={avatarPreview}
                  onClick={handleAvatarClick}
                >
                  {!avatarPreview && '👤'}
                </AvatarLabel>
                <CameraIcon>📷</CameraIcon>
              </AvatarContainer>

              <InputGroup>
                <Label htmlFor="name">Ismingiz</Label>
                <Input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder='Ismingizni kiriting' 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="phone">Telefon raqamingiz</Label>
                <Input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  placeholder='+998-(__)-___-____' 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </InputGroup>

              <Button type='submit'>A'zo Bo'lish</Button>
            </Form>
          </FormWrapper>

          {showImagePreview && avatarPreview && (
            <ImagePreview onClick={() => setShowImagePreview(false)}>
              <img src={avatarPreview} alt="Avatar preview" />
              <button onClick={() => setShowImagePreview(false)}>✕</button>
            </ImagePreview>
          )}

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </JoinUsContainer>
      </main>
    </div>
  )
}

export default JoinUs