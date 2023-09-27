import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../Redux/feactures/user"

function FormEdit({ firstName, lasttName, submit, defaultUserName }) {
  const [userName, setUserName] = useState(defaultUserName)
  const dispatch = useDispatch()
  const token = recupToken()

  function recupToken() {
    if (
      sessionStorage.getItem("token") !== null ||
      sessionStorage.getItem("token") !== undefined
    ) {
      return sessionStorage.getItem("token")
    }
    return localStorage.getItem("token")
  }

  async function changeUserName(e, userName) {
    e.preventDefault()
    // on assigne une variable avec notre username à envoyer
    const userToSend = {
      userName: userName,
    }
    // on transforme cet objet en json
    const identifyUserName = JSON.stringify(userToSend)
    // on envoi les datas a la bdd afin de modifier l'uername
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: identifyUserName,
    })
    //  si ça se passe bien , on actualiser le username dans redux avec setUsername
    if (response.status === 200) {
      const responseData = await response.json() // Parse the JSON response
      const userNameFromResponse = responseData.body.userName
      console.log("userName from response:", userNameFromResponse)
      dispatch(userActions.setUserName(userNameFromResponse))
    } else {
      console.log("something went wrong")
    }
  }

  return (
    <div className="formEditWrapper">
      <form className="EditForm">
        <h1 className="EditFormTitle">Edit User Infos</h1>
        <div className=".input-wrapper">
          <label htmlFor="UserName">User name </label>
          <input
            type="text"
            id="UserName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>
        <div className=".input-wrapper">
          <label htmlFor="FirstName">First name</label>
          <input type="text" id="FirstName" placeholder={firstName} disabled />
        </div>
        <div className=".input-wrapper">
          <label htmlFor="LastName">Last name</label>
          <input type="text" id="LastName" placeholder={lasttName} disabled />
        </div>
        <div className="EditButtonWrapper">
          <button
            className="edit-button "
            type="submit"
            onClick={(e) => {
              changeUserName(e, userName)
            }}
          >
            save
          </button>
          <button
            className="edit-button "
            onClick={(e) => {
              e.preventDefault()
              submit()
            }}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormEdit
