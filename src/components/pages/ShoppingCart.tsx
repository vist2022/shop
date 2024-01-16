import React, {useMemo} from 'react';
import {useAppSelector} from "../../app/hooks";
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {Delete} from "@mui/icons-material";
import {removeShoppingProduct} from "../../firebase/ordersService";
import Typography from "@mui/material/Typography";
import {ShoppingDataType} from "../../utils/types";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ShoppingCart = () => {
    const products = useAppSelector(state => state.products.products);
    const card = useAppSelector(state => state.card.shoppingCard);
    const authUser = useAppSelector(state => state.auth.authUser);
    let tableData: ShoppingDataType[] = [];

    const columns: GridColDef[] =
        [
            {
                field: 'image', headerName: '', flex: 1, renderCell: params =>
                    <Avatar src={`${process.env.PUBLIC_URL}/images/${params.value}`}
                            sx={{width: '50%', height: '10vh'}}/>,
                align: 'center', headerAlign: 'center'
            },
            {field: 'title', headerName: 'Title', flex: 0.8},
            {field: 'unit', headerName: 'Unit', flex: 0.4},
            {field: 'cost', headerName: 'Cost (ILS)', flex: 0.3},
            {field: 'count', headerName: 'Count', type: 'number'},
            {field: 'totalPrice', headerName: 'Total price', type: 'number'},
            {
                field: 'actions', type: 'actions', getActions: params =>
                    [<GridActionsCellItem label={'remove'} icon={<Delete/>} onClick={async () => {
                        await removeShoppingProduct(authUser, params.id as string)
                    }}/>]
            }
        ]
    const total = useMemo(() => getTotalCost(), [card]);


    function getTotalCost() {
        tableData = card.map(item => {
            const index = products.findIndex(el => el.id === item.productId);
            const total = item.count * products[index].cost;
            return {totalPrice: total, ...item, ...products[index]}
        })
        console.log(tableData)
        return tableData.reduce((res, cur) => res + cur.totalPrice, 0)
    }


    return <Box>
        <Box sx={{width: '80vw', height: '60vh', margin: '0 auto'}}>
            <DataGrid columns={columns} rows={tableData} rowHeight={100}/>
        </Box>
        <Typography variant={'h5'} textAlign={"center"}>Total cost :{total}</Typography>
        <Grid textAlign={"center"}>
            <IconButton color="primary" size={"large"} disabled={total === 0} >
                <AddShoppingCartIcon fontSize="inherit" />
            </IconButton>
        </Grid>
    </Box>
};

export default ShoppingCart;