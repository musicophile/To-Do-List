import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Register from "./Register";
import main from "./main";
import textbox from "./textbox";
import ViewMore from "./ViewMore";

import { Route, BrowserRouter , Link, Redirect } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
           <div>

               <Route exact  path={"/"} component={Login}/>
                <Route path={"/Login"} component={Login} />
                <Route path={"/main"} component={main}/>
                <Route path={"/textbox"} component={textbox}/>
                <Route path={"/ViewMore"} component={ViewMore}/>
                <Route path={"/Register"} component={Register} />


                          </div>
                </BrowserRouter>
    );
  }
}

export default App;
