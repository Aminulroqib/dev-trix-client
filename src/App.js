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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  <StripeProvider apiKey="pk_test_12345">
      
    </StripeProvider>
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/orderlist">
          <OrderList></OrderList>
        </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/book">
          <Book></Book>
        </Route>
        <Route path="/bookinglist">
          <BookingList></BookingList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
