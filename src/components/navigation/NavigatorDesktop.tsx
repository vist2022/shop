import React, {SyntheticEvent, useEffect, useState} from 'react';
import {NavItem} from "../../utils/types";

import {Link, Outlet, useNavigate} from "react-router-dom";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {navProductsFirstActive, subNavProductStart} from "../../utils/constants";

interface Props {
    routes: NavItem[]
    subnav?: boolean
}

const NavigatorDesktop = ({routes, subnav}: Props) => {
    const [value, setValue] = useState(0);
    const [goHome, setGoHome] = useState(false)

    const navigate = useNavigate();


    useEffect(() => {
        if (!subnav) {
            setValue(prevState => 0)
            navigate('/');
        }
    }, [subnav]);


    useEffect(() => {
        if (subnav) {
            setValue(prevState => 0)
            navigate(navProductsFirstActive)
        }
    }, []);


    useEffect(() => {
        if (!subnav && value === subNavProductStart) {
            setValue(prevState => 0)
        }
    }, [subnav, value]);

    //F5
    useEffect(() => {
        if (value !== subNavProductStart && !subnav) {
            setValue(prevState => 0)
            navigate('/');
        }
    }, []);


    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Box sx={{marginTop: '10vh'}}>
            <AppBar sx={{backgroundColor: 'lightgrey'}}>
                <Tabs value={value} onChange={handleChange}>
                    {routes.map((item, index) => <Tab key={index} component={Link} to={item.route}
                                                      label={item.title}/>)}
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDesktop;