import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uz from 'date-fns/locale/uz';

import {
  Wrapper,
  FormSection,
  InputGroup,
  InfoSection,
  InfoItem,
  SocialIcons,
  IconLink
} from './Contact.style'

registerLocale('uz', uz);

const Contact = () => {
  const [startDate, setStartDate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [fieldStatus, setFieldStatus] = useState({
    firstName: { isValid: false, isTouched: false },
    lastName: { isValid: false, isTouched: false },
    phone: { isValid: false, isTouched: false },
    message: { isValid: false, isTouched: false }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validatsiya
    let isValid = false;
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        isValid = value.trim().length >= 2;
        break;
      case 'message':
        isValid = value.trim().length >= 10;
        break;
      default:
        isValid = false;
    }
    
    if (name !== 'phone') {
      setFieldStatus(prev => ({
        ...prev,
        [name]: { 
          ...prev[name], 
          isValid: isValid,
          isTouched: true
        }
      }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/[^\d+]/g, '');
    
    // Faqat +998 bilan boshlanishini ta'minlash
    if (!value.startsWith('+998')) {
      value = '+998' + value.replace(/^\+?/, '');
    }
    
    // 13 ta belgidan ortiq bo'lmasligi
    if (value.length > 13) {
      value = value.substring(0, 13);
    }
    
    setFormData(prev => ({ ...prev, phone: value }));
    
    // Validatsiya
    const isValid = value.length === 13 && /^\+998\d{9}$/.test(value);
    setFieldStatus(prev => ({
      ...prev,
      phone: { 
        ...prev.phone, 
        isValid: isValid,
        isTouched: true
      }
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFieldStatus(prev => ({
      ...prev,
      [name]: { 
        ...prev[name], 
        isTouched: true
      }
    }));
  };

  const sendToTelegram = async (text) => {
    const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    console.log("Token va Chat ID:", { token, chatId });

    if (!token || !chatId) {
      setStatus('⚠️ Bot token yoki chat ID topilmadi!');
      console.error("Bot token yoki chat ID topilmadi");
      return false;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    };

    try {
      console.log("Telegram API ga so'rov yuborilmoqda...");
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      console.log("Telegram API javobi:", data);
      
      if (response.ok && data.ok) {
        console.log("Xabar muvaffaqiyatli yuborildi!");
        return true;
      } else {
        console.error('Telegram API xatosi:', data);
        setStatus(`❌ Xatolik: ${data.description || 'Noma\'lum xatolik'}`);
        return false;
      }
    } catch (error) {
      console.error('Telegram API xatosi:', error);
      setStatus('❌ Internet aloqasi yoki server xatosi!');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Barcha maydonlarni tekshirish
    const isFormValid = fieldStatus.firstName.isValid && 
                       fieldStatus.lastName.isValid && 
                       fieldStatus.phone.isValid && 
                       fieldStatus.message.isValid &&
                       startDate;

    if (!isFormValid) {
      setStatus('Iltimos, barcha maydonlarni to\'g\'ri to\'ldiring!');
      
      // Barcha maydonlarni touched qilish
      setFieldStatus(prev => ({
        firstName: { ...prev.firstName, isTouched: true },
        lastName: { ...prev.lastName, isTouched: true },
        phone: { ...prev.phone, isTouched: true },
        message: { ...prev.message, isTouched: true }
      }));
      return;
    }

    setLoading(true);
    setStatus('');

    const formattedDate = startDate ? new Date(startDate).toLocaleDateString('uz-UZ') : '';
    
    const telegramMessage = `
<b>📨 Yangi Murojat!</b>
────────────────────
<b>👤 Ism-Familiya:</b> ${formData.firstName} ${formData.lastName}
<b>📅 Sana:</b> ${formattedDate}
<b>📱 Telefon:</b> <a href="tel:${formData.phone}">${formData.phone}</a>
────────────────────
<b>💬 Xabar:</b>
${formData.message}
────────────────────
<b>⏰ Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `;

    console.log("Telegram xabari:", telegramMessage);

    const success = await sendToTelegram(telegramMessage);

    if (success) {
      setStatus('✅ Xabaringiz muvaffaqiyatli yuborildi!');
      
      // Formani tozalash
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          phone: '+998',
          message: ''
        });
        setStartDate(null);
        setFieldStatus({
          firstName: { isValid: false, isTouched: false },
          lastName: { isValid: false, isTouched: false },
          phone: { isValid: false, isTouched: false },
          message: { isValid: false, isTouched: false }
        });
      }, 1500);
    }

    setLoading(false);
  };

  const renderValidationStyle = (fieldName) => {
    const field = fieldStatus[fieldName];
    if (!field.isTouched) return '';
    return field.isValid ? 'valid' : 'invalid';
  };

  return (
    <main>
      <div className="max-width">
        <Wrapper>
          <FormSection>
            <h2 style={{fontSize:"30px", color:"#0b63ff"}}>Hamkorlik qilaylik</h2>
            <p>Agar savollaringiz bo'lsa, biz bilan bog'laning.</p>
            
            {status && (
              <div className={`status-message ${status.includes('✅') ? 'success' : status.includes('❌') ? 'error' : 'warning'}`}>
                {status}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="Ism" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={renderValidationStyle('firstName')}
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Familiya" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={renderValidationStyle('lastName')}
                  required
                />
              </InputGroup>
              
              <InputGroup>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Sana tanlang"
                  locale="uz"
                  dateFormat="dd/MM/yyyy"
                  className={`datepicker-input ${!startDate && fieldStatus.phone.isTouched ? 'invalid' : ''}`}
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Telefon raqam" 
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  className={renderValidationStyle('phone')}
                  required
                />
              </InputGroup>
              
              <textarea 
                name="message"
                placeholder="Xabaringizni shu yerga yozing." 
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={renderValidationStyle('message')}
                required
              ></textarea>
              
              <button type="submit" disabled={loading}>
                {loading ? 'Yuborilmoqda...' : 'Xabar yuborish'}
              </button>
            </form>
          </FormSection>

          <InfoSection>
            <InfoItem>
              <FaPhoneAlt />
              <div>
                <h4>Telefon</h4>
                <a href="tel:+998947238850">+998(94)-723-88-50</a>
                <br />
                <a href="tel:+998979359707">+998(97)-935-97-07</a>
              </div>
            </InfoItem>

            <InfoItem>
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>youremail@gmail.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Manzil</h4>
                <p>Samarqand, O'zbekiston</p>
              </div>
            </InfoItem>

            <SocialIcons>
              <IconLink href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </IconLink>
              <IconLink href="https://web.telegram.org/k/" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </IconLink>
              <IconLink href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </IconLink>
            </SocialIcons>
          </InfoSection>
        </Wrapper>
      </div>
    </main>
  );
};

export default Contact;

