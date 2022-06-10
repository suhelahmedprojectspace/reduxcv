import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './ContactSlice'
import WorkReducer from './WorkSlice'


export const store = configureStore({
    reducer: {
        contact: contactReducer,
        work: WorkReducer,


    },
})


