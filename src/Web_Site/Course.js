import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Loader from './Loader';
import courseimg1 from '../Images/courseimg1.jpg'
import courseimg2 from '../Images/courseimg2.jpg'
import courseimg3 from '../Images/courseimg3.jpg'
import courseimg4 from '../Images/courseimg4.webp'
import courseimg5 from '../Images/courseimg5.webp'
import courseimg6 from '../Images/courseimg6.webp'
import { FaStar } from "react-icons/fa6";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Course = () => {

    const [card, setcard] = useState([
        { src: courseimg1, name: 'Civil', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
        { src: courseimg2, name: 'I T', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
        { src: courseimg3, name: 'Buisness', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
        { src: courseimg4, name: 'Bsc', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
        { src: courseimg5, name: 'Interior', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
        { src: courseimg6, name: 'Mechanical', icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />], },
    ])

    const [loader, setLoder] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoder(false)
        }, 2000);

    }, [])
    return (
        <Box>
            {loader && <Loader />}
            <Header />
            <Box sx={{ marginTop: '60px' }}>
                <Container>
                    <Grid container rowGap={2}>
                        {
                            card.map((el, index) => {
                                return (
                                    <Grid xs={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 240, objectFit: 'cover' }}
                                                image={el.src}
                                                title="Course Image"
                                            />
                                            <ScrollAnimation animateIn="fadeIn">

                                                <CardContent>
                                                    <Typography gutterBottom sx={{ fontSize: '16px', marginBottom: '0px' }} component="div">
                                                        {el.name}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Box sx={{ color: '#FFC600' }}>{el.icon}</Box>
                                                    <Button size="small" sx={{background: '#193566', color: 'white', padding: '4px 8px'}}>Learn More</Button>
                                                </CardActions>
                                            </ScrollAnimation>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box >
    )
}

export default Course
