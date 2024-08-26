import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import addnewmatchdata from "../JsonData/addnewmatch (1).json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function AddNewMatchTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 15;
  const navigate = useNavigate();

  const totalPages = Math.ceil(addnewmatchdata.length / itemsPerPage);

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
    for (
      let i = (currentPage - 1) * itemsPerPage;
      i < currentPage * itemsPerPage && i < addnewmatchdata.length;
      i++
    ) {
      arr.push(addnewmatchdata[i]);
    }
    setDataPerPage(arr);
  }, [currentPage]);

  const handleButtonClick = () => {
    navigate("/Addbanner");
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">IPL - 2022 India</h3>
        <div>26 Mar 2022 - 29 May 2022</div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto">
          <select className="filter-inputs">
            <option selected>Match Type</option>
            <option value={1}>Match Type</option>
            <option value={2}>T20</option>
            <option value={3}>IPL</option>
          </select>
          <select className="filter-inputs">
            <option selected>Stadium</option>
            <option value={1}>Wankhede Stadium</option>
            <option value={2}>Wankhede Stadium</option>
            <option value={3}>Wankhede Stadium</option>
          </select>
          <select className="filter-inputs">
            <option selected>Team</option>
            <option value={1}>CSK</option>
            <option value={2}>KKR</option>
            <option value={3}>RCB</option>
          </select>
          <select className="filter-inputs">
            <option selected>Country</option>
            <option value={1}>India</option>
            <option value={2}>USA</option>
            <option value={3}>UK</option>
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
            <button
              className="btn add-new-button"
              onClick={handleButtonClick}
            >
              <FaPlus className="icon" />
              Add Match
            </button>
          </div>
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <table className="w-100 data-table table-hover">
            <thead className="">
              <tr className="py-3">
                <th>S. No.</th>
                <th>Title</th>
                <th>Match Type</th>
                <th>Teams</th>
                <th>Scores</th>
                <th>Stadium</th>
                <th>Date</th>
                <th>Publish</th>
                <th>Enable Booking</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((addnewmatch, index) => {
                return (
                  <tr key={index}>
                    <td scope="row">{addnewmatch.SNo}</td>
                    <td>{addnewmatch.Title}</td>
                    <td>{addnewmatch.MatchType}</td>
                    <td>
                      {addnewmatch.Teams?.split("\n").map((line, index) => (
                        <div className="" key={index}>
                          {line}
                        </div>
                      ))}
                    </td>
                    <td>
                      {addnewmatch.Scores?.split("\n").map((line, index) => (
                        <div className="" key={index}>
                          {line}
                        </div>
                      ))}
                    </td>
                    <td>
                      {addnewmatch.Stadium?.split("\n").map((line, index) => (
                        <div className="" key={index}>
                          {line}
                        </div>
                      ))}
                    </td>
                    <td>
                      {addnewmatch.Date?.split("\n").map((line, index) => (
                        <div className="" key={index}>
                          {line}
                        </div>
                      ))}
                    </td>
                    <td>
                      <label
                        className="checkbox-container me-4"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <input
                          type="checkbox"
                          checked={addnewmatch.Publish}
                          readOnly
                          style={{ width: "20px", height: "20px" }}
                        />
                      </label>
                    </td>
                    <td className="">
                      <label
                        className="checkbox-container me-4"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <input
                          type="checkbox"
                          checked={addnewmatch.enableBooking}
                          readOnly
                          style={{ width: "20px", height: "20px" }}
                        />
                      </label>
                    </td>
                    <td className="">
                      {addnewmatch.action}
                      <button className="action-icon">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button className="action-icon">
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
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

export default AddNewMatchTable;
