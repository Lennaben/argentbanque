import { createSlice } from "@reduxjs/toolkit"

const initialState = { token: null }

const userSlice = createSlice({
  name: "user", // Nom de la tranche
  initialState: initialState, // État initial
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
  },
})

// on extrait les actions et le reducer
const { actions, reducer } = userSlice
// on export chaque action individuellement
export const { setToken } = actions
// on export le reducer comme default export
export default reducer
