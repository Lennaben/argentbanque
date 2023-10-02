import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as userActions from "../Redux/feactures/user"
import { callAPIUserProfilUpdate } from "../callAPI/callAPI"

function FormEdit({ firstName, lasttName, submit, defaultUserName }) {
  const [userName, setUserName] = useState(defaultUserName)
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  async function changeUserName(e, userName) {
    e.preventDefault()
    // on assigne une variable avec notre username à envoyer
    const data = {
      userName: userName,
    }
    // on transforme cet objet en json
    // const identifyUserName = JSON.stringify(userToSend)
    // on envoi les datas a la bdd afin de modifier l'uername
    callAPIUserProfilUpdate(data, token, userActions, dispatch)
  }

  return (
    <div className="formEditWrapper">
      <form className="EditForm">
        <h1 className="EditFormTitle">Edit User Infos</h1>
        <div className="input-wrapper">
          <label htmlFor="UserName">User name </label>
          <input
            type="text"
            id="UserName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="FirstName">First name</label>
          <input type="text" id="FirstName" placeholder={firstName} disabled />
        </div>
        <div className="input-wrapper">
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
