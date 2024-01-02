import {createSlice} from "@reduxjs/toolkit";

const navValueSlice = createSlice(
    {
        name: 'navValue',
        initialState: {navValue: 0,},
        reducers:
            {
                setNavValue: (state, action) => {
                    state.navValue = action.payload
                }
            }
    }
)

export const {setNavValue} = navValueSlice.actions;
export default navValueSlice.reducer;