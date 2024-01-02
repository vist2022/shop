import React, {SyntheticEvent, useEffect, useState} from 'react';
import {NavItem} from "../../utils/types";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {navProductsFirstActive} from "../../utils/constants";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setNavValue} from "../../features/navValueSlice";

interface Props {
    routes: NavItem[]
    subnav?: boolean
}

const NavigatorDesktop = ({routes, subnav}: Props) => {

    const value = useAppSelector(state => state.navValue)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (!subnav) {
            dispatch(setNavValue(0));
            navigate('/');
        }
    }, [subnav]);

    useEffect(() => {
        if (subnav) {
            dispatch(setNavValue(0));
            navigate(navProductsFirstActive)
        }
    }, []);


    const handleChange = (event: SyntheticEvent, newValue: number) => {
        dispatch(setNavValue(newValue));
    };


    return (
        <Box sx={{marginTop: '10vh'}}>
            <AppBar sx={{backgroundColor: 'lightgrey'}}>
                <Tabs value={value.navValue} onChange={handleChange}>
                    {routes.map((item, index) => <Tab key={index} component={Link} to={item.route}
                                                      label={item.title}/>)}
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDesktop;