import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import auth from '../features/authSlice';
import navValue from '../features/navValueSlice';
import code from '../features/codeSlice';
import routes from '../features/routesSlice'

export const store = configureStore({
    reducer: {auth, navValue, code, routes},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
