import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllUsers from "./components/Allusers";
import EditUser from './components/Edituser';
import UserProfile from "./components/user";
import SplashPage from './components/SplashPage'
import GlobalNav from './components/GlobalNav';
import Newuser from './components/Newuser';
import householdList from './components/householdList';
import household from './components/household';
import Edithousehold from './components/Edithousehold';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
// import { setAxiosDefaults } from './util';


class App extends Component {
  // componentWillMount(){
  //   setAxiosDefaults();
  // }

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
        <Route exact path='/' component={SplashPage} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/household" component={Household}/>
        <Route exact path="/household/:id/AllBills" component={AllBills}/>
        <Route exact path="/household/:household_id/bills" component={NewBill} />
        <Route exact path="/household/:id/AllBills/:id" component={Bill}/>
        <Route exact path="/household/:household_id/bills/:id" component={EditBill}/>
        <Route exact path="/household/:household_id/users/:id" component={UserProfile}/>
        <Route exact path="/household/:household_id/users/:id" component={EditUser}/>

        {/*<Route exact path="/users" component={Allusers}/>
        <Route exact path='/users/:id/edit' component={Edituser} />
        <Route exact path='/users/new' component={Newuser} />
        <Route exact path="/user/:id" component={user}/>
        <Route exact path="/household/:id" component={household}/>
        <Route exact path="/households" component={householdList}/>
        <Route exact path='/households/:id/edit' component={Edithousehold} />*/}
      
       </div>
      </Router>
    );
  }
}

export default App;
