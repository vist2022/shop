import React from 'react';
import {useAppSelector} from "../../app/hooks";
import Grid from "@mui/material/Grid";
// import IconButton from '@mui/material/IconButton';
// import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {ProductType} from '../../utils/types';
// import {Add, Remove, AddShoppingCart} from '@mui/icons-material';
// import {useNavigate} from "react-router-dom";
// import {addShoppingProductUnit, removeShoppingProductUnit} from "../../firebase/ordersService";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from "./ProductCard";

const ProductFormClient = () => {
    const products: ProductType[] = useAppSelector(state => state.products.products);
    return <Grid container spacing={6} justifyContent="center" sx={{width: '90%', margin: '0 auto'}}>
        {products.map((p, index) =>
            <ProductCard product={p} index={index}/>)}
    </Grid>
};
export default ProductFormClient;

// import React from 'react';
// import {useAppSelector} from "../../app/hooks";
// import Grid from "@mui/material/Grid";
// import ProductCard from "./ProductCard";
//
// const ProductFormClient = () => {
//
//
//     const products = useAppSelector(state => state.products.products);
//
//     return <Grid container justifyContent={'center'} mt={15} width={'80vw'} m={'0 auto'}>
//         {products.map((p, index) => <Grid key={index} xs={8} sm={5} md={3}>
//             <ProductCard product={p}/>
//         </Grid>)}
//     </Grid>
// };
//
// export default ProductFormClient;