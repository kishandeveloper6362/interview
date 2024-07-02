import { Formik, Field, Form } from 'formik';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from '../Admin_Page/Dashboard'
const Login = () => {


    const [logindata, setlogindata] = useState([])
    const [logedIn, setLogedIn] = React.useState(false)


    const submithandle = (values, action) => {
        axios.post(`http://localhost:5500/admin/login`, values)
            .then((res) => {
                console.log('Admin Login Api Response ===>>>', res);
                localStorage.setItem('token', res.data.token)
                console.log('token ====>>>> ', res.data.token);
                setlogindata(res.data.data)
                setLogedIn(true)
                action.resetForm()
            })

            .catch((err) => {
                console.log('Admin Login Api Error', err);
            })
    }
    if (logedIn) {
        return <Redirect to="/dashboard" />
    }
    return (
        <Box sx={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {/* <Admin> */}

            <Box sx={{ background: '#F6F9FB', width: '380px', margin: 'auto', padding: '90px 50px' }}>
                <Typography variant='h5' textAlign={'center'} fontWeight={'bold'}>Login ?</Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={submithandle}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <Form sx={{ margin: 'auto' }}>
                            <Field id="email" name="email" placeholder="Email" type="email" />
                            <br />
                            <br />
                            <Field id="password" name="password" placeholder="Password" />
                            <br />
                            <br />
                            <br />
                            <Box sx={{ textAlign: 'center' }}>
                                <button type="submit" id='button'>Submit</button>
                            </Box>
                        </Form>
                    </Box>
                </Formik>
            </Box>

            {/* </Admin> */}
        </Box>
    )
}

export default Login
