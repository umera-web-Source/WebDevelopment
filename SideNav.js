import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CrickbusterMiniLogo from '../Images/CrickbusterMiniLogo.png';
import Logo from '../Images/Logo.png';

const SideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside id="sidebar-wrapper">
      <div className="sidebar-brand py-2">
        <img src={CrickbusterMiniLogo} className="mini-logo" alt="" />
        <h2><img src={Logo} className="w-75" alt="" /></h2>
      </div>
      <ul className="sidebar-nav">
        <li className={currentPath === '/' || currentPath === '/dashboard' || currentPath === '/InquiryList' || currentPath === '/InquiryForm' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link to="/dashboard">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className={currentPath === '/packages' || currentPath === '/PackagesForm' || currentPath === '/PackagesViewForm' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Packages">
          <Link to="/packages">
            <i className="bi bi-bag"></i> Packages
          </Link>
        </li>
        <li className={currentPath === '/tournaments' || currentPath === '/TournamentForm' || currentPath === '/AddNewMatchForm' || currentPath === '/Addbanner' || currentPath === '/Adddoubleheader' || currentPath === '/AddnewmatchTable' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Tournaments">
          <Link to="/tournaments">
            <i className="bi bi-trophy"></i> Tournaments
          </Link>
        </li>
        <li className={currentPath === '/stadiums' || currentPath === '/stadiumform' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Stadiums">
          <Link to="/stadiums">
            <i className="bi bi-building"></i> Stadiums
          </Link>
        </li>
        <li className={currentPath === '/teamstable' || currentPath === '/TeamsForm' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Teams">
          <Link to="/teamstable">
            <i className="bi bi-people"></i> Teams
          </Link>
        </li>
        <li className={currentPath === '/HotelsTable' || currentPath === '/HotelsForm' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Hotels">
          <Link to="/HotelsTable">
            <i className="bi bi-buildings"></i> Hotels
          </Link>
        </li>
        {/* <li className={currentPath === '/Flightstable' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Flights">
          <Link to="/Flightstable">
            <i className="bi bi-airplane"></i> Flights
          </Link>
        </li> */}
        <li className={currentPath === '/attractionsTable' || currentPath === '/attractionsform' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Attractions">
          <Link to="/attractionsTable">
            <i className="bi bi-person"></i> Attractions
          </Link>
        </li>
        <li className={currentPath === '/intercity' || currentPath === '/intercityform' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Intra/Intercity">
          <Link to="/intercity">
            <i className="bi bi-bus-front"></i> Intra/Intercity
          </Link>
        </li>
        <li className={currentPath === '/crickbusterTours' || currentPath === '/CrickbusterTourForm' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Crickbuster Tours">
          <Link to="/crickbusterTours">
            <i className="bi bi-person"></i> Crickbuster Tours
          </Link>
        </li>
        <li className={currentPath === '/landingpageform'|| currentPath === '/bannertable' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Landing Page">
          <Link to="/bannertable">
            <i className="bi bi-window-fullscreen"></i> Landing Page
          </Link>
        </li>
        <li className={currentPath === '/ManageContent' ? 'active' : ''} data-toggle="tooltip" data-placement="right" title="Manage Content">
          <Link to="/ManageContent">
            <i className="bi bi-gear"></i> Manage Content
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
