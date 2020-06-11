import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
import Home from '../home';

const Main = (props)=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}
export default Main