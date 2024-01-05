import React, {useState} from 'react';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ProductType} from "../../utils/types";
import {ILS} from "../../utils/constants";


interface Props {
    product: ProductType
}

const ProductCard = ({product}: Props) => {

    const [countToOrder, setCountToOrder] = useState(0);


    return (
        <Card sx={{margin: '15px'}}>
            <CardMedia image={`${process.env.PUBLIC_URL}/images/${product.image}`} sx={{height: '150px'}}/>
            <CardContent sx={{backgroundColor: 'aliceblue', height: '100px',}}>
                <Typography variant={'body1'} textAlign={'center'} gutterBottom height={'60%'}>
                    {product.title.replaceAll('-', ' ')}
                </Typography>
                <Typography textAlign={'center'} sx={{color: 'lightgrey'}}>
                    {product.unit}
                </Typography>
                <Typography textAlign={'center'} sx={{color: 'lightgrey'}}>
                    {`${product.cost}`}<span color={'red'}>{`${ILS}`}</span>
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
                <Button size={"small"} sx={{fontSize: 30}}
                        onClick={() => setCountToOrder(prevState => ++prevState)}>+</Button>
                <Typography>{countToOrder}</Typography>
                <Button size={"small"} sx={{fontSize: 30}}
                        onClick={() => setCountToOrder(prevState => prevState ? --prevState : prevState)}>-</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;