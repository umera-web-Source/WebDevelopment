import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import tournamentData from "../JsonData/tournament.json";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Tournament() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const totalPages = Math.ceil(tournamentData.length / itemsPerPage);

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

  const MatchesTable = () => {
    navigate("/AddnewmatchTable");
  };

  useEffect(() => {
    const filteredData = tournamentData.filter((tournament) =>{
      const searchKeys = ["Tournament","Location","StartDate","EndDate","NoOfMatches","Result"]
      return searchKeys.map((key) => tournament[key]? tournament[key].toString().toLowerCase():"")
      .some((value) => value.includes(search.toLowerCase()))
    }
    );
    const arr = [];
    for (
      let i = (currentPage - 1) * itemsPerPage;
      i < currentPage * itemsPerPage && i < filteredData.length;
      i++
    ) {
      arr.push(filteredData[i]);
    }
    setDataPerPage(arr);
  }, [currentPage, search]);

  const handleButtonClick = () => {
    navigate("/TournamentForm");
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const tournamentleveloptions = [
    { value: 1, label: "International" },
    { value: 2, label: "National" },
    { value: 3, label: "County" },
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
        <h3 className="my-0">Tournament</h3>
        <div>Manage tournament settings.</div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto d-flex">
          <Select
            options={tournamentleveloptions}
            placeholder="Tournament Level"
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
            value={search}
            onChange={handleSearchChange}
          />
          <button className="btn add-new-button" onClick={handleButtonClick}>
            <FaPlus className="icon" />
            Add Tournament
          </button>
        </div>
      </div>
      <div className="border bg-white">
        <div className="table-wrapper">
          <table className="w-100 data-table table table-hover">
            <thead>
              <tr className="py-3">
                <th>Tournament</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>No. of Matches</th>
                <th>Result</th>
                <th>Publish</th>
                <th>Enable Booking</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((tournament, index) => (
                <tr key={index}>
                  <td>{tournament.Tournament}</td>
                  <td>{tournament.Location}</td>
                  <td>{tournament.StartDate}</td>
                  <td>{tournament.EndDate}</td>
                  <td>
                    {tournament.NoOfMatches}
                    <button className="action-view-btn" onClick={MatchesTable}>
                      View
                    </button>
                  </td>
                  <td>{tournament.Result}</td>
                  <td>
                    <label
                      className="checkbox-container"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <input
                        type="checkbox"
                        checked={tournament.Publish}
                        readOnly
                        style={{ width: "20px", height: "20px" }}
                      />
                    </label>
                  </td>
                  <td className="text-center">
                    <label
                      className="checkbox-container"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <input
                        type="checkbox"
                        checked={tournament.enableBooking}
                        readOnly
                        style={{ width: "20px", height: "20px" }}
                      />
                    </label>
                  </td>
                  <td className="">
                    <button className="action-icon" onClick={handleButtonClick}>
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
              <option value={4}>50 items per page</option>
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
                onClick={() => setCurrentPage(currentPage - 1)}
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

export default Tournament;
