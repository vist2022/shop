import React, {useEffect} from 'react';
import RegistrationForm from "../forms/RegistrationForm";
import {useAppDispatch} from "../../app/hooks";
import {LoginData} from "../../utils/types";
import {registrationFirebase} from "../../firebase/authService";
import {AUTH_USER} from "../../utils/constants";
import {login} from "../../features/authSlice";
import {useNavigate} from "react-router-dom";
import {setNavValue} from "../../features/navValueSlice";
import {resetCode, setCode} from "../../features/codeSlice";

const SignUp = () =>
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function registrationFn(loginData:LoginData)
    {
        try {
            const email =await registrationFirebase(loginData) as string;
            localStorage.setItem(AUTH_USER, email);
            dispatch(login(email));
            navigate('/');
            dispatch(setNavValue(0));
        }catch (e)
        {
            dispatch(setCode('Error, try again'));
        }
    }

    useEffect(() =>
    {
        return () => {dispatch(resetCode());}
    }, []);


    return (
        <RegistrationForm submitFn={registrationFn}/>
    );
};

export default SignUp;