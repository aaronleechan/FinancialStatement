import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Main from './main'

const Components = (props) =>{
    return(
        <div>
            <Router>
                <Header/>
                    <Main/>
                <Footer/>
            </Router>
        </div>
    )
}
export default Components