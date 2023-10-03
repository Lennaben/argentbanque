import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as userActions from "../Redux/feactures/user"
import { useNavigate } from "react-router-dom"
import { callAPILogin } from "../callAPI/callAPI"

// Le formulaire permet à l'utilisateur de se connecter
// Une fois connecté les datas de l'utilisateur ainsi que le token seront disponible dans le store redux  

function Form() {
  // fonction de Navigation
  const navigate = useNavigate()
  // fonction pour mettre a jour le store redux
  const dispatch = useDispatch()

  // gestion des states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  // Au chargement de la page on vérifi si un token est déjà disponible 
  // si c'est le cas , on sauvegarde le token dans le store 
  // puis on redirige l'utilisateur vers la page /user
  useEffect(() => {
    const localToken = localStorage.getItem("token")
    if (localToken) {
      console.log("token")
      dispatch(userActions.setToken(localToken))
      navigate("/user")
    }
  }, [])

  // Gestio de l'envoi du formulaire
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)

    // on récupère les datas provenants des champs du formulaire ( via useState )
    const data = {
      email: email,
      password: password,
      check: check,
    }

    // On fetch les datas via notre fonction callApiPlugin 
    callAPILogin(
      data,
      setEmail,
      setPassword,
      setMessage,
      setError,
      dispatch,
      navigate,
      userActions,
      check
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label className="username input" htmlFor="username">
          Username
        </label>
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
        <div className="boxId">
          {" "}
          {error ? (
            <p className="errorMotdepasse">ERROR MOT DE PASSE OR IDENTIFIANT</p>
          ) : (
            ""
          )}
        </div>

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
