// store.js
import { configureStore } from "@reduxjs/toolkit"
import user from "./feactures/user"

// Importez ici vos reducers
// import monReducer from './monReducer';

const store = configureStore({
  reducer: {
    user: user,
  },
})

export default store
