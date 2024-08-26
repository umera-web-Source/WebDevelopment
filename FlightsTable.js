import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import FlightsApidata from '../JsonData/FlightsApitab.json';
import FlightsOfflinedata from '../JsonData/FlightsOfflinetab.json';
import { useNavigate } from "react-router-dom";

function Flights() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('apiFlights');
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 8;
  const navigate = useNavigate();

  const totalPages = activeTab === 'apiFlights'
    ? Math.ceil(FlightsApidata.length / itemsPerPage)
    : Math.ceil(FlightsOfflinedata.length / itemsPerPage);

  const pageNum = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
  } else {
    if (currentPage <= 2) {
      pageNum.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 1) {
      pageNum.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNum.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  }

  useEffect(() => {
    let arr = [];
    const data = activeTab === 'apiFlights' ? FlightsApidata : FlightsOfflinedata;
    for (let i = (currentPage - 1) * itemsPerPage; i < currentPage * itemsPerPage && i < data.length; i++) {
      arr.push(data[i]);
    }
    setDataPerPage(arr);
  }, [currentPage, activeTab]);

  const openTab = (event, tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1); // Reset to first page when tab changes
  };
  const handleButtonClick = () => {
    navigate('/FlightstableForm');
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Flights</h3>
        <div>Manage flights and the details of the flights.</div>
      </div>
      <div>
        <button className={`btn table-data-tabs-inactive ${activeTab === 'apiFlights' ? 'table-data-tabs-active' : ''}`}
          onClick={(e) => openTab(e, 'apiFlights')}>
          API Flights
        </button>
        <button className={`btn table-data-tabs-inactive ${activeTab === 'offlineFlights' ? 'table-data-tabs-active' : ''}`} onClick={(e) => openTab(e, 'offlineFlights')}>
          Offline Flights
        </button>
      </div>
      <div className="filter-container py-2">
        <div className="col-auto">
          <input type="text" name="number" placeholder="Departure" className="filter-inputs me-2 " />
          <input type="text" name="text" placeholder="Checkin" className="filter-inputs me-2 " />
          <input type="text" name="number" placeholder="Destination" className="filter-inputs me-2" />
          <select className="filter-inputs">
            <option selected>City</option>
            <option value={1}>Banglore</option>
            <option value={2}>Chennai</option>
            <option value={3}>Mumbai</option>
          </select>
        </div>
        <div className="col-auto d-flex">
          <input
            type="search"
            className="filter-inputs"
            placeholder="Search by keywords"
            id="packages-search"
          />
          <div>
            <button className="btn add-new-button" onClick={handleButtonClick}>
              <FaPlus className="icon" />
              Add New Flights
            </button>
          </div>
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          {activeTab === 'apiFlights' && (
            <table className="w-100 data-table table table-hover">
              <thead className="py-4">
                <tr className="py-3">
                  <th>Airlines</th>
                  <th>Departure</th>
                  <th>Date & Time</th>
                  <th>Destination</th>
                  <th>Duration</th>
                  <th>Class</th>
                  <th>Add To database</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataPerPage.map((flights, index) => (
                  <tr key={index}>
                   <td className="fw-semibold">
                    {flights.flights}
                    <div className="by-marriot-text">London-Pitsburg</div>
                  </td>
                    <td>{flights.departure}</td>
                    <td>{flights.dateAndTime}</td>
                    <td>{flights.destination}</td>
                    <td>{flights.duration}</td>
                    <td>{flights.class}</td>
                    <td className="text-center">
                      <label className="checkbox-container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="checkbox" checked={flights.enableBooking} readOnly style={{ width: '20px', height: '20px' }} />
                      </label>
                    </td>
                    <td className="">
                      {flights.action}
                      <button className="action-icon">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className="action-icon">
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {activeTab === 'offlineFlights' && (
            <table className="w-100 data-table">
              <thead className="">
                <tr className="py-3">
                  <th>Flight name</th>
                  <th>Booking</th>
                  <th>Trip</th>
                  <th>Departure Date & Time</th>
                  <th>Departure</th>
                  <th>Destination</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataPerPage.map((flightsOffline, index) => (
                  <tr key={index}>
                    <td scope="row" className="court-yard-text">
                      {/* {flightsOffline.FlightName} */}
                      {flightsOffline.FlightName?.split('\n').map((line, index) => (
                            <div className="" key={index}>{line}</div>
                             )   )}
                    </td>
                    <td>{flightsOffline.Booking}</td>
                    <td>{flightsOffline.Trip}</td>
                    <td>{flightsOffline.DepartureDateTime}</td>
                    <td>{flightsOffline.Departure}</td>
                    <td>{flightsOffline.Destination}</td>
                    <td className="">
                      {flightsOffline.action}
                      <button className="action-icon">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className="action-icon">
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
          <div className="btn-group px-4 p-0">
            <button type="button" className="btn dropdown-toggle data-filter-button"
              data-bs-toggle="dropdown" aria-expanded="false">
              10 Items
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">20 items</a></li>
              <li><a className="dropdown-item" href="#">30 Items</a></li>
              <li><a className="dropdown-item" href="#">40 Items</a></li>
              <li><a className="dropdown-item" href="#">50 Items</a></li>
            </ul>
          </div>
          <ul className="pagination">
            <li
              className={`page-item pagination-page-items ${currentPage === 1 ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {pageNum.map((page, i) => (
              <li
                className={`page-item pagination-page-items ${currentPage === page ? "active" : ""}`}
                key={i}
              >
                {page === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}
            <li
              className={`page-item pagination-page-items ${currentPage === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Flights;
