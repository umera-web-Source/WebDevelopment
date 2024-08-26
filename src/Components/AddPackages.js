import React, { useState, useRef } from "react";
import AttractionsPacakgeForm from "./AttractionsPacakgeForm";
import MatchesForm from "./MatchesForm";
import HotelsForm from "./HotelsForm";
import FlightsForm from "./FlightsForm";
import IntraIntercityForm from "./IntraIntercityForm";
import ItineraryForm from "./ItineraryForm";
import { useNavigate } from "react-router-dom";
import SeatsImage from "../Images/WhatsApp Image 2024-07-18 at 16.45.37.jpeg";
import stadium from "../Images/WhatsApp Image 2024-07-18 at 16.45.37.jpeg";
import { Modal, Button } from "react-bootstrap";
import { MdStadium } from "react-icons/md";

const AddPackages = () => {
  const [activeTab, setActiveTab] = useState("matches");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showContent = (tabName) => {
    setActiveTab(tabName);
  };
  const BackToPackagesTable = () => {
    navigate("/packages");
  };
  const PackagesViewForm = () => {
    navigate("/PackagesViewForm");
  };
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  return (
    <div className="App">
      <div className="container-fluid p-0">
        <div
          id="upper-matches"
          className={`content ${activeTab === "matches" ? "active" : ""}`}
        >
          <MatchesForm />
        </div>
        <div
          id="upper-hotels"
          className={`content ${activeTab === "hotels" ? "active" : ""}`}
        >
          <HotelsForm />
        </div>
        <div
          id="upper-flights"
          className={`content ${activeTab === "flights" ? "active" : ""}`}
        >
          <FlightsForm />
        </div>
        <div
          id="upper-attractions"
          className={`content ${activeTab === "attractions" ? "active" : ""}`}
        >
          <AttractionsPacakgeForm />
        </div>
        <div
          id="upper-intraIntercity"
          className={`content ${
            activeTab === "intraIntercity" ? "active" : ""
          }`}
        >
          <IntraIntercityForm />
        </div>
        <div
          id="upper-itinerary"
          className={`content ${activeTab === "itinerary" ? "active" : ""}`}
        >
          <ItineraryForm />
        </div>
      </div>
      <div className="container-fluid bg-white mb-5">
        <div className="tabs add-packages-tabs d-flex justify-content-start">
          <button
            className={`tab-link add-packages-tab-links ${
              activeTab === "matches" ? "active" : ""
            }`}
            onClick={() => showContent("matches")}
          >
            MATCHES
          </button>
          <button
            className={`tab-link ${activeTab === "hotels" ? "active" : ""}`}
            onClick={() => showContent("hotels")}
          >
            HOTELS
          </button>
          {/* <button
            className={`tab-link ${activeTab === "flights" ? "active" : ""}`}
            onClick={() => showContent("flights")}
          >
            FLIGHTS
          </button> */}
          <button
            className={`tab-link ${
              activeTab === "attractions" ? "active" : ""
            }`}
            onClick={() => showContent("attractions")}
          >
            ATTRACTIONS
          </button>
          <button
            className={`tab-link ${
              activeTab === "intraIntercity" ? "active" : ""
            }`}
            onClick={() => showContent("intraIntercity")}
          >
            INTRA/INTERCITY
          </button>
          <button
            className={`tab-link ${activeTab === "itinerary" ? "active" : ""}`}
            onClick={() => showContent("itinerary")}
          >
            ITINERARY
          </button>
        </div>
        <div
          id="bottom-matches"
          className={`content ${activeTab === "matches" ? "active" : ""}`}
        >
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead className=" border-bottom">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Matches</th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Tickets</th>
                    <th scope="col"></th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <select
                        name="select-tournament"
                        id="select-tournament"
                        className="package-table-input"
                      >
                        <option value="india">Select Match</option>
                        <option value="india">RCB Vs CSK</option>
                        <option value="india">INDIA Vs PAKISTAN</option>
                        <option value="india">CSK Vs SRH</option>
                        <option value="india">INDIA Vs USA</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        className="package-input w-75"
                        id="package-dates"
                        name="package-dates"
                        placeholder="Enter Dates"
                      />
                    </td>
                    <td className="d-flex">
                      <div>
                        <select
                          name="select-tournament"
                          id="select-tournament"
                          className="package-table-input"
                        >
                          <option value="india">Select Seat</option>
                          <option value="india">West Stand </option>
                          <option value="india">East Stand</option>
                          <option value="india">South Vip</option>
                          <option value="india">North Pavilion Upper</option>
                          <option value="india">South Corporate Boxes</option>
                        </select>
                      </div>
                      <div className="px-2 py-0">
                        <div className=" d-flex align-items-center" onClick={handleShow}>
                          <div className=" fs-3 mx-4 ">
                            {" "}
                            <MdStadium className="mb-4 package-stadium-icon" />
                          </div>
                          {/* {imageName} ({imageSize}Kb){" "} */}
                          {/* <span className="remove-file">&#x2716;</span> */}
                        </div>
                      </div>
                    </td>

                    <td></td>
                    <td className=" d-flex">
                      <button className="action-btn">
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                      <span className="action-btn">
                        <i className="fa-solid fa-arrow-left-long mt-2"></i>
                      </span>
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
              <div className=" py-2 ">
                <button className=" form-cancel-btn">CANCEL</button>
                <button className=" form-save-btn">SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom-hotels"
          className={`content ${activeTab === "hotels" ? "active" : ""}`}
        >
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead className=" border-bottom">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Match</th>
                    <th scope="col">Hotels</th>
                    <th scope="col">Rooms</th>
                    <th scope="col">Date </th>
                    <th scope="col">User's choice</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>-----</td>
                    <td>
                      <select
                        name="select-tournament"
                        id="select-tournament"
                        className="package-table-input"
                      >
                        <option value="india">Select Hotels</option>
                        <option value="india">Marriot</option>
                        <option value="india">Novotel</option>
                        <option value="india">Radisson </option>
                        <option value="india">Hilton</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name="select-tournament"
                        id="select-tournament"
                        className="package-table-input"
                      >
                        <option value="india">Category</option>
                        <option value="india">Suite</option>
                        <option value="india">King Rom</option>
                        <option value="india">Double Room</option>
                        <option value="india">Deluxe Room</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        className="package-input w-75"
                        id="package-dates"
                        name="package-dates"
                        placeholder="Enter Dates"
                      />
                    </td>
                    <td>
                      <label className="checkbox-container ps-4">
                        <input
                          type="checkbox"
                          check
                          readOnly
                          style={{ width: "20px", height: "20px" }}
                        />
                      </label>
                    </td>
                    <td>
                      <span>
                        <button className=" action-btn">
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </span>
                      <span>
                        <button className=" add-package-add-btn  ">Add</button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-end py-5">
              <div className=" py-2">
                <button className=" form-cancel-btn">CANCEL</button>
                <button className=" form-save-btn">SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom-attractions"
          className={`content ${activeTab === "attractions" ? "active" : ""}`}
        >
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead className=" border-bottom">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Attraction</th>
                    <th scope="col">Date </th>
                    <th scope="col">User's choice</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>
                      <select
                        name="select-tournament"
                        id="select-tournament"
                        className="package-table-input"
                      >
                        <option value="india">Select</option>
                        <option value="india">Beaches</option>
                        <option value="india">Tropical Islands</option>
                        <option value="india">Resorst</option>
                        <option value="india">National Parks</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        className="package-input w-50"
                        id="package-dates"
                        name="package-dates"
                        placeholder="Enter Dates"
                      />
                    </td>

                    <td>
                      <label className="checkbox-container ps-4">
                        <input
                          type="checkbox"
                          check
                          readOnly
                          style={{ width: "20px", height: "20px" }}
                        />
                      </label>
                    </td>
                    <td>
                      <span>
                        <button className=" action-btn">
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-end py-5">
              <div className=" py-2 ">
                <button className=" form-cancel-btn">CANCEL</button>
                <button className=" form-save-btn">SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom-intraIntercity"
          className={`content ${
            activeTab === "intraIntercity" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead className=" border-bottom">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Tranport</th>
                    <th scope="col">Departure </th>
                    <th scope="col">Destination </th>
                    <th scope="col">Departure Time </th>
                    <th scope="col">Travel Duration </th>
                    <th scope="col">User's choice</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>

                    <td>
                      <select
                        name="select-tournament"
                        id="select-tournament"
                        className="package-table-input"
                      >
                        <option value="india">Select</option>
                        <option value="india">Bus</option>
                        <option value="india">Train</option>
                        <option value="india">Cabs</option>
                      </select>
                    </td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>-----</td>
                    <td>
                      <label className="checkbox-container ps-4">
                        <input
                          type="checkbox"
                          check
                          readOnly
                          style={{ width: "20px", height: "20px" }}
                        />
                      </label>
                    </td>
                    <td>
                      <span>
                        <button className=" action-btn">
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-end py-5">
              <div className=" py-2 ">
                <button className=" form-cancel-btn">CANCEL</button>
                <button className=" form-save-btn">SAVE</button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom-itinerary"
          className={`content ${activeTab === "itinerary" ? "active" : ""}`}
        >
          <div className="row">
            <div className="col-lg-12 py-4 px-5">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row align-items-center mb-4">
                      <label for="hotel-name" className="package-label">
                        Number of days
                      </label>
                      <input
                        type="text"
                        className="package-input"
                        id="hotel-name"
                        name="hotel-name"
                        placeholder="Input"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row  mb-4 mt-2">
                      <div className="col-lg-2">
                        <label for="team-logo" className="package-label">
                          Images
                        </label>
                      </div>

                      <div className="col-lg-8 p-0">
                        <div className="teams-file-upload ">
                          <label
                            for="team-logo"
                            className="teams-file-upload-input"
                          >
                            Team Logo
                          </label>
                          <input
                            type="file"
                            id="team-logo"
                            name="team-logo"
                            className="teams-file-upload-input"
                            multiple
                          />
                          <span className="teams-file-icon">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                          </span>
                        </div>
                        <div className="teams-file-info">
                          CSK.jpeg (500Kb){" "}
                          <span className="remove-file">&#x2716;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-borderless">
                <thead className=" border-bottom">
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Date</th>
                    <th scope="col">Activity </th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">-----</th>
                    <td>
                      {" "}
                      <input
                        type="date"
                        className="package-input w-50"
                        id="package-dates"
                        name="package-dates"
                        placeholder="Enter Dates"
                      />
                    </td>
                    <td>-------</td>
                    <td>
                      <textarea
                        id="banner-description"
                        name="banner-description"
                        placeholder="-------------"
                        className="package-table-input"
                      ></textarea>
                    </td>
                    <td>
                      <span>
                        <button className="action-btn">
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </span>
                      <span>
                        <button className=" add-package-add-btn ">Add</button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-end py-5">
              <div className=" py-2 ">
                <button
                  href
                  className="form-cancel-btn"
                  onClick={BackToPackagesTable}
                >
                  CANCEL
                </button>
                <button
                  href
                  className="form-save-btn"
                  onClick={PackagesViewForm}
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="img-preview-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={stadium} alt={imageName} style={{ width: "100%" }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPackages;
