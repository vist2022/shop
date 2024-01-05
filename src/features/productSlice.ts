import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../utils/types";

interface State
{
products:ProductType[]
}

const productSlice = createSlice(
    {
        name:'products',
        initialState:{products:[]} as State,
        reducers:
            {
                setProducts:(state, action)=>
                {
                    state.products = action.payload
                }
            }
    }
)

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;