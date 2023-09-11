import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../Components/Account/Account"
import * as userActions from "../Redux/feactures/user"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export function getToken() {
  const sessionToken = sessionStorage.getItem("token")
  const localToken = localStorage.getItem("token")
  if (sessionToken !== null) {
    return sessionToken
  }
  return localToken
}
function User() {
  // Si je suis pas connectée, redirection login (Token)
  const dispatch = useDispatch()
  const token = getToken()
  console.log(token)

  const navigate = useNavigate()

  // verification si le token est stocker dans le local ou le sessionStorage

  useEffect(() => {
    if (token === null || token === undefined) {
      navigate("/sign-in")
    }
  })

  //UseEffect pour aller chercher le nom et le premon

  console.log(token)

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <Account
        title=">Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Available Balance"
      />
    </main>
  )
}
export default User
