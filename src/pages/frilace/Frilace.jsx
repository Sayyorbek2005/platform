import React from 'react'
import './frilace.styles.js'
import { FrilanceSection, Wrapper } from './frilace.styles.js'
import lock from './assets/lock.png'

const Frilace = () => {
  return (
    <FrilanceSection>
      <Wrapper>
        <img src={lock} alt="" />
        <h2>Freelance hozircha yopiq</h2>
      </Wrapper>
    </FrilanceSection>
  )
}

export default Frilace
