import { useNavigate } from "react-router-dom"

async function log(idUser) {
  const navigate = useNavigate;
  const requet = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: idUser,
  }).then((data) => {
    const token = data.body?.token
    const check = JSON.parse(idUser)

    if (check.check === true) {
      localStorage.setItem("token", token)
      return data
    }
    sessionStorage.setItem("token", token)
    return data
  })
  if (requet.status === 200) {
    navigate("/user")
    return requet
  } else {
    throw new Error(requet.message)
  }
}

export { log }
