import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {DataGrid, GridCellEditStopReasons, GridColDef, GridEditCellProps, useGridApiRef} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import {selectIdValue} from "@reduxjs/toolkit/dist/entities/utils";

const ProductFormAdmin = () => {
    const products = useAppSelector(state => state.products.products);
    const columns : GridColDef[] =
        [
            {field:'image',headerName:'' , flex: 1, renderCell: params =>
            <Avatar src={`${process.env.PUBLIC_URL}/images/${params.value}`} sx={{width:'40%', height:'15vh'}} />,
                align:'center', headerAlign:'center'},
            {field: 'title', headerName: 'Title', flex: 0.8},
            {field:'category', headerName: 'Category', flex: 0.5},
            {field:'unit', headerName:'Unit', flex:0.4},
            {field: 'cost', headerName: 'Cost (ILS)', flex: 0.3, editable:true}
        ]

let apiRef = useGridApiRef();


    return <Box sx={{width: '80vw', height:'80vh', margin:'0 auto'}}>
        <DataGrid columns={columns} rows={products}
                  // onCellEditStop={(params, event) =>
        // {if (params.reason === GridCellEditStopReasons.cellFocusOut) {
        //     event.defaultMuiPrevented = true;
        //     alert(JSON.stringify(params))
        // }}}
        />
    </Box>
};

export default ProductFormAdmin;