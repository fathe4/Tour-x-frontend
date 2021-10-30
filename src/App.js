import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/privateRoute';

import MyBookings from './Components/MyBookings/MyBookings';

import Header from './Components/Shared/Header/Header';
import PlaceBooking from './Components/TourPackages/PlaceBooking';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/booking/:packageId'>
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
            <PrivateRoute path='/my-booking/'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
