import { Box, Container, Typography, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinearProgress from '@mui/material/LinearProgress';
import abimg1 from '../Images/aboutpro1.jpg'
import abimg2 from '../Images/aboutpro2.jpg'
import abimg3 from '../Images/aboutpro3.avif'
import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

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

            <Box className="About_page"></Box>
            <ScrollAnimation animateIn="fadeIn">
                <Box>
                    <Container maxWidth='lg' sx={{ marginTop: '60px' }}>
                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <img src="https://plus.unsplash.com/premium_photo-1683120887619-8e6eca48afcb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={'100%'} height={'340px'} className='story_image' />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Box className='padd'>
                                    <Typography variant='h4' sx={{ fontWeight: '800', color: '#193566' }}>The Story OF StarFord</Typography>
                                    <Box sx={{ padding: '15px 0px' }}>
                                        <StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} />
                                    </Box>
                                    <Typography>
                                        Phonix Was the  world's firstmodern industial city, The history of the StarFord is entwined with the history of ourcity and region.
                                        <br />
                                        <br />
                                        StarFord, in it parent from, was created in 2004 by the amalgamaton of the victoria University and the University of institute of science and technology. after 100 years of working closely together both institutes agreed to form single university
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
                    {/* <Grid container> */}
                    {/* <Grid xs={12} sm={8} md={10} lg={12}> */}
                    <Box sx={{ textAlign: 'center', padding: { sm: '0px 30px', md: '0px 60px', lg: '0px 260px' } }}>
                        <Typography variant='h4'>Our Proffesors</Typography>
                        <Box sx={{ margin: '15px 0px' }}><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /><StarBorderIcon sx={{ color: 'orange' }} /></Box>
                        <Typography>Pastrami landjaegar Shoulder tri-tip t-bone fatbrake biusket bresaola kevin meatloaf cupirn ribeye short loin. Pork lain durrStick shank.</Typography>
                    </Box>
                    {/* </Grid> */}
                    {/* </Grid> */}
                </Container>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
                    <Grid container>
                        <Grid xs={12} sm={12} md={6} lg={4}>
                            <img src={abimg1} alt={abimg1} width={'100%'} height={'500px'} style={{ objectFit: 'cover' }} />
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={4}>
                            <img src={abimg3} alt={abimg2} width={'100%'} height={'500px'} style={{ objectFit: 'cover' }} />
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={4}>
                            <img src={abimg2} alt={abimg3} width={'100%'} height={'500px'} style={{ objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </Container>
            </ScrollAnimation>
            <Footer />
        </Box >
    )
}

export default About
