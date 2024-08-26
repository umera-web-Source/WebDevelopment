import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import HotelsApidata from "../JsonData/hotelsapi.json";
import HotelsOfflinedata from "../JsonData/hotelsoffline.json";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Hotels() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [activeTab, setActiveTab] = useState("apiHotels");
  const itemsPerPage = 8;
  const navigate = useNavigate();

  const totalPages =
    activeTab === "apiHotels"
      ? Math.ceil(HotelsApidata.length / itemsPerPage)
      : Math.ceil(HotelsOfflinedata.length / itemsPerPage);

  const pageNum = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
  } else {
    if (currentPage <= 2) {
      pageNum.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pageNum.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNum.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  useEffect(() => {
    let arr = [];
    const data = activeTab === "apiHotels" ? HotelsApidata : HotelsOfflinedata;
    for (
      let i = (currentPage - 1) * itemsPerPage;
      i < currentPage * itemsPerPage && i < data.length;
      i++
    ) {
      arr.push(data[i]);
    }
    setDataPerPage(arr);
  }, [currentPage, activeTab]);

  /* const openHotel = (event, tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1); // Reset to first page when tab changes
  }; */
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
        {halfStar === 1 && <span>&#9734;</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i + fullStars + 1}>&#9734;</span>
        ))}
      </>
    );
  };
  const handleButtonClick = () => {
    navigate("/HotelsForm");
  };

  const hoteloptions = [
    { value: 1, label: "Court Yard" },
    { value: 2, label: "Court Yard" },
    { value: 3, label: "Court Yard" },
  ];
  const cityoptions = [
    { value: 1, label: "Banglore" },
    { value: 2, label: "Chennai" },
    { value: 3, label: "Mumbai" },
  ];
  const countryoptions = [
    { value: 1, label: "India" },
    { value: 2, label: "USA" },
    { value: 3, label: "UK" },
  ];

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Hotels</h3>
        <div>Manage your hotels and customize.</div>
        {/* <div className="mt-2">
          <button
            className={`btn table-data-tabs-inactive ${
              activeTab === "apiHotels" ? "table-data-tabs-active" : ""
            }`}
            onClick={(e) => openHotel(e, "apiHotels")}
          >
            API Hotels
          </button>
          <button
            className={`btn table-data-tabs-inactive ${
              activeTab === "offlineHotels" ? "table-data-tabs-active" : ""
            }`}
            onClick={(e) => openHotel(e, "offlineHotels")}
          >
            Offline Hotels
          </button>
        </div> */}
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto d-flex">
        <Select
            options={hoteloptions}
            placeholder="Hotel Name"
            classNamePrefix="custom-select"
          />
         
          <Select
            options={countryoptions}
            placeholder="Country"
            classNamePrefix="custom-select"
          />
           <Select
            options={cityoptions}
            placeholder="City"
            classNamePrefix="custom-select"
          />
        </div>
        <div className="col-auto d-flex">
          <input
            type="search"
            className="filter-inputs"
            placeholder="Search by keywords"
            id="packages-search"
          />
          <button className="btn add-new-button" onClick={handleButtonClick}>
            <FaPlus className="icon" />
            Add Hotel
          </button>
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <table className="w-100 data-table table table-hover">
            <thead className="">
              <tr className="py-3">
                <th>Hotel</th>
                <th>Rating</th>
                <th>Description</th>
                <th>Country</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((hotel, index) => (
                <tr key={index}>
                  <td className="fw-semibold">
                    {hotel.Hotel}
                    <div className="by-marriot-text">By Marriot</div>
                  </td>
                  <td className="hotel-rating-column">
                    {renderStars(hotel.Rating)}{" "}
                    {/* Render stars based on rating */}
                  </td>
                  <td>{hotel.Description}</td>
                  <td>{hotel.Country}</td>
                  <td>{hotel.City}</td>
                  <td className="">
                    {hotel.action}
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
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
          <div>
            <select className="table-control-input">
              <option selected>10 items per page</option>
              <option value={1}>20 items per page</option>
              <option value={2}>30 items per page</option>
              <option value={3}>40 items per page</option>
              <option value={3}>50 items per page</option>
            </select>
          </div>
          <ul className="pagination">
            <li
              className={`page-item pagination-page-items ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {pageNum.map((page, i) => (
              <li
                className={`page-item pagination-page-items ${
                  currentPage === page ? "active" : ""
                }`}
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
              className={`page-item pagination-page-items ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Next"
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
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

export default Hotels;
