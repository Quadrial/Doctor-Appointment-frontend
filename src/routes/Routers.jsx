import React from "react";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Contacts from "../Pages/Contacts";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";

import { Router, Route, Routes } from "react-router-dom";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  );
};

export default Routers;
