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
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 200) {
        console.log(res)
        setPassword("")
        setEmail("")
        setMessage("User created successfully")

        dispatch(userActions.setToken(res.body.token))
        navigate("/user")

        if (check) {
          localStorage.setItem("token", res.body.token)
        }

        // la redirection a ete fait
      } else navigate("/sign-in")
      setMessage("Some error occurred")
      setError(true)
    })
    .catch((err) => {
      console.log(err)
    })
}

export function callAPIUserProfilUpdate(data, token, userActions, dispatch) {
  console.log(token)
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      //  si ça se passe bien , on actualiser le username dans redux avec setUsername
      return response.json() // Parse the JSON response
    })
    .then((responseData) => {
      const userNameFromResponse = responseData.body.userName
      console.log("userName from response:", userNameFromResponse)
      dispatch(userActions.setUserName(userNameFromResponse))
    })

    .catch((error) => {
      console.log("something went wrong")
    })
}

export function callAPIUserProfilGet(token, userActions, dispatch) {
  //   console.log(token)
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
