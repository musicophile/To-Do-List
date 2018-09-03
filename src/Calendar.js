import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./src/Root";
import {Login} from './Login';
import {User} from "./src/User";


class Calendar extends React.Component{

  render(){
return(
<Router history={browserHistory}>
<Route path={"/"} component={Root}>
<IndexRoute component={Login} />
<Route path={"user"} component={User}/>
<Route path={"Register"} component={Register} />
</Route>
<Route path={"home-single"} component={Login}/>
</Router>
<Route path='/Login' render={() => (
    loggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <SignIn />
    )
  )} />
);
  }

}

render(<Calendar />, window.document.getElementById('calendar'));
export default Calendar;
