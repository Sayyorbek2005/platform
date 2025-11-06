import React, { use, useState } from 'react'
import { AdviseSection, Left,Right, Wrapper } from './taklifVamirojatlar.style'
import AdvideImg from "./assets/photo_2025-10-28_18-56-50.jpg"
import {toast} from "react-toastify"

const TaklifVaMurojatlar = () => {

  const [name,setname]=useState("")
  const [des,setdes]=useState("")

  const handleLogin = () => {
    if(name.length>0 && des.length>5){
      toast.success("✅ Ma'lumot yuborildi!")
    }else{
      toast.error("❌ Malumotlaringizni to'liq kirkizing")
    }
  };

  return (
    <div>
      <main>
        <AdviseSection>
          <Wrapper>
            <Left>
              <h1>Taklif va Fikirlar</h1>
              <p>Saytimiz haqida  o`z fikir va takliflaringizni <br /> qoldiring....  raxmat</p>
              <img src={AdvideImg} alt=""/>
            </Left>
            <Right>
              <div className="inputs">
              <input type="text" placeholder='' onChange={(e)=>setname(e.target.value)}/>
               {name.length ===0 && <p>Ismingiz</p>}
              </div>
              <div className="inputs">
               <textarea id="message" name="message" rows="5" cols="40" placeholder='' onChange={(e)=>setdes(e.target.value)}></textarea>
               {des.length ===0 && <p>Taklif va Fikirlar ...</p>}
               </div>
               <button onClick={handleLogin}>Yuborish</button>
            </Right>
          </Wrapper>
        </AdviseSection>
      </main>
    </div>
  )
}

export default TaklifVaMurojatlar