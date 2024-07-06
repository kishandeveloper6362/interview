import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Formik, Field, Form } from 'formik';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// toggle import
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
// button import
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// update icons
import { GiCloudUpload } from "react-icons/gi";
import axios from 'axios';
import Admin from '../Admin_Pannel/Admin'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ErrorMessage } from 'formik';
import * as Yup from "yup";

const storeheader = {
  textAlign: 'center',
  letterSpacing: '2px',
}

const Category = () => {

  const SignupSchema = Yup.object().shape({
    catagoryName: Yup.string()
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

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    marginLeft: '160px',
    ...theme.mixins.toolbar,
  }));

  // button import functionalitty
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
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

  const [category, setCategory] = useState([])
  const [initialValues, setinitialvalues] = useState({ catagoryName: '' })
  let TokenData = localStorage.getItem("token")
  const [updateid, setupdateid] = useState(-1)
  // console.log('data set and store', category);
  // console.log('category set token ===>>>>>',TokenData);

  // const [checked, setChecked] = React.useState(true);
  const handleChanges = (index, element) => {
    // setChecked(event.target.checked);
    // console.log('E T C ====>>> ',event.target.checked);
    axios.patch(`https://interviewhub-3ro7.onrender.com/catagory/` + index, { ...element, status: element.status == "on" ? "off" : "on" }, {
      headers: {
        Authorization: TokenData
      }
    })
      .then((res) => {
        console.log('For Toggle Updatation =====>>>>>', res);
        getdatApi()
      })

      .catch((err) => {
        console.log('For Toggle Updatation Error =====>>>>>', err);
      })
    // alert("hellow")
  };

  const getdatApi = (index) => {
    axios.get(`https://interviewhub-3ro7.onrender.com/catagory/`, {
      headers: {
        Authorization: TokenData
      }
    })
      .then((res) => {
        setCategory(res.data.data);
        console.log('Get Api Data Respones', res);
      })
      .catch((err) => {
        console.log('Get Api Error', err);
      })
  }
  useEffect(() => {
    getdatApi()
  }, [])

  const updatehandler = (index) => {
    // console.log('index update =======>>>>>>>> ', index);
    setupdateid(index)
    setinitialvalues([...category][index])
    // console.log(-1 === 0);
  }

  const deletehandler = (index) => {
    console.log('delete id', index);
    // console.log( `http://localhost:5500/catagory/${ind}`);
    axios.delete(`https://interviewhub-3ro7.onrender.com/catagory/${index}`, {
      headers: {
        Authorization: TokenData
      }
    })
      .then((res) => {
        console.log('Delete Api Response category', res);
        getdatApi()
      })
      .catch((err) => {
        console.log('delete Api Error category', err);
      })
  }

  const Categorylen = category.length
  localStorage.setItem('category', Categorylen)
  // console.log('value count ===>>>', Categorylen);

  let history = useHistory()
  useEffect(() => {
    const gettoken = localStorage.getItem('token')
    if (!gettoken) {
      history.push('/login')
      // console.log(history.push('/login'));
    }
  }, [])

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  return (
    <Box sx={{ marginTop: '30px' }}>

      <Admin>

        {/* <DrawerHeader /> */}
        <Box sx={{
          border: '1px solid #E5E8E8',
          background: '#2E86C1',
          color: 'white',
          padding: '15px 0px'
        }}>
          <Typography sx={storeheader}>Please Enter Your Category</Typography>
        </Box>

        <Box sx={{
          textAlign: 'center',
          marginTop: '50px'
        }}>

          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={async (values, action) => {

              if (updateid >= 0) {
                axios.patch(`https://interviewhub-3ro7.onrender.com/catagory/${category[updateid]._id}`, values, {
                  headers: {
                    Authorization: TokenData
                  }
                })
                  .then((res) => {
                    console.log('Update Api Response =====>>>>>>>', res.data.data);
                    // console.log('kuch na kuch to milega =====>>>>>>>>>>>',category[updateid]._id);
                    getdatApi()
                  })
                  .catch((err) => {
                    console.log('Update Api Error', err);
                  })
                setupdateid(-1)
                setinitialvalues({ catagoryName: '' })

              } else {

                // setCategory([...category, values])

                axios.post('https://interviewhub-3ro7.onrender.com/catagory/create', values, {
                  headers: {
                    Authorization: TokenData
                  }
                })
                  .then((res) => {
                    console.log('Post Api Respons ======>>>>>', res.data);
                    action.resetForm()
                    getdatApi()
                    // console.log(TokenData);
                  })

                  .catch((err) => {
                    console.log('Post Api Category error ======>>>>>', err);
                  })
                // setinitialvalues({ catagoryName: '' })

              }
            }}
          >
            <Form>
              <Box sx={{ margin: '80px 0px', width: '50%', margin: 'auto' }}>
                <Field id="firstName" name="catagoryName" placeholder="Enter Your Category" className='category_selector' />
                <Typography sx={{ width: '45%', height: '30px', textAlign: 'justify', margin: 'auto', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                  <ErrorMessage name="catagoryName" />
                </Typography>
                <Box>
                  <button type="submit" id="category_submit_button">Submit</button>
                </Box>
              </Box>
            </Form>
          </Formik>
        </Box>

        <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Update</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                category.map((element, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                    <TableCell component="th" scope="row">{element.catagoryName}</TableCell>

                    <TableCell align="right">{
                      <Switch
                        checked={element.status == "on"}
                        value={element.status}
                        onChange={() => handleChanges(element._id, element)}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }{element.status}</TableCell>

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
  )
}

export default Category

//This is test hjfghjfjyfjyfjyfhfjhf
