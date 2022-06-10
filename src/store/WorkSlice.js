import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [];
const WorkSlice = createSlice({
    name: 'contanct',
    initialState,
    reducers: {
        addwork: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (job, company, jobsummary, start, end) => {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        job,
                        company,
                        jobsummary,
                        start,
                        end,
                    }
                }
            }
        }
    }
})

export const { addwork } = WorkSlice.actions
export default WorkSlice.reducer