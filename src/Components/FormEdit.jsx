import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function FormEdit({ firstName, lasttName, submit, defaultUserName }) {
  const [userName, setUserName] = useState(defaultUserName)
  const dispatch = useDispatch()

  function changeUserName(e) {   
    dispatch(changeUserName(userName))
    submit();
  }

  return (
    <div className="formEditWrapper">
      <form
        className="EditForm"
        onSubmit={(e) => {
          changeUserName(e)
        }}
      >
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
          <button className="edit-button " type="submit">
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
