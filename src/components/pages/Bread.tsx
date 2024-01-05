import React from 'react';
import {useAppSelector} from "../../app/hooks";
import ProductFormClient from "../forms/ProductFormClient";
import ProductFormAdmin from "../forms/ProductFormAdmin";

const Bread = () =>
{
    const authUser= useAppSelector(state => state.auth.authUser);

    return authUser === '' || !authUser.includes('admin')? <ProductFormClient/> : <ProductFormAdmin/>
};

export default Bread;