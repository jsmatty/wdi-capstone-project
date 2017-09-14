import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import SplashPage from './components/SplashPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Household from './components/Household/Household';
import AllBills from './components/Bills/AllBills';
import NewBill from './components/Bills/NewBill';
import Bill from './components/Bills/Bill';
import EditBill from './components/Bills/EditBill';
import UserProfile from './components/User/UserProfile';
import EditUser from './components/User/EditUser'


// import { setAxiosDefaults } from './util';


class App extends Component {
  // componentWillMount(){
  //   setAxiosDefaults();
  // }

  render() {
    return (
      <Router>
        <div>
          <GlobalNav/>
        <Route exact path='/' component={SplashPage} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/household/household" component={Household}/>
        <Route exact path="/household/:id/AllBills" component={AllBills}/>
        <Route exact path="/household/:household_id/bills" component={NewBill} />
        <Route exact path="/household/:id/AllBills/:id" component={Bill}/>
        <Route exact path="/household/:household_id/bills/:id" component={EditBill}/>
        <Route exact path="/household/:household_id/users/:id" component={UserProfile}/>
        <Route exact path="/household/:household_id/users/:id" component={EditUser}/>

        </div>
      </Router>
    );
  }
}

export default App;
