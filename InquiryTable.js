import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import inquirydata from "../JsonData/InquiryTable (1).json"
import { useNavigate } from "react-router-dom";

function InquiryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 10;
  const navigate = useNavigate()

  const totalPages = Math.ceil(inquirydata.length / itemsPerPage);

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
      i < currentPage * itemsPerPage && i < inquirydata.length;
      i++
    ) {
      arr.push(inquirydata[i]);
    }
    setDataPerPage(arr);
  }, [currentPage]);

  const InquiryDetails = ()=>{
    navigate('/InquiryForm')
  }

  return (
    <div className="page-container">
      <div className="mb-10">
        <h3 className="my-0">Inquirys</h3>
        <div>View list of inquires and their Status.</div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto">
        </div>
        <div className="col-auto d-flex">
          <input
            type="search"
            className="filter-inputs"
            placeholder="Search by keywords"
            id="packages-search"
          />
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <table className="w-100 data-table table-hover">
            <thead className="">
              <tr className="py-3">
                <th>Name</th>
                <th>Email ID</th>
                <th>Message</th>
                <th>Client Contact</th>
                <th>Enquiry Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((inquiry, index) => {
                return (
                  <tr key={index}>
                    <td scope="row">{inquiry.Name}</td>
                    <td>{inquiry.EmailId}</td>
                    <td>{inquiry.Message}</td>
                    <td>{inquiry.ClientContact}</td>
                    <td>
                      <select className="filter-inputs">
                        
                        <option value={1}>Open</option>
                        <option value={2}>Closed</option>
                        <option value={3}>Pending</option>
                      </select>
                      {inquiry.EnquiryStatus}
                    </td>
                    <td>
                      <button className="action-view-btn" onClick={InquiryDetails}>View</button>
                      {inquiry.Action}
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

export default InquiryTable;
