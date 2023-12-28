import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {navItemsArray, navProductsItemsArray} from "./utils/constants";
import Layout from "./components/navigation/Layout";
import Home from "./components/pages/Home";
import Customers from "./components/pages/Customers";
import Products from "./components/navigation/Products";
import Dairy from "./components/pages/Dairy";
import Bread from "./components/pages/Bread";
import Orders from "./components/pages/Orders";
import ShoppingCart from "./components/pages/ShoppingCart";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import SignUp from "./components/pages/SignUp";
import ErrorPage from "./components/pages/ErrorPage";
import NavigatorDesktop from "./components/navigation/NavigatorDesktop";

function App()
{
    return (
        <Routes>
            <Route path={navItemsArray[0].route} element={<NavigatorDesktop routes={navItemsArray}/>}>
                <Route index element={<Home/>}/>
                <Route path={navItemsArray[1].route} element={<Customers/>}/>
                <Route path={navItemsArray[2].route} element={<NavigatorDesktop routes={navProductsItemsArray}
                            subnav/>}>
                    <Route path={navProductsItemsArray[0].route} element={<Dairy/>}/>
                    <Route path={navProductsItemsArray[1].route} element={<Bread/>}/>
                    <Route path={navProductsItemsArray[2].route} element={<NavigatorDesktop routes={navItemsArray}/>}/>
                </Route>
                <Route path={navItemsArray[3].route} element={<Orders/>}/>
                <Route path={navItemsArray[4].route} element={<ShoppingCart/>}/>
                <Route path={navItemsArray[5].route} element={<Login/>}/>
                <Route path={navItemsArray[6].route} element={<Logout/>}/>
                <Route path={navItemsArray[7].route} element={<SignUp/>}/>
            </Route>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    );
}

export default App;
