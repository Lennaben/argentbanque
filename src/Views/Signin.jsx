import React from "react"
import "../css/Signin.css"
import Form from "../Components/Form"

function Signin() {
  return (
    <div className="sign-in">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </div>
  )
}

export default Signin
