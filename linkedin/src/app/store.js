import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/userSlice'

const store = configureStore({
  reducer: {
    user: counterReducer
  }
})

export default store;