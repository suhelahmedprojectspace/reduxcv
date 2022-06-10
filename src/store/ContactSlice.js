import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [];
const contactSlice = createSlice({
    name: 'contanct',
    initialState,
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (name, secondname, email, address, phone, pincode, city) => {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        name,
                        secondname,
                        address,
                        email,
                        pincode,
                        city,
                        phone,

                    }
                }
            }
        }
    }
})

export const { add } = contactSlice.actions
export default contactSlice.reducer