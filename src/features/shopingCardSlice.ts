import {createSlice} from "@reduxjs/toolkit";
import {ProductShoppingCardType} from "../utils/types";
interface State
{
    shoppingCard : ProductShoppingCardType[]
}

const shoppingCartSlice  = createSlice(
    {
        name:'shoppingCard',
        initialState: {shoppingCard:[]} as State,
        reducers:
            {
                setShoppingCart : (state, action)=> {state.shoppingCard = action.payload},
                resetShoppingCart: (state)=> {state.shoppingCard = []}
            }

    }
)

export const {setShoppingCart, resetShoppingCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;