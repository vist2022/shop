import React, {useEffect} from 'react';
import {useAppDispatch} from "../../app/hooks";
import LoginForm from "../forms/LoginForm";
import {login} from "../../features/authSlice";
import {LoginData} from "../../utils/types";
import {loginFirebase} from "../../firebase/authService";
import {AUTH_USER} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import {setNavValue} from "../../features/navValueSlice";
import {resetCode, setCode} from "../../features/codeSlice";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function loginFn(loginData: LoginData) {
        try {
            const email = await loginFirebase(loginData) as string;
            localStorage.setItem(AUTH_USER, email);
            dispatch(login(email));
            navigate('/');
            dispatch(setNavValue(0));
        } catch (e) {
            dispatch(setCode('Wrong credentials'))
        }
    }

    useEffect(() =>
    {
      return () => {dispatch(resetCode());}
    }, []);

    return (
        <LoginForm submitFn={loginFn}/>)
};

export default Login;