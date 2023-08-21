import React from "react"
import argentBankLogo from "../img/argentBankLogo.png"
import {Link} from "react-router-dom"

function Nav() {
  return (
    <nav classNamName="main-nav">
      <a classNamName="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link class="main-nav-item" to="/sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Nav
