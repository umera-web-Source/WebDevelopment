import React from "react";
import PackagesOnLive from "./PackagesOnLive";
import { Outlet, useNavigate } from "react-router-dom";
import OrderPagination from "./OrderPagination";
import { FaPlus } from "react-icons/fa6";
import SalesChart from "./SalesChart";
import Inquiry from "./Inquiry"

const Dashboard = () => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/PackagesForm');
  };
  return (

    <div className="m-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="my-0">Dashboard</h3>
          <div>Manage your package and customize.</div>
        </div>
        <div>
          <button className=" btn add-new-button py-1" onClick={ handleButtonClick}><FaPlus className="icon"/>Add Packages</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <PackagesOnLive />
        </div>
        <div className="col-lg-6 mb-3">
          <SalesChart/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mb-3">
          <OrderPagination />
        </div>
        <div className="col-lg-4 mb-3">
          <Inquiry/>
        </div>
      </div>
    </div>
    
  
  );
};

export default Dashboard;
