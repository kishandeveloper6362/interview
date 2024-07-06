import { Box, Container, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Header from './Header'
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Footer from './Footer'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Loader from '../Web_Site/Loader'

const Sub_category = () => {
    let pathget = window.location.pathname
    // console.log(window.location.pathname);
    let splitted = pathget.split('/')
    console.log('split data ==>>', splitted);
    // let getid = splitted[splitted.length-1]  convered to array and under lenght mathod -1 to gaet last element
    let getid = splitted.pop() //this is directly converded array to split mathod and pop mathod get the last element in this splitted array
    console.log('get id ==>> ', getid);

    const [subcategorysdata, setSubcategorydata] = React.useState([])
    let usetokens = localStorage.getItem("token")

    const subcategoires = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
            headers: {
                Authorization: usetokens
            }
        })
            .then((res) => {
                console.log('Subcategory Api Response  ==>>', res.data);
                // console.log('categoryId Api Response  ==>>', res.data.data[0].catagoryID._id);
                setSubcategorydata(res.data.data.filter(item => item.catagoryID._id == getid)) //item => item.catagoryID._id == getid
                // console.log('categoryID ==>> ',catagoryID);
            })
            .catch((err) => {
                console.log('Subcategory Api Error  ==>>', err);
            })
    }

    useEffect(() => {
        subcategoires()
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    })
    return (
        <Box>
            {loader && <Loader />}
            <Header />
            <Box className='sub_category'>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='' sx={{ color: 'white', letterSpacing: '1px', fontSize: '30px' }}>Sub_Categories</Typography>
                    </Box>

                    <Box role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to="/" underline="hover" color="inherit" className="breadcrumb">
                                Home
                            </Link>
                            <Typography underline="hover" color="inherit" className="breadcrumb">
                                Sub_category
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ paddingTop: '100px' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead sx={{ background: '!#05396B' }}>
                            <TableRow>
                                <StyledTableCell sx={{ fontSize: '20px' }}>Choice Any Sub_Catagories</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subcategorysdata.map((el, index) => (
                                <StyledTableRow key={el.subCatagoryname}>
                                    <Link to={"/questionanswer/" + el._id} id="subcategory_link" >
                                        {el.subCatagoryname}
                                    </Link>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />

        </Box>
    )
}

export default Sub_category