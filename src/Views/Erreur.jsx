import React from "react"
import Form from "../Components/Form"
import { useSelector, useDispatch } from "react-redux"
import * as userActions from "../Redux/feactures/user"


const Erreur = () => {
  return (
    <main className="bcgPage">
      <div className=" txt-container">
        <h2 className="txt404">404</h2>
        <div className="text">
          {" "}
          Oups ! La page que vous demandez n'existe pas.{" "}
        </div>
        <h4 className="text-2">Retourner sur la page d'acceuil</h4>
      </div>
    </main>
  )
}

export default Erreur
