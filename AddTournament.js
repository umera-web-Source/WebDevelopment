import React from "react";
import { LuUpload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import stadium from "../Images/WhatsApp Image 2024-07-18 at 16.45.37.jpeg";
import Select from "react-select";
import { Modal } from "react-bootstrap";

function AddTournament() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  const addMatch = () => {
    navigate("/Addbanner");
  };
  const backToAddTournament = () => {
    navigate("/tournaments");
  };
  const MatchesTable = () => {
    navigate("/AddnewmatchTable");
  };
  const tournamentCountryName = [
    { value: 1, label: "Austrelia" },
    { value: 2, label: "India" },
    { value: 3, label: "USA" },
  ];
  const tournamentCityName = [
    { value: 1, label: "Banglore" },
    { value: 2, label: "Mumbai" },
    { value: 3, label: "Pune" },
  ];
  const tournamentTeamName = [
    { value: 1, label: "England" },
    { value: 2, label: "Rajastan Royal's" },
    { value: 3, label: "chenni Super king's " },
  ];

  return (
    <div className="page-container">
      <div className="mb-2">
        <h3 className="my-0">Tournamanet</h3>
        <div></div>
        <div className="d-flex justify-content-end mb-0">
          <button className="btn add-new-button" onClick={addMatch}>
            <FaPlus className="icon" />
            Add Match
          </button>
        </div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add Tournament</p>
        <div className="p-4 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-name">
                    Tournament Name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Court Yard"
                    id="Tournamanet-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="No.Of-Matches">
                    No.Of Matches
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="74"
                    id="No.Of-Matches"
                  />
                </div>
                <div className="col-sm-5">
                  <button className="custom-btn" onClick={MatchesTable}>
                    View/Add matches
                  </button>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label
                    className="form-label"
                    htmlFor="Tournamanet-description"
                  >
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="Tournamanet-description"
                  ></textarea>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-country">
                    Country
                  </label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={tournamentCountryName}
                    placeholder="Select Country"
                    classNamePrefix="custom-select-Inputs"
                  />
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <div className="  mx-2 add-input border-0">
                    <button
                      type="button"
                      className="d-inline  dropdown-buttons mb-1"
                    >
                      India <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      USA <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      UK <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-city">
                    City
                  </label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={tournamentCityName}
                    placeholder="Select City"
                    classNamePrefix="custom-select-Inputs"
                  />
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <div className="  mx-2 add-input border-0">
                    <button
                      type="button"
                      className="d-inline  dropdown-buttons mb-1"
                    >
                      India <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      USA <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      UK <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-results">
                    Result
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Gujarath Titan Won by 7 wickets"
                    id="Tournamanet-results"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-teams">
                    Teams
                  </label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={tournamentTeamName}
                    placeholder="Select Team"
                    classNamePrefix="custom-select-Inputs"
                  />
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-8">
                  <div className="  mx-2 add-input border-0">
                    <button
                      type="button"
                      className="d-inline  dropdown-buttons mb-1"
                    >
                      England <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      Rajasthan Royal's <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      type="button"
                      className="d-inline mx-1 dropdown-buttons mb-1"
                    >
                      Chennai Super King's <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="Start-date">
                      Start Date
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="date"
                      className="form-input"
                      id="start-date"
                      name="start-date"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="End-date">
                      End Date
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="date"
                      className="form-input"
                      id="end-date"
                      name="end-date"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-sm-4">
                    <label
                      htmlFor="Tournamanet-logo"
                      className="form-label mb-3"
                    >
                      Image
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <div className="p-0">
                      <div className="form-file-upload">
                        <label
                          htmlFor="Tournamanet-logo"
                          className="form-file-upload-input mt-3"
                        >
                          Team Logo
                        </label>
                        <input
                          type="file"
                          id="Tournamanet-logo"
                          className="form-file-upload-input"
                          multiple
                        />
                        <span className="icon">
                          <LuUpload />
                        </span>
                      </div>
                      <div class="form-file-upload-info" onClick={handleShow}>
                        <img src={stadium} alt={imageName} />
                        {imageName} ({imageSize}Kb){" "}
                        <span className="remove-file">&#x2716;</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label htmlFor="show-prices" className="form-label mb-3">
                      Show Prices
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <div
                      className="form-check form-switch"
                      style={{ width: "50px" }}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="show-prices"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={backToAddTournament}>
            Cancel
          </button>
          <button className="form-save-btn">Save</button>
        </div>
        {/* </div> */}
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="img-preview-modal"
        className="m-0"
      >
        <Modal.Body className="border-0 p-0 m-0  ">
          <img src={stadium} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddTournament;
