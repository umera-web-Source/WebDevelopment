// Home.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideNav';
import HorizantalBar from './HorizantalBar';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div id="wrapper">
      <Sidebar />  
      <HorizantalBar/> 
      <section id="content-wrapper mt-2">
        {/* <Dashboard/> */}
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
