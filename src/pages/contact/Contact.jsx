import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uz from 'date-fns/locale/uz'; // o'zbek locale

import {
  Container,
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

  return (
    <main>
      <div className="max-width">
        <Container>
          <FormSection>
            <h2>Hamkorlik qilaylik</h2>
            <p>Agar savollaringiz bo‘lsa, biz bilan bog‘laning.</p>
            <form>
              <InputGroup>
                <input type="text" placeholder="Ism" required/>
                <input type="text" placeholder="Familiya" required />
              </InputGroup>
              <InputGroup>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Sana tanlang"
                  locale="uz"
                  dateFormat="dd/MM/yyyy"
                  className="datepicker-input"
                  required
                />
                <input type="text" placeholder="Telefon raqam" required />
              </InputGroup>
              <textarea placeholder="Xabaringizni shu yerga yozing." required></textarea>
              <button type="submit">Xabar yuborish</button>
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
                <p>Samarqand, O‘zbekiston</p>
              </div>
            </InfoItem>

            <SocialIcons>
              <IconLink href="https://www.instagram.com/" aria-label="Instagram">
                <FaInstagram />
              </IconLink>
              <IconLink href="https://web.telegram.org/k/" aria-label="Telegram">
                <FaTelegram />
              </IconLink>
              <IconLink href="https://www.youtube.com/" aria-label="YouTube">
                <FaYoutube />
              </IconLink>
            </SocialIcons>
          </InfoSection>
        </Container>
      </div>
    </main>
  );
};

export default Contact;
