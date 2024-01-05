import React from 'react';
import {useAppSelector} from "../../app/hooks";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

const ProductFormClient = () => {


    const products = useAppSelector(state => state.products.products);

    return <Grid container justifyContent={'center'} mt={15} width={'80vw'} m={'0 auto'}>
        {products.map((p, index) => <Grid key={index} xs={8} sm={5} md={3}>
            <ProductCard product={p}/>
        </Grid>)}
    </Grid>
};

export default ProductFormClient;