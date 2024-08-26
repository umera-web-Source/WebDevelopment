import { LuUpload } from "react-icons/lu";
import { Navigate, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import stadium from "../Images/WhatsApp Image 2024-07-18 at 16.45.37.jpeg";
import Select from "react-select";

const StadiumForm = () => {
  const Navigate = useNavigate();
  const BackTostadiumtable = () => {
    Navigate("/stadiums");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageName = "CSK.jpeg";
  const imageSize = 500;

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
        <h3 className="my-0">Stadium</h3>
        <div>Manage the list of stadiums and the details.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add Stadium</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-name">
                    Stadium Name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Court Yard"
                    id="stadium-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-city">
                    City
                  </label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={cityoptions}
                    placeholder="City"
                    classNamePrefix="custom-select-Inputs"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-country">
                    Country
                  </label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={countryoptions}
                    placeholder="Country"
                    classNamePrefix="custom-select-Inputs"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="stadium-description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-sm-8">
                  <label for="stadium-logo" class="form-label mb-3">
                    Seating map
                  </label>
                  <div class="p-0">
                    <div class="form-file-upload">
                      <label
                        for="stadium-logo"
                        class="form-file-upload-input mt-3"
                      >
                        Team Logo
                      </label>
                      <input
                        type="file"
                        id="stadium-logo"
                        class="form-file-upload-input"
                        multiple
                      />
                      <span class="icon">
                        <LuUpload />
                      </span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={stadium} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={stadium} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={stadium} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>Eg:</p>
                <div className="col-sm-6">
                  <iframe
                    height="200px"
                    src="https://momento360.com/e/u/ff5a36f34199435c88fce6b231a57f14?utm_campaign=embed&utm_source=other&heading=229.33&pitch=27.62&field-of-view=75&size=medium&display-plan=true"
                    width="300px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <p className="fw-bold mb-4">Cordinates</p>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-latitude">
                    Latitude
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="152'545"
                    id="stadium-latitude"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="stadium-longitude">
                    Longitude
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="152'545"
                    id="stadium-longitude"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackTostadiumtable}>
            Cancel
          </button>
          <button className="form-save-btn">Save</button>
        </div>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="img-preview-modal"
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="border-0 p-0 m-0">
          <img src={stadium} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default StadiumForm;
