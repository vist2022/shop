import React, {useMemo, useState} from 'react';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ProductType} from "../../utils/types";
import Grid from "@mui/material/Grid";
import {addShoppingProductUnit, removeShoppingProductUnit} from "../../firebase/ordersService";
import {Add, Remove} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useNavigate} from "react-router-dom";


interface Props {
    product: ProductType
    index:number
}

const ProductCard = ({product, index}: Props) => {

    const products: ProductType[] = useAppSelector(state => state.products.products);
    const authUser = useAppSelector(state => state.auth.authUser);
    const shoppingCard = useAppSelector(state => state.card.shoppingCard);
    const navigate = useNavigate();
    function getCounts(): number[] {
        return products.map(p => getCountProduct(p))
    }

    function getCountProduct(product: ProductType) {
        const productFromCard = shoppingCard.find(s => s.productId === product.id);
        return productFromCard ? productFromCard.count : 0
    }
    const count = useMemo(() => getCounts(), [products, shoppingCard]);


    return (
        <Grid item xs={8} sm={5} md={3} key={index}>
            <Card>
                <CardMedia sx={{height: 140}} image={`${process.env.PUBLIC_URL}/images/${product.image}`}/>
                <CardContent sx={{textAlign: 'center', backgroundColor: 'aliceblue', minHeight:'120px'}}>
                    <Typography gutterBottom sx={{fontSize: '1.3em'}}>
                        {product.title.replaceAll('-',' ')}
                    </Typography>
                    <Typography color='text.secondary' sx={{fontSize: '1.1em'}}>
                        {product.unit}
                    </Typography>
                    <Typography color='text.secondary' sx={{fontSize: '1.1em'}}>
                        {product.cost} <img src={`${process.env.PUBLIC_URL}/images/israeli-shekel-icon.svg`} width='6%'/>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container spacing={0} justifyContent="center">
                        <Grid item xs={3}>
                            <Button size="large" onClick={async () => {
                                if (authUser == '')
                                    navigate('/login')
                                else await addShoppingProductUnit(authUser, product.id!)
                            }}>
                                <Add/>
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{
                                fontSize: '1.2em',
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>{count[index]}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button size="large"
                                    onClick={async () => {await removeShoppingProductUnit(authUser, product.id!)
                                    }} disabled={count[index] === 0}>
                                <Remove/>
                            </Button>
                        </Grid>
                    </Grid>

                </CardActions>
                {/*<Grid textAlign={"center"}>*/}
                {/*    <IconButton color="primary" size={"large"} disabled={count[index] === 0} >*/}
                {/*        <AddShoppingCartIcon fontSize="inherit" />*/}
                {/*    </IconButton>*/}
                {/*</Grid>*/}
            </Card>
        </Grid>)
};

export default ProductCard;
// <Card sx={{margin: '15px'}}>
//     <CardMedia image={`${process.env.PUBLIC_URL}/images/${product.image}`} sx={{height: '150px'}}/>
//     <CardContent sx={{backgroundColor: 'aliceblue', height: '100px',}}>
//         <Typography variant={'body1'} textAlign={'center'} gutterBottom height={'60%'}>
//             {product.title.replaceAll('-', ' ')}
//         </Typography>
//         <Typography textAlign={'center'} sx={{color: 'lightgrey'}}>
//             {product.unit}
//         </Typography>
//         <Typography textAlign={'center'} sx={{color: 'lightgrey'}}>
//             {`${product.cost}`}<span color={'red'}>{`${ILS}`}</span>
//         </Typography>
//     </CardContent>
//     <CardActions sx={{justifyContent: 'space-evenly'}}>
//         <Button size={"small"} sx={{fontSize: 30}}
//                 onClick={() => setCountToOrder(prevState => ++prevState)}>+</Button>
//         <Typography>{countToOrder}</Typography>
//         <Button size={"small"} sx={{fontSize: 30}}
//                 onClick={() => setCountToOrder(prevState => prevState ? --prevState : prevState)}>-</Button>
//     </CardActions>
// </Card>