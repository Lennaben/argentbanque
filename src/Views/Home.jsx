import React from 'react'
import icon from "../img/icon-chat.png"
import iconmonay from "../img/icon-money.png"
import iconsecurity from "../img/icon-security.png"
import "../css/Home.css"

function Home() {
  return (
    <main>
      <div classeName="hero">
        <section classeName="hero-content">
          <h2 classeName="sr-only">Promoted Content</h2>
          <p classeName="subtitle">No fees.</p>
          <p classeName="subtitle">No minimum deposit.</p>
          <p classeName="subtitle">High interest rates.</p>
          <p classeName="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section classeName="features">
        <h2 classeName="sr-only">Features</h2>
        <div classeName="feature-item">
          <img src= {icon}   alt="Chat Icon" classeName="feature-icon" />
          <h3 classeName="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div classeName="feature-item">
          <img
            src= {iconmonay}
            alt="Chat Icon"
            classeName="feature-icon"
          />
          <h3 classeName="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div classeName="feature-item">
          <img
            src={iconsecurity}
            alt="Chat Icon"
            classeName="feature-icon"
          />
          <h3 classeName="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home