import logo from "../img/argentBankLogo.png"
import Signin from "../Views/Signin"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as userActions from "../Redux/feactures/user"

function Header() {
  const token = useSelector((state) => state.user.token)
  const user = useSelector((state) => state.user)

  console.log(token)

  const navigate = useNavigate()
  const dispatch = useDispatch()

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
