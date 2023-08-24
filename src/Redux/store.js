// store.js
import { configureStore } from "@reduxjs/toolkit"

// Importez ici vos reducers
// import monReducer from './monReducer';

const store = configureStore({
  reducer: {
    // Ajoutez vos reducers ici
    // monReducer,
  },
})

export default store
