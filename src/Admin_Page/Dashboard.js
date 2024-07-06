import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { LuShieldQuestion } from "react-icons/lu";
import { useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Admin from '../Admin_Pannel/Admin'
import React from 'react'
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = () => {

    const [categoryapidata, setCategoryapidata] = React.useState([])
    let categorydatalen = categoryapidata.length

    const [subcategoryapi, setSubcategoryapi] = React.useState([])
    let subcategorylen = subcategoryapi.length

    const [questiondata, setQuestiondata] = React.useState([])
    let questiondatalen = questiondata.length

    const GetAllApiSetToken = localStorage.getItem('token')


    const DataShowCategory = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
            headers: {
                Authorization: GetAllApiSetToken
            }
        })
            .then((res) => {
                console.log('DashBoard Data Show Response =====>>>>>', res);
                setCategoryapidata(res.data.data)
            })
            .catch((err) => {
                console.log('DashBoard Data Show Error =====>>>>>', err);
            })
    }

    const DataShowSubcategory = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
            headers: {
                Authorization: GetAllApiSetToken
            }
        })

            .then((res) => {
                setSubcategoryapi(res.data.data)
                console.log('Sub_Category Get Api Working ===>>>', res);
            })
            .catch((err) => {
                console.log('Sub_Category Get Api Error ===>>>', err);
            })
    }

    const DataShowQuestion = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/questions/', {
            headers: {
                Authorization: GetAllApiSetToken
            }
        })
            .then((res) => {
                console.log('Question Get Api Working =======>>>>>>', res);
                setQuestiondata(res.data.data);
            })
            .catch((error) => {
                console.log('Question Get Api Error =======>>>>>>', error);
            })
    }

    useEffect(() => {
        // Update card state after categorydatalen changes
        setCard(cards => cards.map((el, index) => {
            if (index === 0) {
                return { ...el, categorycounter: categorydatalen };
            }
            return el;
        }));
        DataShowCategory()
    }, [categorydatalen]);

    useEffect(() => {
        // Update card state after subcategorylen changes
        setCard(card => card.map((item, index) => {
            if (index === 1) {
                return { ...item, categorycounter: subcategorylen };
            }
            return item;
        }));
        DataShowSubcategory()
    }, [subcategorylen]);

    useEffect(() => {
        // Update card state after subcategorylen changes
        setCard(car => car.map((data, index) => {
            if (index === 2) {
                return { ...data, categorycounter: questiondatalen };
            }
            return data;
        }));
        DataShowQuestion()
    }, [questiondatalen]);

    const [card, setCard] = React.useState([
        { CardName: 'Total Category Added', icon: <TbCategory2 className='category-icon' />, categorycounter: <CountUp duration={18.90} end={500} /> },

        { CardName: 'Total Sub_Category Added', icon: <MdOutlineCategory className='category-icon' />, categorycounter: <CountUp duration={18.90} end={subcategorylen} /> },

        { CardName: 'Total Question Added', icon: <LuShieldQuestion className='category-icon' />, categorycounter: <CountUp duration={18.90} end={questiondatalen} /> }
    ])

    const history = useHistory()
    useEffect(() => {
        if (!GetAllApiSetToken) {
            history.push('/login')
        }
    })
    return (
        <Admin>
            <Box className='main'>
                <Box className="card-container">
                    <Grid container sx={{ justifyContent: 'center' }}>
                        {
                            card.map((el, i) => (
                                <Card className='card-width' key={i}>
                                    <CardContent className="card-color">
                                        <Grid item key={i} xs={12} sm={12} md={6} lg={4}>
                                            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                                {el.CardName}
                                            </Typography>

                                            <Box sx={{ padding: '15px 0px', color: "white" }}>
                                                {el.icon}
                                            </Box>

                                            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                                {el.categorycounter}
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </Admin>
    )
}

export default Dashboard
