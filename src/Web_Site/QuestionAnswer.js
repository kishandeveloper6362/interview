import { Box, Container, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import axios from 'axios';
import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

const QuestionAnswer = () => {

    const pathsend = window.location.pathname
    console.log(window.location.pathname);

    const splittesid = pathsend.split('/')
    const getids = splittesid.pop()
    console.log(getids);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        // Your styling for table cells here
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        // Your styling for table rows here
    }));

    const [subcategories, setSubcategories] = React.useState([])
    const GetToken = localStorage.getItem('token')

    useEffect(() => {
        axios.get('http://localhost:5500/questions/', {
            headers: {
                Authorization: GetToken
            }
        })
            .then((res) => {
                console.log('Question Get Api Resonse', res);
                setSubcategories(res.data.data.filter(item => item.subcatagoryID._id == getids))
            })
            .catch((err) => {
                console.log('Question Get Api Error', err);
            })
    }, [])
    return (
        <Box>

            <Header />

            <Box className='sub_category'>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='' sx={{ color: 'white', letterSpacing: '1px', fontSize: '30px' }}>Question _ Answer</Typography>
                    </Box>

                    <Box role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to="/" underline="hover" color="inherit" className="breadcrumb">
                                Home
                            </Link>
                            <Link to="/subcategories" underline="hover" color="inherit" className="breadcrumb">
                                Sub_category
                            </Link>
                            <Typography underline="hover" color="inherit" className="breadcrumb">
                                Questionanswer
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Question</StyledTableCell>
                                <StyledTableCell align="right">Answer</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subcategories.map((element, index) => (
                                <StyledTableRow key={element.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {element.questions}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{element.answer}</StyledTableCell>
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

export default QuestionAnswer
