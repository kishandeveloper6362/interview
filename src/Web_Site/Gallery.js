import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Loader from './Loader';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Gallery = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    })

    return (
        <Box>

            {loader && <Loader />}
            <Header />

            <Box id="gallary_img">
                <Typography variant='h4' sx={{ color: '#D2AB68', }}>Gallary Portfolio</Typography>
                <Box role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" underline="hover" color="inherit" id='gallary_homelinks'>
                            Home
                        </Link>
                        <Typography underline="hover" color="inherit" sx={{ color: 'white' }}>
                            Sub_category
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <ScrollAnimation animateIn="fadeIn">

                <Box sx={{ marginTop: '40px' }}>
                    <Container maxWidth="lg">
                        {
                            <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=161&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        }
                    </Container>
                </Box>
            </ScrollAnimation>
            <Footer />
        </Box>
    )
}

export default Gallery

const itemData = [
    {
        img: require('../Images/gallaryimg1.jpg'),
        title: 'Bed',
    },
    {
        img: require('../Images/gallaryimg2.jpg'),
        title: 'Kitchen',
    },
    {
        img: require('../Images/gallaryimg3.jpg'),
        title: 'Sink',
    },
    {
        img: require('../Images/gallaryimg4.jpg'),
        title: 'Books',
    },
    {
        img: require('../Images/gallaryimg5.jpg'),
        title: 'Chairs',
    },
    {
        img: require('../Images/gallaryimg6.jpg'),
        title: 'Candle',
    },
    {
        img: require('../Images/gallaryimg7.jpg'),
        title: 'Laptop',
    },
    {
        img: require('../Images/gallaryimg8.jpg'),
        title: 'Doors',
    },
    {
        img: require('../Images/gallaryimg10.jpg'),
        title: 'Coffee',
    },
    {
        img: require('../Images/gallaryimg11.jpg'),
        title: 'Storage',
    },
    {
        img: require('../Images/gallaryimg12.jpg'),
        title: 'Coffee table',
    },
    {
        img: require('../Images/gallaryimg13.jpg'),
        title: 'Blinds',
    },
];