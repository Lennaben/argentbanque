// permet de se connecter
export function callAPILogin(
  data,
  setEmail,
  setPassword,
  setMessage,
  setError,
  dispatch,
  navigate,
  userActions,
  check
) {
  // on fait une requête post qui contient les identifiants (body) vers d'adresse de l'api
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // la réponse de l'api contient ou peut contenir : des datas, un token , un status de succès ou d'echec ....
    .then((res) => res.json())
    .then((res) => {
      // si la requête s'est bien passée on reçoit un status 200
      if (res.status === 200) {
        console.log(res)
        // on vide nos states ( clear inputs )
        setEmail("")
        setPassword("")
        setMessage("User created successfully")
        // on envoi le token vers le store redux pour qu'il soit disponible dans toute notre application
        dispatch(userActions.setToken(res.body.token))
        // on redirige vers la page /user
        if (check) {
          // on enregistre le token dans le local storage afin de maintenir la connexion même une fois la fenêtre fermée
          localStorage.setItem("token", res.body.token)
        }
        navigate("/user")
      } else navigate("/sign-in")
      setMessage("Some error occurred")
      setError(true)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Permet de modifier le nom d'utilisateur
export function callAPIUserProfilUpdate(data, token, userActions, dispatch) {
  console.log(token)
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // requête protégée donc on lui passe le token pour justifier la légitimité de l'action
      Authorization: `Bearer ${token}`,
    },
    // on lui passe les datas ( username )
    body: JSON.stringify(data),
  })
  .then((response) => {
      return response.json() // Parse the JSON response
    })
    .then((responseData) => {
      //  si ça se passe bien , on récupère le nouveau username qui provient de la bdd actualisée
      const userNameFromResponse = responseData.body.userName
      console.log("userName from response:", userNameFromResponse)
      // puis on actualise notre store avec le nouveau username
      dispatch(userActions.setUserName(userNameFromResponse))
    })

    .catch((error) => {
      console.log("something went wrong")
    })
}

// permet de récupérer les datas profile de l'utilisateur
export function callAPIUserProfilGet(token, userActions, dispatch) {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // requête protégée donc on lui passe le token pour justifier la légitimité de l'action
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // envoi vers le store les datas contenues dans reponse de l'api 
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
