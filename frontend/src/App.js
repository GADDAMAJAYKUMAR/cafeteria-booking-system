import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import ViewBookings from './components/ViewBookings';
import TableBookingForm from './components/TableBookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
         <Route path="/email-verify" element={<EmailVerify/>}/>
         <Route path="/reset-password" element={<ResetPassword/>}/>
         <Route path="/profile" element={<Profile />} />
         <Route path="/view-bookings" element={<ViewBookings />} />
         <Route
            path="/booking"
            element={
             
                <TableBookingForm />
             
            }
          />

      </Routes>
    </Router>
  );
};

export default App;
