import { configureStore } from '@reduxjs/toolkit'

<<<<<<< HEAD
export const store = configureStore({
=======
const store = configureStore({
>>>>>>> beaeb3826cdab0f10dee96f0aa5a00f884a8cdb5
  reducer: {
    // structure: posts: postsReducer,
    
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch