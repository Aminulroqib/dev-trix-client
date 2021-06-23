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

function App() {
  <StripeProvider apiKey="pk_test_12345">
      
    </StripeProvider>
  return (
    <Router>
    <div>
      <Switch>
      <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
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
    </div>
  </Router>
  );
}

export default App;
