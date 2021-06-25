import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { StripeProvider } from 'react-stripe-elements';
import Book from '../src/components/Customer/Book/Book'
import BookingList from '../src/components/Customer/BookingList/BookingList'
import Review from './components/Customer/Review/Review';
import Admin from './components/Admin/Admin/Admin';
import Login from './components/Login/Login/Login';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  <StripeProvider apiKey="pk_test_12345">
      
    </StripeProvider>
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <PrivateRoute path="/addservice">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/orderlist">
          <OrderList></OrderList>
        </PrivateRoute>
        <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path="/bookinglist">
          <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
            <NoMatch/>
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
