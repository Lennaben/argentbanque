import { createSlice } from "@reduxjs/toolkit"

const initialState = { token: null, name: null, prenom: null }

console.log(initialState.name)

const userSlice = createSlice({
  name: "user", // Nom de la tranche
  initialState: initialState, // État initial
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.name = action.payload.name
      state.prenom = action.payload.prenom
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setPrenom: (state, action) => {
      state.prenom = action.payload
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
  },
})

// on extrait les actions et le reducer
const { actions, reducer } = userSlice
// on export chaque action individuellement
export const { setToken, setName, setPrenom, setUser } = actions
// on export le reducer comme default export
export default reducer
