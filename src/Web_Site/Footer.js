import { Box, Container, Grid, Typography } from '@mui/material'
import headerlogo from '../Images/headerlogo.png'
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SiInternetexplorer } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import { FaPen } from "react-icons/fa";

import React from 'react'

const Footer = () => {

    const [ourcontact, setOurcontact] = React.useState([
        { icon: <MdLocationOn />, src: '16, Adam Ave, Phoenix, USA' }, { icon: <MdEmail />, src: 'support@startford.com' }, { icon: <MdOutlineLocalPhone />, src: '888-568-4568' }, { icon: <SiInternetexplorer />, src: 'www.StarFord.com' }
    ])

    const [tweets, seTweets] = React.useState([
        { tweetlogo: <IoLogoTwitter />, tweet: ' 3h ago - Deep tenderlain chuck' },
        { tweetlogo: <IoLogoTwitter />, tweet: '22h ago - Park shank venison' }
    ])

    return (
        <Box sx={{ paddingTop: { xs: '30px', lg: '100px' } }}>
            <Box sx={{ background: '#08275D', padding: { xs: '25px 25px', sm: '25px 25px', md: '40px 25px', lg: '65px 25px' } }}>
                <Container maxWidth='lg'>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: { xs: 'left', sm: 'left', md: 'center', lg: 'center' } }}>
                            <img src={headerlogo} alt="" width={'40%'} height={'160px'} />
                            <Box sx={{ marginTop: { xs: '-15px' } }}>
                                <Typography variant='' sx={{ color: 'white', fontSize: '22px', lineHeight: '20px' }}>
                                    <Typography variant='' sx={{ color: '#D2AB68', fontSize: '22px' }}>
                                        STAR
                                    </Typography>
                                    FORD
                                    <br />
                                    <Typography variant='' sx={{ fontSize: '14px', color: 'white' }}>UNIVERSITY OF PHONIX</Typography></Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Typography variant='h6' sx={{ color: 'white', paddingTop: { xs: '15px', sm: '15px' } }}>Our Contacts</Typography>

                            {
                                ourcontact.map((element, index) => {
                                    return (
                                        <Box>
                                            <a href="" style={{ color: 'white', textDecoration: 'none', paddingTop: '15px', display: 'inline-block', fontSize: '15px' }}><a href="" style={{ marginRight: '10px', display: 'inline-block', color: '#D2AB68' }}>{element.icon}</a>{element.src}</a>
                                        </Box>
                                    )
                                })
                            }
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Typography variant='h6' sx={{ color: 'white', paddingTop: { xs: '15px', sm: '15px' } }}>Latest Tweets</Typography>

                            {
                                tweets.map((element, index) => {
                                    return (
                                        <Box id='fotter_hover'>
                                            <a href='' style={{ color: 'white', textDecoration: 'none', paddingTop: '15px', display: 'inline-block', fontSize: '15px' }} >

                                                <Typography style={{ marginRight: '10px', display: 'inline-block', color: '#D2AB68' }}>
                                                    {element.tweetlogo}
                                                </Typography>

                                                {element.tweet}{element.src}
                                            </a>
                                        </Box>
                                    )
                                })
                            }
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Typography variant='h6' sx={{ color: 'white', paddingTop: { xs: '15px', sm: '15px' } }}>Subscribe Newslater</Typography>

                            <Typography sx={{ color: 'white', paddingTop: '15px', fontSize: '15px' }}>Enter Email here to be updated. We promise  not you sent span!</Typography>

                            <Box sx={{ marginTop: '15px', display: 'flex', alignItems: 'center' }} >

                                <input id='input' type="email" name="email" placeholder="Email Address" />

                                {/* <Box id="input_button">
                                    <a href="" style={{ color: '#d2ab68' }} ><FaPen /></a>
                                </Box> */}
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box >
    )
}

export default Footer
