import logo from "../img/argentBankLogo.png"
import Signin from "../Views/Signin"
import { getToken } from "../Views/User"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const token = getToken()
  if (token === null) {
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
          <a className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    )
  } else {
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
          <a
            className="main-nav-item"
            onClick={(e) => {
              e.preventDefault()
              sessionStorage.clear()
              localStorage.clear()
              navigate("/sign-in")
            }}
          >
            <i className="fa fa-user-circle"></i>
            Sign out
          </a>
        </div>
      </nav>
    )
  }
}

export default Header
