import { Formik, Field, Form } from 'formik';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'

import Admin from '../Admin_Pannel/Admin'
import axios from 'axios';

const Sign_Up = () => {

    const [data, setdata] = useState([])
    console.log('setdata get >>>>>>', data);

    return (
        <Box sx={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Admin>

                <Box sx={{ background: '#F6F9FB', width: '380px', margin: 'auto', padding: '90px 50px' }}>
                    <Typography variant='h5' textAlign={'center'} fontWeight={'bold'}>Sign Up</Typography>

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={async (values) => {
                            // setdata([...data, values])
                            // console.log('data state >>>>>>', values);

                            axios.post(`https://interviewhub-3ro7.onrender.com/admin/signup`, values)
                                .then((res) => {
                                    console.log('Sign Up Response ===>>>', res);
                                    setdata(res.data.data)
                                })
                                .catch((err) => {
                                    console.log('Sign Up Response', err);
                                })
                        }}
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
            </Admin>
        </Box>
    )
}

export default Sign_Up
