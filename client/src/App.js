import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalNav from './components/GlobalNav';
import SplashPage from './components/SplashPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Household from './components/Household';
import AllBills from './components/AllBills';
import NewBill from './components/NewBill';
import Bill from './components/Bill';
import EditBill from './components/EditBill';
import UserProfile from './components/UserProfile';
import EditUser from './components/EditUser'
import { setAxiosDefaults } from './util';

// import { setAxiosDefaults } from './util';




class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
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
        <Route exact path="/household/:household_id" component={Household}/>
        <Route exact path="/household/:id/AllBills" component={AllBills}/>
        <Route exact path="/household/:household_id/bills" component={NewBill} />
        <Route exact path="/household/:id/AllBills/:id" component={Bill}/>
        <Route exact path="/household/:household_id/bills/:id" component={EditBill}/>
        <Route exact path="/users/:id" component={UserProfile}/>
        <Route exact path="/users/:id/edit" component={EditUser}/>

        </div>
      </Router>
    );
  }
}

export default App;
