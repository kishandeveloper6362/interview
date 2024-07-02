import Admin from './Admin_Pannel/Admin'
import Category from '../src/Admin_Page/Category'
import Sub_Category from '../src/Admin_Page/Sub_Category';
import Dashboard from '../src/Admin_Page/Dashboard';
import Question from '../src/Admin_Page/Question'
import Sign_Up from '../src/Admin_Page/Sign_Up';
import Login from '../src/Admin_Page/Login';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Header from './Web_Site/Header';
import Home from './Web_Site/Home';
import Sub_category from './Web_Site/Sub_category';
import Gallery from './Web_Site/Gallery';
import Contact from './Web_Site/Contact';
import About from './Web_Site/About';
import Course from './Web_Site/Course';
import Pop_up from './Web_Site/Pop_up';
import { useEffect, useState } from 'react';
import QuestionAnswer from './Web_Site/QuestionAnswer';
import Loader from './Web_Site/Loader';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Box } from '@mui/material';
function App() {

  const [loader, setLoder] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoder(false)
    }, 2000);

  }, [])

  return (

    <Box className="App">

      <Router>
        {loader && <Loader />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/gallary">
            <Gallery />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/courses">
            <Course />
          </Route>

          <Route path="/subcategories">
            <Sub_category />
          </Route>

          <Route path="/questionanswer/">
            <QuestionAnswer />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/Category">
            <Category />
          </Route>

          <Route path="/sub_category">
            <Sub_Category />
          </Route>

          <Route path="/question">
            <Question />
          </Route>

          <Route path="/sign_up">
            <Sign_Up />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>

    </Box>

  );
}

export default App;
