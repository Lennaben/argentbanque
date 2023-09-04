import { useState } from "react"


function Form() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const [message, setMessage ] = useState("")

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      let resJson = await res.json()
      if (res.status === 200) {
        setPassword("")
        setEmail("")
        setMessage("User created successfully")
      } else {
        setMessage("Some error occured")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="sign-in-button">Sign In</button>
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
      {/* <!--  --> */}
    </form>
  )
}

export default Form
