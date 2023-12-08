import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    startDate: '',
    endDate: '',
};


const dateSlice = createSlice({
    name: 'dates',
    initialState,
    reducers: {
        setDate: (state, action) => {
            const [startDate, endDate] = action.payload
            state.startDate = startDate
            state.endDate = endDate
        },
        resetDate: (state) => {
            state.startDate = ''
            state.endDate = ''
        }
    },
})

export const { setDate, resetDate } = dateSlice.actions;
export default dateSlice.reducer;
