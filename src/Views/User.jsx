import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../Components/Account/Account"
import * as userActions from "../Redux/feactures/user"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FormEdit from "../Components/FormEdit"

function User() {
  // Si je suis pas connectée, redirection login (Token)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const token = user.token
  const [edit, setEdit] = useState(false)

  console.log(token)

  const navigate = useNavigate()

  // verification si le token est stocker dans le local ou le sessionStorage

  useEffect(() => {
    if (!token) {
      navigate("/sign-in")
    } else {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // setFirstName(data.body.firstName)
          // setLastName(data.body.lastName)
          dispatch(
            userActions.setUser({
              prenom: data.body.firstName,
              name: data.body.lastName,
              userName: data.body.userName,
            })
          )
          console.log(data)
        })
    }
  }, [])

  console.log(token)

  function handleSubmit() {
    setEdit(!edit)
  }

  return (
    <main className="main bg-dark">
      {!edit ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.prenom} {user.name} !
          </h1>
          {/* au clic sur le bouton edit , transformer le nom et prenom en input , afficher un bouton envoyer et annuler , puis gerer la logique PUT  request pour modifier le nom et prenom fetch, modifier les Store REDUX */}

          <button className="edit-button" onClick={handleSubmit}>
            Edit Name
          </button>
        </div>
      ) : (
        <FormEdit
          firstName={user.prenom}
          lasttName={user.name}
          defaultUserName={user.userName}
          submit={handleSubmit}
        />
      )}

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
