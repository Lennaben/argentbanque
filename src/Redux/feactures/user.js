import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // si un token est present dans le ls alros il sera attribué par défaut 
  token: localStorage.getItem('token') ? localStorage.getItem('token') :  null,
  name: null,
  prenom: null,
  userName: null,
}

console.log(initialState.name)

const userSlice = createSlice({
  name: "user", // Nom du rayon
  initialState: initialState, // État initial
  reducers: {
    // permet de mettre a jour le state token 
    setToken: (state, action) => {
      state.token = action.payload
    },
    // permet de mettre a jour le state user 
    setUser: (state, action) => {
      state.name = action.payload.name
      state.prenom = action.payload.prenom
      state.userName = action.payload.userName
    },
    // permet de mettre a jour le state name 
    setName: (state, action) => {
      state.name = action.payload
    },
    // permet de mettre a jour le state prénom 
    setPrenom: (state, action) => {
      state.prenom = action.payload
    },
    // permet de mettre a jour le state username 
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    // permet de vider les state dans le cas d'une déconnexion 
    setLogout: (state, action) => {
      state.token = null
      state.name = null
      state.prenom = null
      state.userName = null
    },
  },
})

// on extrait les actions et le reducer
const { actions, reducer } = userSlice
// on export chaque action individuellement
export const { setToken, setName, setPrenom, setUser, setLogout, setUserName } =
  actions
// on export le reducer par défaut
export default reducer
