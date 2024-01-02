import {createSlice} from "@reduxjs/toolkit";
import {getRoutes} from '../utils/utilsFunctions';


const routesSlice = createSlice(
    {
        name:'routes',
        initialState :{ routes: getRoutes('') },
        reducers: {
            setRoutes: (state, action) => {
                state.routes = action.payload;
            }
        }
    }
)
export const {setRoutes} = routesSlice.actions;
export default routesSlice.reducer;