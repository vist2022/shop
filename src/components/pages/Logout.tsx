import React from 'react';
import {useAppDispatch} from "../../app/hooks";
import Button from "@mui/material/Button";
import {logout} from "../../features/authSlice";
import Box from "@mui/material/Box";
import {logoutFireBase} from "../../firebase/authService";
import {AUTH_USER} from "../../utils/constants";
import {setNavValue} from "../../features/navValueSlice";
import {useNavigate} from "react-router-dom";

const Logout = () =>
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function logoutFn()
    {
        await logoutFireBase();
        localStorage.removeItem(AUTH_USER);
        dispatch(logout());
        dispatch(setNavValue(0));
        dispatch(setNavValue(0));
        navigate('/');

    }

    return (
        <Box>
            <Button onClick={logoutFn}>Confirm logout</Button>
        </Box>
    );
};

export default Logout;