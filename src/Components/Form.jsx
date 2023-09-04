import { useState } from "react"
import {log} from "../Login/log.jsx"

function Form() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const id = {
    email: email,
    password: password,
    check: check,
  }

  const idUser = JSON.stringify(id);
   async function handleSubmit(e){
    e.preventDefault();
    await log(idUser); 
  }
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          onChange={() => setCheck(!check)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
      {/* <!--  --> */}
    </form>
  )
}

export default Form
