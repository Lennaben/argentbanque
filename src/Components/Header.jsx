import logo from "../img/argentBankLogo.png"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as userActions from "../Redux/feactures/user"
import { callAPIUserProfilGet } from "../callAPI/callAPI"
import { useEffect } from "react"

function Header() {
  // récupération de datas dans le store redux
  const token =useSelector((state) => state.user.token)
  const user = useSelector((state) => state.user)

  console.log(token)

  // fonction de Navigation
  const navigate = useNavigate()
  // fonction pour mettre a jour le store redux
  const dispatch = useDispatch()

    useEffect(() => {
      if (!token) {
        return
      } else {
        // Appel API
        callAPIUserProfilGet(token, userActions, dispatch)
      }
    }, [])

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {/* si l'user n'est pas auth , alors on affiche SignIn sinon on affiche son nom d'user */}
        {!token ? (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <div className="linkflex">
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              <span>{user.userName}</span>
            </Link>
            {/* si on clique sur Sign Out on vide le store de nos datas user et du token */}
            {/* puis on est redirigé vers la page home */}
            <a
              className="main-nav-item"
              onClick={(e) => {
                e.preventDefault()
                dispatch(userActions.setLogout())
                localStorage.clear()
                navigate("/")
              }}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span>Sign out</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
