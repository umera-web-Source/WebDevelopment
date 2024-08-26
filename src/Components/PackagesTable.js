import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import PackagesTournamentData from "../JsonData/PackagesTournamentData.json";
import PackagesMatchData from "../JsonData/PackagesMatchData.json";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Modal, Button, Table } from "react-bootstrap";

function PackagesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const [activeTab, setActiveTab] = useState("PackagesTournamnetData");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting item:", selectedItem);
    setShowModal(false);
    setSelectedItem(null);
  };

  const AddNewPackages = () => {
    navigate("/PackagesForm");
  };

  const totalPages =
    activeTab === "PackagesTournamnetData"
      ? Math.ceil(PackagesTournamentData.length / itemsPerPage)
      : Math.ceil(PackagesMatchData.length / itemsPerPage);

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
       
       +- "...",
        totalPages
      );
    }
  }

  useEffect(() => {
    let arr = [];
    const data =
      activeTab === "PackagesTournamnetData"
        ? PackagesTournamentData
        : PackagesMatchData;

        const filteredData = data.filter((packageItem) => {
          const searchKeys = ["Title", "Date", "Spotsbooked", "Spotsleft"];
          return searchKeys
            .map((key) => packageItem[key] ? packageItem[key].toString().toLowerCase() : "")
            .some((value) => value.includes(searchQuery.toLowerCase()));
        });

    for (
      let i = (currentPage - 1) * itemsPerPage;
      i < currentPage * itemsPerPage && i < filteredData.length;
      i++
    ) {
      arr.push(filteredData[i]);
    }
    setDataPerPage(arr);
  }, [currentPage, activeTab, searchQuery]);

  const openHotel = (event, tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  const packagesActiveButton = [
    { value: 1, label: "Active" },
    { value: 2, label: "Inactive" },
  ];

  return (
    <div className="page-container">
      <div className="">
        <h3 className="my-0 ">Packages</h3>
        <div className="mb-4 ">Manage package settings.</div>
        <div className="filter-container mb-4">
          <div className="col-auto ">
            <button
              className={`btn table-data-tabs-inactive ${
                activeTab === "PackagesTournamnetData"
                  ? "table-data-tabs-active"
                  : ""
              }`}
              onClick={(e) => openHotel(e, "PackagesTournamnetData")}
            >
              Tournament Level
            </button>
            <button
              className={`btn table-data-tabs-inactive ${
                activeTab === "PackagesMatchData"
                  ? "table-data-tabs-active"
                  : ""
              }`}
              onClick={(e) => openHotel(e, "PackagesMatchData")}
            >
              Match Level
            </button>
          </div>

          <div className="col-auto d-flex">
            <input
              type="search"
              className="filter-inputs"
              placeholder="Search by keywords"
              id="packages-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Select
              options={packagesActiveButton}
              placeholder="Active"
              classNamePrefix="custom-select_Activebtn"
            />

            <button
              className="btn add-new-button ms-2 pb-1"
              onClick={AddNewPackages}
            >
              <FaPlus className="icon" />
              Add Package
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="data-table-container">
          <Table className="w-100 data-table table-hover">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Title</th>
                <th> Package Created Date & Time</th>
                <th>Spots booked</th>
                <th>Spots left</th>
                <th>Publish</th>
                <th>Enable booking</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((Packages, index) => (
                <tr key={index}>
                  <td scope="row">{Packages.No}</td>
                  <td>
                    {Packages.Title?.split("\n").map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </td>
                  <td>
                    {Packages.Date?.split("\n").map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </td>
                  <td>{Packages.Spotsbooked}</td>
                  <td>{Packages.Spotsleft}</td>
                  <td>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={Packages.Publish}
                        readOnly
                        style={{ width: "20px", height: "20px" }}
                      />
                    </label>
                  </td>
                  <td>
                    <label className="checkbox-container ms-3">
                      <input
                        type="checkbox"
                        checked={Packages.EnableBooking}
                        readOnly
                        style={{ width: "20px", height: "20px" }}
                      />
                    </label>
                  </td>
                  <td>
                    {Packages.action}
                    <button className="action-icon">
                      <i className="fa-regular fa-file"></i>
                    </button>
                    <button className="action-icon" onClick={AddNewPackages}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      className="action-icon"
                      variant="danger"
                      onClick={() => handleDeleteClick(Packages)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
          <div>
            <select className="table-control-input">
              <option defaultValue>10 items per page</option>
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

      {/* Start delete modal */}
      <Modal show={showModal} onHide={handleCloseModal} >
        <div className="close d-flex justify-content-end " onClick={handleCloseModal}>
          &times;
        </div>
        <Modal.Header className="border border-0  d-flex justify-content-center p-0">
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border border-0 d-flex justify-content-center">
          <h6>Are you sure you want to delete this item?</h6>
        </Modal.Body>
        <Modal.Footer className="border border-0 d-flex justify-content-center align-items-center">
          <Button className="modal-No-btn" onClick={handleCloseModal}>
            No
          </Button>
          <Button className="modal-Yes-btn" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End delete modal */}
    </div>
  );
}

export default PackagesTable;
