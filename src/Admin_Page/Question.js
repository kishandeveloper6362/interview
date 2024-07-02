import { Box } from '@mui/material'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Field, Form } from 'formik';
import React, { useEffect, useState } from 'react'

// table import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';

// button icon
import { GiCloudUpload } from "react-icons/gi";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Admin from '../Admin_Pannel/Admin'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ErrorMessage } from 'formik';
import * as Yup from "yup";

const Qusetion = () => {
    const SignupSchema = Yup.object().shape({
        questions: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Question Is Required*')
            .when('$onSubmit', (onSubmit, schema) => {
                return onSubmit
                    ? schema.required('Question Is Required*')
                    : schema;
            }),
            answer: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Answer Is Required*')
            // .test('is-unique', 'This category already exists', 
            //   async function(values) {

            //   return !values.includes(values);
            // })
            .when('$onSubmit', (onSubmit, schema) => {
                return onSubmit
                    ? schema.required('Answer Is Required*')
                    : schema;
            }),
    });

    const QeustionGetApi = () => {
        axios.get('http://localhost:5500/questions/', {
            headers: {
                Authorization: InToken
            }
        })
            .then((res) => {
                console.log('Question Get Api Working =======>>>>>>', res);
                setQuestion(res.data.data);
            })
            .catch((error) => {
                console.log('Question Get Api Error =======>>>>>>', error);
            })
    }

    const deletehandler = (index) => {
        // let storedata = [...question]
        // storedata.splice(index, 1)
        // console.log(storedata.splice(index, 1));
        // setQuestion(storedata)

        axios.delete(`http://localhost:5500/questions/${index}`, { headers: { Authorization: InToken } })
            .then((res) => {
                console.log('Question Delete Api Working', res);
                QeustionGetApi()
            })
            .catch((error) => {
                console.log('Question Delete Api Error', error);
            })
    }

    const PrintSubCategoryData = () => {
        axios.get('http://localhost:5500/subcatagory/', {
            headers: {
                Authorization: InToken
            }
        })

            .then((res) => {
                console.log('Sub_Category Get Api Call In Question Component Response =====>>>>>>>> ', res);
                setSubcategorydata(res.data.data)
            })
            .catch((err) => {
                console.log('Sub_Category Get All Api Call In Question Component Error =====>>>>>>>> ', err);
            })
    }

    useEffect(() => {
        QeustionGetApi()
        PrintSubCategoryData()
    }, [])


    const storeheader = {
        textAlign: 'center',
        letterSpacing: '2px',
    }

    const [subcategorydata, setSubcategorydata] = useState([])
    const [question, setQuestion] = useState([])
    // console.log('api value get to the state ====>>>>> ', question);
    const [updateind, setUpateind] = useState(-1)
    const InToken = localStorage.getItem('token')
    // console.log('Question Component Token Get ===>>>', InToken);
    const [initialValue, setInitialValue] = useState({ // sub_category: '',
        questions: '',
        answer: '',
        subcatagoryID: ''
    })

    // function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updatehandler = (index) => {
        setUpateind(index)
        setInitialValue([...question][index])
        console.log('Re Throw To Input ====>>>>> ', [...question][index]);
        handleClickOpen()
    }

    const history = useHistory()
    useEffect(() => {
        if (!InToken) {
            history.push('/login')
        }
    })
    return (
        <Box sx={{ marginTop: '30px' }}>

            <Admin>

                <Box sx={{
                    border: '1px solid #E5E8E8',
                    background: '#2E86C1',
                    color: 'white',
                    padding: '15px 0px'
                }}>
                    <Typography sx={storeheader}>Please Ask Your Questions</Typography>
                </Box>

                <Box sx={{ textAlign: 'right', marginTop: '50px' }} >
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Question / Answer
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Please Ask Your Questions"}
                        </DialogTitle>
                        <DialogContent sx={{ marginTop: '15px' }}>
                            <DialogContentText id="alert-dialog-description">
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValue}
                                    validationSchema={SignupSchema}
                                    onSubmit={async (values, action) => {
                                        if (updateind >= 0) {
                                            axios.patch(`http://localhost:5500/questions/${question[updateind]._id}`, values, {
                                                headers: {
                                                    Authorization: InToken
                                                }
                                            })
                                                .then((res) => {
                                                    console.log('Question Update Api Working', res);
                                                    // setQuestion(res.data.data)
                                                    QeustionGetApi()
                                                    handleClose()
                                                })
                                                .catch((error) => {
                                                    console.log('Question Update Api Error', error);
                                                })
                                            setUpateind(-1)
                                            setInitialValue({
                                                questions: '',
                                                answer: ''
                                            })

                                        } else {
                                            // setQuestion([...question, values])
                                            // console.log('Question Get The Values >>>>>>>', values);

                                            axios.post('http://localhost:5500/questions/create', values, {
                                                headers: {
                                                    Authorization: InToken
                                                }
                                            })
                                                .then((res) => {
                                                    console.log('Question Post Api Working', res.data.data);
                                                    // setQuestion(res.data.data)
                                                    action.resetForm()
                                                    QeustionGetApi()
                                                    handleClose()
                                                })
                                                .catch((error) => {
                                                    console.log('Question Post Api Error', error);
                                                })

                                        }
                                    }}
                                >
                                    <Form>
                                        <Field id="subcategory" name="questions" placeholder="Your Question" className='subcategory_input' />

                                        <Typography sx={{ width: '100%', height: '30px', textAlign: 'justify', margin: 'auto', marginTop: '0px', color: 'red', fontSize: '12px' }}>
                                            <ErrorMessage name="questions" />
                                        </Typography>

                                        <Field id="subcategory" name="answer" placeholder="Your Answer" className='subcategory_input' />
                                        <Typography sx={{ width: '100%', height: '30px', textAlign: 'justify', margin: 'auto', marginTop: '0px', color: 'red', fontSize: '12px' }}>
                                            <ErrorMessage name="answer" />
                                        </Typography>

                                        <Field as="select" name="subcatagoryID" className='subcategory_input'>
                                            {
                                                subcategorydata.map((el, i) => {
                                                    return <option value={el._id} key={i}>{el.subCatagoryname}</option>
                                                })
                                            }
                                        </Field>

                                        {/* <Field as="select" name="select" className='subcategory_input' >
                                            <option value="IT">IT</option>
                                            <option value="IT">IT</option>
                                            <option value="BBA">BBA</option>
                                            <option value="BCA">BCA</option>
                                            <option value="DIPLOMA">DIPLOMA</option>
                                            <option value="science">science</option>
                                            <option value="commerce">commerce</option>
                                            <option value="LLB">LLB</option>
                                        </Field> */}

                                        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
                                            <button type="submit" id="category_submit_button" >Submit</button>
                                        </Box>

                                    </Form>
                                </Formik>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                            {/* <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button> */}
                        </DialogActions>
                    </Dialog>
                </Box>

                <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Questions</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Answer</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Sub_Category</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Update</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {question.map((element, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {/* <TableCell component="th" scope="row">
                                        {subcategory.name}
                                    </TableCell> */}
                                    <TableCell align="right" sx={{ textAlign: 'left' }}>{element.questions}</TableCell>

                                    <TableCell align="right">{element.answer}</TableCell>

                                    <TableCell align="right">{element?.subcatagoryID?.subCatagoryname}</TableCell>

                                    <TableCell align="right">{<Button variant="outlined" startIcon={<GiCloudUpload />} onClick={() => updatehandler(index)} >
                                        UPDATE</Button>}</TableCell>

                                    <TableCell align="right">{<Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletehandler(element._id)} >
                                        Delete</Button>}</TableCell>
                                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Admin>
        </Box>
    )
}
// return <AlertDialog />

export default Qusetion