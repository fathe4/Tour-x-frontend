import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/AboutPage/About';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import Contact from './Components/ContactPage/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/privateRoute';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';

import MyBookings from './Components/MyBookings/MyBookings';

import Header from './Components/Shared/Header/Header';
import PlaceBooking from './Components/TourPackages/PlaceBooking';
import TourPackagesPage from './Components/TourPackagesPage/TourPackagesPage';
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
            <Route path='/tour-packages'>
              <TourPackagesPage></TourPackagesPage>
            </Route>
            <Route path='/about-us'>
              <About></About>
            </Route>
            <Route path='/contact-us'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/booking/:packageId'>
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
            <PrivateRoute path='/my-booking/'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/manage-all-bookings/'>
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path='/add-new-package/'>
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
