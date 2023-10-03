import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Account from "../Components/Account"
import * as userActions from "../Redux/feactures/user"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FormEdit from "../Components/FormEdit"

import { callAPIUserProfilGet } from "../callAPI/callAPI"

function User() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const token = user.token
  const [edit, setEdit] = useState(false)

  console.log(token)

  const navigate = useNavigate()

  

  // Si il n 'y a pas de token on redirige vers la page sign in sinon on récupère les user datas 
  useEffect(() => {
    if (!token) {
      navigate("/sign-in")
    } else {
      // Appel API
      callAPIUserProfilGet(token, userActions, dispatch)
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
          {/* au clic sur le bouton edit , transformer le nom et prenom en input ,
           afficher un bouton envoyer et annuler , 
           puis gerer la logique PUT  request pour modifier le nom et prenom fetch, modifier les Store REDUX */}

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
