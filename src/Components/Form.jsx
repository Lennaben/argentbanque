import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../Redux/feactures/user"
import { useNavigate } from "react-router-dom"

// afficher le user Name dans le header, afficher le firte name last name sur la page user, mettre en place le formulaire pour changer le user name,
// et cree me store pour stocker pour les infos

function Form() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    const data = {  
      email: email,
      password: password,
      check: check,
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
          navigate("/user")
          if (check) {
            localStorage.setItem("token", res.body.token)
            sessionStorage.clear('token')
          } else {
            sessionStorage.setItem("token", res.body.token)
            localStorage.clear('token')
          }
          // la redirection a ete fait
        } else navigate("/sign-in")
        setMessage("Some error occurred")
        setError(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label className="username input" htmlFor="username">Username</label>
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
        <div className="boxId"> {error ? <p className="errorMotdepasse">ERROR MOT DE PASSE OR IDENTIFIANT</p> : ""}</div>
       
        {/* message error OK  */}
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
