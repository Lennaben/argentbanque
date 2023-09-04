import React from "react"
import icon from "../img/icon-chat.png"
import iconmonay from "../img/icon-money.png"
import iconsecurity from "../img/icon-security.png"
import Hero from "../Components/Hero"
import Features from "../Components/Features"

function Home() {
  return (
    <main>
      <Hero> </Hero>
     <section className="features">
      <Features
        title="You are our #1 priority"
        content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      >
        {<img src={icon} alt="Chat Icon" className="feature-icon" />}
      </Features>
      <Features
        title="More savings means higher rates"
        content="The more you save with us, the higher your interest rate will be!"
      >
        {<img src={iconmonay} alt=" iconmonay" className="feature-icon" />}
      </Features>
      <Features
        title="Security you can trust"
        content=" We use top of the line encryption to make sure your data and money
            is always safe."
      >
        {<img src={iconsecurity} alt="iconsecurity" className="feature-icon" />}
      </Features>
      </section>
    </main>
    
  )
}

export default Home
