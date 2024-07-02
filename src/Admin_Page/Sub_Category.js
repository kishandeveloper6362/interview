import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Field, Form } from 'formik';
// table import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
// button icon
import { GiCloudUpload, GiEel } from "react-icons/gi";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Admin from '../Admin_Pannel/Admin'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { ErrorMessage } from 'formik';
import * as Yup from "yup";

const Sub_Category = () => {

    const storeheader = {
        textAlign: 'center',
        letterSpacing: '2px',
    };

    const SignupSchema = Yup.object().shape({
        subCatagoryname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Catagory Name Is Required*')
            // .test('is-unique', 'This category already exists', 
            //   async function(values) {

            //   return !values.includes(values);
            // })
            .when('$onSubmit', (onSubmit, schema) => {
                return onSubmit
                    ? schema.required('Category Name Is Required*')
                    : schema;
            }),
    });

    const IOSSwitch = styled(Switch)(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    const [subcategory, setSubcategory] = useState([])
    const [category, setCategory] = useState([])
    const [updateids, setUpdateids] = useState(null)
    const [initialvalue, setinitialvalue] = useState({
        subCatagoryname: '',
        catagoryID: ''
    })
    const TokensData = localStorage.getItem('token')

    const GetApi = () => {
        axios.get('http://localhost:5500/subcatagory/', {
            headers: {
                Authorization: TokensData
            }
        })
            .then((res) => {
                setSubcategory(res.data.data)
                console.log('Sub_Category Get Api Working ===>>>', res);
            })
            .catch((err) => {
                console.log('Sub_Category Get Api Error ===>>>', err);
            })
    }

    const categoryidApi = () => {
        axios.get('http://localhost:5500/catagory/', {
            headers: {
                Authorization: TokensData
            }
        })
            .then((res) => {
                // setstatusid(res.data.data)
                console.log('Get Category Api Called In Sub_Category Component ===>>>', res);
                setCategory(res.data.data)

            })
            .catch((err) => {
                console.log('Get Category Api Called In Sub_Category Component ===>>>', err);
            })
    }

    // function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    {/*console.log("==========-===========--------------");
    setSubcategory([]) recursion this is */}
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const deletehandler = (index) => {
        console.log('delete handler ====>>>>>', index);
        axios.delete(`http://localhost:5500/subcatagory/${index}`, {
            headers: {
                Authorization: TokensData
            }
        })
            .then((res) => {
                console.log('Sub_Category Delete Api Working', res);

                GetApi()
            })
            .catch((err) => {
                console.log('Sub_Category Delete Api Error', err);
            })
    }

    const handleChanges = (index, element) => {
        // const newStatus = element.status === 'on' ? 'off' : 'on';

        axios.patch(`http://localhost:5500/subcatagory/` + index, { ...element, status: element.status == "on" ? "off" : "on" }, {
            headers: {
                Authorization: TokensData,
            },
        })
            .then((res) => {
                console.log('Update API Response:', res);
                handleClose();
                GetApi()
            })
            .catch((err) => {
                console.error('Update API Error:', err);
            });
    };

    useEffect(() => {
        GetApi()
        categoryidApi()
    }, [])

    const updatehandler = (index) => {
        // console.log('Update Handler Index ===>>>', index);
        setUpdateids(index)
        handleClickOpen()
        setinitialvalue([...subcategory][index]);
        const selectedSubcategory = subcategory[index];
        setinitialvalue({
            ...selectedSubcategory,
            catagoryID: selectedSubcategory.catagoryID._id // Set the categoryId to the selected category's ID
        });
    }

    // page redirect use for history.push
    const history = useHistory()
    useEffect(() => {
        if (!TokensData) {
            history.push('./login')
        }
    }, [])


    return (
        <Box>
            <Admin>
                <Box sx={{ marginTop: '30px' }}>
                    <Box sx={{
                        border: '1px solid #E5E8E8',
                        background: '#2E86C1',
                        color: 'white',
                        padding: '15px 0px'
                    }}>
                        <Typography sx={storeheader}>Please Enter Your Sub_Category</Typography>
                    </Box>

                    <Box sx={{ textAlign: 'right', marginTop: '50px' }} >
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Add Sub Category
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Enter Your Sub_Category"}
                            </DialogTitle>
                            <DialogContent sx={{ marginTop: '15px' }}>
                                <DialogContentText id="alert-dialog-description">

                                    <Formik
                                        enableReinitialize={true}
                                        initialValues={initialvalue}
                                        validationSchema={SignupSchema}
                                        onSubmit={async (values, action) => {

                                            if (updateids) {
                                                axios.patch(`http://localhost:5500/subcatagory/${updateids._id}`, values, {
                                                    headers: {
                                                        Authorization: TokensData
                                                    }
                                                })
                                                    .then((res) => {
                                                        console.log('Update Api Response ===>>>', res);
                                                        // console.log('Token In Update Id', TokensData);
                                                        handleClose()
                                                    })
                                                    .catch((err) => {
                                                        console.log('Update Api Error ===>>>', err);
                                                    })
                                                setUpdateids(null)
                                            } else {
                                                console.log("insert data ==> ", values);
                                                axios.post('http://localhost:5500/subcatagory/create', values, {
                                                    headers: {
                                                        Authorization: TokensData
                                                    }
                                                })
                                                    .then((res) => {
                                                        console.log('Post Api Working ===>>>', res);
                                                        handleClose()
                                                        // setSubcategory(res.data.data)
                                                        GetApi()
                                                    })
                                                    .catch((err) => {
                                                        console.log('Post Api Error ===>>>', err);
                                                    })
                                            }
                                            action.resetForm()
                                        }}
                                    >
                                        <Form>
                                            <Field id="subcategory" name="subCatagoryname" placeholder="Enter Sub_Category" className='subcategory_input' />
                                            <Typography sx={{ width: '100%',height: '30px', textAlign: 'justify', margin: 'auto', marginTop: '0px', color: 'red', fontSize: '12px' }}>
                                                <ErrorMessage name="subCatagoryname" />
                                            </Typography>

                                            <Field as="select" name="catagoryID"
                                                className='subcategory_input'>
                                                {

                                                    category.map((el, i) => {
                                                        return <option value={el._id} key={i}>{el.catagoryName}</option>
                                                    })
                                                }
                                            </Field>

                                            <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
                                                <button type="submit" id="category_submit_button" >Submit</button>
                                            </Box>

                                        </Form>
                                    </Formik>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                {/* <Button onClick={handleClose}>Disagree</Button> */}
                                <Button onClick={handleClose} autoFocus>
                                    CLOSE
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>

                <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Sub_Category</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Catagory Stauts</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Sub_Catagory Stauts</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Update</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                subcategory.map((element, index) => (
                                    <TableRow
                                        key={index._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {/* <TableCell component="th" scope="row">
                                        {subcategory.name}
                                    </TableCell> */}

                                        <TableCell align="right" sx={{ textAlign: 'left' }}>{element.subCatagoryname}</TableCell>

                                        <TableCell align="right">{element?.catagoryID?.catagoryName}</TableCell>

                                        <TableCell align="right">{element?.catagoryID?.status}</TableCell>

                                        <TableCell align="right">
                                            <Switch
                                                checked={element.status == "on"}
                                                value={element.status}
                                                onChange={() => handleChanges(element._id, element)}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            {element.status}
                                        </TableCell>

                                        <TableCell align="right">{<Button variant="outlined" startIcon={<GiCloudUpload />} onClick={() => updatehandler(index)}>
                                            UPDATE</Button>}</TableCell>

                                        <TableCell align="right">{<Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deletehandler(element._id)}>
                                            Delete</Button>}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Admin>
        </Box>
    );
}

// return <AlertDialog />;

export default Sub_Category;