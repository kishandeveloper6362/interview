import { Box, Container, Grid, Typography } from '@mui/material'
import { Formik, Field, Form } from 'formik';
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SiInternetexplorer } from "react-icons/si";
import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {

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
            {/* 
            <Box id="contact_img">

            </Box> */}

            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74843586303!2d72.41493313916389!3d23.020474097604538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717837034851!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>

            <ScrollAnimation animateIn="fadeIn">
                <Box>
                    <Container maxWidth="md" sx={{ marginTop: "80px" }}>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={4} sm={6} lg={8}>
                                <Typography variant="h4">Contact</Typography>
                                <Box sx={{ marginTop: '15px' }}>
                                    <Formik
                                        initialValues={{
                                            firstName: '',
                                            lastName: '',
                                            email: '',
                                            subject: '',
                                            massege: ''
                                        }}
                                        onSubmit={async (values, action) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            alert(JSON.stringify(values, null, 2));
                                            alert("Succesfully Enter Your Details, Thank You")
                                            action.resetForm()
                                        }}
                                    >
                                        <Form>
                                            <Field id="FirstName" name="firstName" placeholder="FirstName" />

                                            <Field id="LastName" name="lastName" placeholder="LastName" />

                                            <Field id="Subject" name="subject" placeholder="Subject" />

                                            <Field
                                                id="Email"
                                                name="email"
                                                placeholder="Email Address"
                                                type="email"
                                            />

                                            <textarea id='Massege' name="massege" type="massage" />
                                            <Box>
                                                <button id='submit_button' type="submit">Submit</button>
                                            </Box>
                                        </Form>
                                    </Formik>
                                </Box>
                            </Grid>

                            <Grid xs={12} md={2} sm={2} lg={4}>
                                <Box id="contact_info">
                                    <Typography variant="h4" sx={{ marginBottom: '15px' }}>Contact Info</Typography>
                                    <a href=''><IoLocationSharp id='icon_color' />16 Adam,  Ave, Phoenix, USA </a>
                                    <br />
                                    <a href=''><MdMarkEmailRead id='icon_color' />support@starford.com </a>
                                    <br />

                                    <a href=''><FaPhone id='icon_color' />880-569-6921</a>
                                    <br />

                                    <a href=''><SiInternetexplorer id='icon_color' /> www.starford.com </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ScrollAnimation>
            <Footer />
        </Box>
    )
}

export default Contact
