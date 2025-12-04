
import React, { useState } from "react";
import {
  AdviseSection,
  Left,
  Right,
  Wrapper,
} from "./taklifVamirojatlar.style";
import AdvideImg from "./assets/photo_2025-10-28_18-56-50.jpg";
import { toast } from "react-toastify";

const TaklifVaMurojatlar = ({ sidebarOpen }) => {
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [loading, setLoading] = useState(false);
  

  const sendToTelegram = async (text) => {
    // Taklif uchun alohida environment variables
    const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN_TAKLIF;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID_TAKLIF;

    console.log("Taklif bot Token va Chat ID:", { token, chatId });

    if (!token || !chatId) {
      toast.error('⚠️ Taklif bot token yoki chat ID topilmadi!');
      console.error("Taklif bot token yoki chat ID topilmadi");
      return false;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    };

    try {
      console.log("Taklif Telegram API ga so'rov yuborilmoqda...");
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      console.log("Taklif Telegram API javobi:", data);
      
      if (response.ok && data.ok) {
        console.log("Taklif muvaffaqiyatli yuborildi!");
        return true;
      } else {
        console.error('Taklif Telegram API xatosi:', data);
        toast.error(`❌ Xatolik: ${data.description || 'Noma\'lum xatolik'}`);
        return false;
      }
    } catch (error) {
      console.error('Taklif Telegram API xatosi:', error);
      toast.error('❌ Internet aloqasi yoki server xatosi!');
      return false;
    }
  };

  const handleSubmit = async () => {
    if (name.length > 0 && des.length > 5) {
      setLoading(true);
      
      const telegramMessage = `
<b>💡 Yangi Taklif/Fikr!</b>
────────────────────
<b>👤 Ism:</b> ${name}
────────────────────
<b>💭 Taklif/Fikr:</b>
${des}
────────────────────
<b>⏰ Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
      `;

      console.log("Taklif Telegram xabari:", telegramMessage);

      const success = await sendToTelegram(telegramMessage);

      if (success) {
        toast.success("✅ Taklifingiz muvaffaqiyatli yuborildi!");
        
        // Formani tozalash
        setTimeout(() => {
          setname("");
          setdes("");
        }, 1000);
      }
      
      setLoading(false);
    } else {
      toast.error("❌ Iltimos, ismingizni va taklifingizni to'liq kiriting (taklif kamida 6 ta belgidan iborat bo'lishi kerak)");
    }
  };

  return (
    <section
      className={`main-container ${!sidebarOpen ? "sidebar-collapsed" : ""}`}
    >
      <div className="content-wrapper">
        <div>
          <main>
            <AdviseSection>
              <Wrapper>
                <Left>
                  <h1 style={{fontSize:"35px", color:"#0b63ff"}}>Taklif va Fikirlar</h1>
                  <p>
                    Saytimiz haqida o`z fikir va takliflaringizni <br />{" "}
                    qoldiring.... raxmat
                  </p>
                  <img src={AdvideImg} alt="Taklif va Fikirlar" />
                </Left>
                <Right>
                  <div className="inputs">
                    <input
                      type="text"
                      value={name}
                      placeholder="Ismingiz"
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="inputs">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      cols="40"
                      value={des}
                      placeholder="Taklif va Fikirlaringiz..."
                      onChange={(e) => setdes(e.target.value)}
                    ></textarea>
                  </div>
                  <button 
                    onClick={handleSubmit} 
                    disabled={loading}
                  >
                    {loading ? 'Yuborilmoqda...' : 'Yuborish'}
                  </button>
                </Right>
              </Wrapper>
            </AdviseSection>
          </main>
        </div>
      </div>
    </section>
  );
};

export default TaklifVaMurojatlar;

