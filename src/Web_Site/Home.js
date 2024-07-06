import { Box } from '@mui/material'
// counterimg
import counterimg from '../Images/countebackgrountimg.jpg'
// newscardimg
import cardimg1 from '../Images/newscardimg1jpg.jpg'
import cardimg2 from '../Images/newscardimg2.jpg'
import cardimg3 from '../Images/nescardimg3.jpg'
// slick slider
import Slider from "react-slick";
import Sliderimg1 from '../Images/sliderimg1.jpg'
import Sliderimg2 from '../Images/sliderimg2.jpg'
import Sliderimg3 from '../Images/sliderimg3.jpg'
import Sliderimg4 from '../Images/sliderimg4.jpg'
// our courses card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// grid
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import axios from 'axios';
import { BiCategoryAlt } from "react-icons/bi";
import Footer from './Footer';
import Header from './Header'
import Loader from './Loader'
import { useState } from 'react'
import CountUp from 'react-countup';
import { FaTrophy } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// scrolling on animate files import
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {

    const sliderimg = [{ images: Sliderimg1 }, { images: Sliderimg2 }, { images: Sliderimg3 }, { images: Sliderimg4 }]

    //our latest news
    const [newscard, setNewscard] = React.useState([{ Newsimg: cardimg1, title: 'MEDICINE', text: 'B.Pharma Within The Experiance Employes In StarFord University To High Rated ' }, { Newsimg: cardimg2, title: 'PHILOSOPHY', text: 'Very Much Knowlegable Employes In The All University Compared To StarFord' }, { Newsimg: cardimg3, title: 'I.T', text: 'BSC Course Employes StarFord Staff To Highly Stared Knowlagable Employes' }])

    const [categorydata, setCategorydata] = React.useState([])

    // slick Slider
    const settingsSlider = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const settingsstudent = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // grid
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    let usetoken = localStorage.getItem("token")
    // console.log(usetoken);

    const categorygetapi = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
            headers: {
                Authorization: usetoken
            }
        })
            .then((res) => {
                console.log('Category Api Get All Working====>>>>  ', res);
                setCategorydata(res.data.data)
            })

            .catch((error) => {
                console.log('Category Api Get All Error====>>>>  ', error);
                console.log("usetoken=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",usetoken );
            })
    }
    useEffect(() => {
        categorygetapi()
    }, [])


    const handleHover = (event) => {
        event.target.style.filter = 'brightness(60%)';

    };

    const handleMouseLeave = (event) => {
        event.target.style.filter = 'brightness(100%)';
    };

    const [loader, setLoder] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoder(false)
        }, 2000);

    }, [])

    // counter code
    const [counter, setCounter] = useState([
        {
            icon: <FaTrophy style={{ fontSize: '66px', color: '#D2AB68', }} />, counter: <CountUp end={30} duration={15.95} style={{ color: 'white', bottom: '100px', fontSize: '20px', fontWeight: '900' }} />,
            name: 'News Course Every Years'
        },
        {
            icon: <FaUniversity style={{ fontSize: '66px', color: '#D2AB68', }} />, counter: <CountUp end={28} duration={15.95} style={{ color: 'white', bottom: '100px', fontSize: '20px', fontWeight: '900' }} />,
            name: 'Affiliates in all the state of America'
        },
        {
            icon: <FaGraduationCap style={{ fontSize: '66px', color: '#D2AB68', }} />, counter: <CountUp end={4820} duration={15.95} style={{ color: 'white', bottom: '100px', fontSize: '20px', fontWeight: '900' }} />,
            name: 'Happy Greduates Per Year'
        },
        {
            icon: <FaChalkboardTeacher style={{ fontSize: '66px', color: '#D2AB68', }} />, counter: <CountUp end={1486} duration={15.95} style={{ color: 'white', bottom: '100px', fontSize: '20px', fontWeight: '900' }} />,
            name: 'Proffesional Teachers'
        }
    ])
    return (
        <Box>

            {loader && <Loader />}

            <Header />
            {/* Slider Start */}
            <Box className="slider-container">
                <Slider {...settingsSlider}>
                    {
                        sliderimg.map((el, index) => {
                            return (
                                <Box key={index}>
                                    <img src={el.images} alt="" width={'100%'} height={"560px"} />
                                </Box>
                            )
                        })
                    }
                </Slider>
            </Box>

            {/* our courses */}
            <Box>
                <Box sx={{ padding: { xs: '20px 0px 10px 0px', lg: '66px 0px 40px 0px', md: '30px 0px 20px 0px', sm: '20px 0px 10px 0px' }, textAlign: 'center' }}>
                    <Box sx={{ paddingBottom: '10px' }}>
                        <Typography variant='' className='our_course'>
                            STARFORD COURSE
                        </Typography>
                    </Box>
                </Box>


                <Container maxWidth="lg" sx={{ marginBottom: { xs: '30px', sm: '40px', md: '50px', lg: '100px' } }}>
                    <ScrollAnimation animateIn="fadeIn">
                        <Typography variant='h5' className='offered_course' sx={{ marginBottom: { xs: "20px", sm: '40px' }, color: '#193566' }}>
                            Our Category Choices -
                        </Typography>

                        <Grid container rowGap={0} >
                            {
                                categorydata.map((el, index) => {
                                    return (

                                        <Grid xs={12} md={6} sm={6} lg={4} >
                                            <Card sx={{ minWidth: 240, margin: 2, }} id="category_card_hover">
                                                <CardContent>
                                                    <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
                                                        <BiCategoryAlt id='card-logo' />
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        Please Choose The Any Category And Make A Best Future.
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" variant="contained" sx={{ margin: '0px 15px', background: '#19456B' }} id='hovers_button'>
                                                        <Link to={"/subcategories/" + el._id} className='card_link' >{el.catagoryName}</Link>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </ScrollAnimation>
                </Container>
            </Box >

            {/* second slider */}
            {/* <Box className='second_slider'>
                <Slider {...settingsstudent}>
                    <Box>

                    </Box>
                </Slider>
            </Box> */}

            {/* story of starford */}

            <Box>
                <Container maxWidth='lg'>
                    <ScrollAnimation animateIn="fadeIn">
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
                    </ScrollAnimation>
                </Container>
            </Box>

            {/* counter component */}

            <Box className="counter" xs={12} >
                <Container maxWidth="lg">
                    <Grid container>
                        {
                            counter.map((el, index) => {
                                return (
                                    <Grid key={index} item xs={12} sm={12} md={6} lg={3} sx={{ textAlign: 'center' }}>
                                        <Box sx={{ fontSize: '44px' }}>
                                            {el.icon}
                                        </Box>
                                        <Typography>
                                            {el.counter}
                                        </Typography>
                                        <Box sx={{ marginTop: '15px', color: 'white', fontSize: '!16px' }}>
                                            {el.name}
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>


            {/* our latest news */}

            < ScrollAnimation animateIn="fadeIn" >
                <Box sx={{ marginTop: '60px' }}>
                    <Typography variant='h5' sx={{ textAlign: 'center', padding: '30px 0px 30px 0px', fontWeight: '800', color: '#193566' }}>Our Latest News</Typography>
                    <Container maxWidth="lg" sx={{ display: 'flex' }}>
                        <Grid container spacing={2} sx={{ rowGap: '20px' }}>
                            {
                                newscard.map((el, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                            <Card sx={{ maxWidth: "100%", position: 'relative' }} >
                                                <CardMedia
                                                    sx={{
                                                        height: 250,
                                                        objectFit: 'cover',

                                                        '&:hover': {
                                                            filter: 'brightness(50%)', // Apply the hover effect directly here
                                                            transition: 'filter 0.3s ease',
                                                        }
                                                    }}
                                                    image={el.Newsimg}
                                                    title="green iguana"
                                                    onMouseEnter={handleHover}
                                                    onMouseLeave={handleMouseLeave}
                                                />

                                                <CardContent sx={{ padding: '15px 0px' }}>
                                                    <Typography sx={{ fontSize: '13px', color: '#D28B68', textAlign: 'center' }}>{el.title}</Typography>
                                                </CardContent>
                                                <CardContent>
                                                    <Typography sx={{ padding: ' 0px 35px 0px 35px', color: '#2D5C88', textAlign: 'center' }}>{el.text}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                </Box>
                <Footer />
            </ScrollAnimation >
        </Box >
    )
}

export default Home
