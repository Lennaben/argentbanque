import logo from "../img/argentBankLogo.png"
import Signin from "../Views/Signin"
// import { getToken } from "../Views/User"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import * as userActions from "../Redux/feactures/user"

function Header() {
  const token = useSelector((state) => state.user.token)
  const user = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <div className="linkflex">
            <i className="fa fa-user-circle"></i>
            <span>{user.userName}</span>
            <a
              className="main-nav-item"
              onClick={(e) => {
                e.preventDefault()
                dispatch(userActions.setLogout())
                localStorage.clear("token")
                sessionStorage.clear("token")
                navigate("/sign-in")
              }}
            >
              <i className="fa-sign-out"></i>
              <span>Sign out</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
