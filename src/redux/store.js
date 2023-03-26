import { configureStore } from '@reduxjs/toolkit'
import ValueSlice from './slice/ValueSlice'

const store = configureStore({
  reducer: {
    value : ValueSlice
  }
})

export default store