import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AddBanner() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/Adddoubleheader");
  };

  const [activeTab, setActiveTab] = useState("matches");

  const showContent = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">IPL - 2022 India</h3>
        <div>26 Mar 2022 - 29 May 2022</div>
        <div className="d-flex justify-content-between mb-0 mt-3">
          <div className="col-auto">
            <button
              className={`btn table-data-tabs-inactive ${
                activeTab === "matches" ? "table-data-tabs-active" : ""
              }`}
              onClick={() => showContent("matches")}
            >
              Add Matches
            </button>
            <button
              className={`btn table-data-tabs-inactive ${
                activeTab === "hotels" ? "table-data-tabs-active" : ""
              }`}
              onClick={() => showContent("hotels")}
            >
              Add Hotels
            </button>
          </div>
          <button className="btn add-new-button mx-2" onClick={handleButtonClick}>
            <FaPlus className="icon" />
            Add Double Header
          </button>
        </div>
      </div>

      {activeTab === "matches" && (
        <form className="form-section">
          <p className="form-section-heading">Add Matches</p>
          <div className="p-4 form-inputs-section">
            <div className="row">
              <div className="col-md-6">
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="match-title">Title</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="IPL"
                      id="match-title"
                    />
                    <div className="error-message">*Please fill this field</div>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="match-type">Match Type</label>
                  </div>
                  <div className="col-sm-8">
                    <select className="form-input" id="match-type">
                      <option value="National">National</option>
                      <option value="T20">T20</option>
                      <option value="IPL">IPL</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-sm-4">
                    <label htmlFor="match-date-time" className="form-label">Date & Time</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      className="form-input"
                      type="datetime-local"
                      id="match-date-time"
                      placeholder="March 26, 2022"
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="match-description">Description</label>
                  </div>
                  <div className="col-sm-8">
                    <textarea
                      className="form-input"
                      rows={4}
                      id="match-description"
                      placeholder="Near Airport"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="stadium">Stadium</label>
                  </div>
                  <div className="col-sm-8">
                    <select className="form-input" id="stadium">
                      <option value="Wankhede Stadium">Wankhede Stadium</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="city">City</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Mumbai"
                      id="city"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="teams">Teams</label>
                  </div>
                  <div className="col-sm-8">
                    <select className="form-input" id="teams">
                      <option value="CSK">CSK</option>
                      <option value="KKR">KKR</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="results">Results</label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="KKR Won By 6 Wickets"
                      id="results"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-end py-5">
                <div className="py-2">
                  <button className="form-cancel-btn">CANCEL</button>
                  <button className="form-save-btn">SAVE</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {activeTab === "hotels" && (
        <form className="form-section">
          <p className="form-section-heading">Add Hotels</p>
          <div className="p-4 form-inputs-section">
            <div className="row">
              <div className="col-lg-12">
                <table className="table table-borderless">
                  <thead className="border-bottom">
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Hotel Name</th>
                      <th scope="col">Rooms</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Address</th>
                      <th scope="col">User's Choice</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <select
                          name="select-hotel"
                          id="select-hotel"
                          className="package-table-input"
                        >
                          <option value="Select Hotels">Select Hotels</option>
                          <option value="Marriot">Marriot</option>
                          <option value="Novotel">Novotel</option>
                          <option value="Radisson">Radisson</option>
                          <option value="Hilton">Hilton</option>
                        </select>
                      </td>
                      <td>
                        <select
                          name="select-room"
                          id="select-room"
                          className="package-table-input"
                        >
                          <option value="Category">Category</option>
                          <option value="Suite">Suite</option>
                          <option value="King Room">King Room</option>
                          <option value="Double Room">Double Room</option>
                          <option value="Deluxe Room">Deluxe Room</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="date"
                          className="package-input"
                          id="package-dates"
                          name="package-dates"
                        />
                      </td>
                      <td>
                        <textarea
                          name="text"
                          id="address"
                          placeholder="Description"
                        ></textarea>
                      </td>
                      <td>
                        <label className="checkbox-container ps-4">
                          <input
                            type="checkbox"
                            readOnly
                            style={{ width: "20px", height: "20px" }}
                          />
                        </label>
                      </td>
                      <td className="d-flex">
                        <button className="action-btn">
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                        <span>
                          <button className="add-package-add-btn">Add</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-end py-5">
                <div className="py-2">
                  <button className="form-cancel-btn">CANCEL</button>
                  <button className="form-save-btn">SAVE</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddBanner;
