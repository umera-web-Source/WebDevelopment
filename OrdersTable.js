import React, { useEffect, useState } from "react";
import ordersData from "../JsonData/orders.json";
import { BiSolidPrinter } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  const pageNum = [];
  const navigate = useNavigate();

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
      let i = currentPage * itemsPerPage - itemsPerPage;
      i < currentPage * itemsPerPage && i < ordersData.length;
      i++
    ) {
      arr.push(ordersData[i]);
    }
    setDataPerPage(arr);
  }, [currentPage]);

  const OrdersForm = () => {
    navigate("/OrdersForm");
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Orders</h3>
        <div>View the list of orders and the order details.</div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto d-flex">
          <input
            type="date"
            className="filter-inputs"
            placeholder="Mar 02- Mar 05, 2022"
            id=""
          />
          <div>
            <button className="btn add-new-button print-btn rounded">
              <BiSolidPrinter className="icon me-2 fs-3" />
              Print
            </button>
          </div>
        </div>
        <div className="col-auto d-flex">
          <select className="filter-inputs">
            <option selected>Search by</option>
            <option value={1}>ID</option>
            <option value={2}>Date</option>
            <option value={3}>Order</option>
            <option value={3}>Category</option>
            <option value={3}>Client Name</option>
            <option value={3}>Client Contact</option>
            <option value={3}>Payment Status</option>
            <option value={3}>Price</option>
          </select>
          <input
            type="search"
            className="filter-inputs"
            placeholder="Search by keywords"
            id=""
          />
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <table className="w-100 data-table table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Order</th>
                <th>Category</th>
                <th>Client Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Payment Status</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((orders, index) => (
                <tr key={index}>
                  <td className="fw-bold">{orders.ordersId}</td>
                  <td>{orders.ordersDate}</td>
                  <td>{orders.ordersOrderName}</td>
                  <td>{orders.ordersCategory}</td>
                  <td>{orders.ordersClientName}</td>
                  <td>{orders.ordersContact}</td>
                  <td>{orders.ordersEmail}</td>
                  <td>{orders.ordersPaymentStatus}</td>
                  <td className="fw-bold">{orders.ordersPrice}</td>
                  <td className="">
                    <button className="action-view-btn" onClick={OrdersForm}>
                      View
                    </button>
                    <button className="action-icon ms-2">
                      <i class="fa-regular fa-trash-can"></i>
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
              <option selected>10 items</option>
              <option value={1}>20 items</option>
              <option value={2}>30 items</option>
              <option value={3}>40 items</option>
              <option value={3}>50 items</option>
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

export default OrdersTable;
