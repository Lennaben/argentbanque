import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../Redux/feactures/user"

function Form() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const [message, setMessage] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    const data = {
      email: email,
      password: password,
    }

    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          dispatch(userActions.setToken(res.body.token))
          setPassword("")
          setEmail("")
          setMessage("User created successfully")
          //redirection la pager USER
        } else {
          setMessage("Some error occurred")
        }
      })
      .catch((err) => {
        console.log(err)
      })
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
