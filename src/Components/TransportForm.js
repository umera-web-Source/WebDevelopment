import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import BusImage from "../Images/CrickbusterTravle.jpeg";

function TransportForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  const BackToIntercityTable = () => {
    navigate("/intercity");
  };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Intra/Intercity</h3>
        <div>Manage Intra/Intercity settings.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add Transport</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport">
                    Transport
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Bus"
                    id="transport"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport-name">
                    Name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England"
                    id="transport-name"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-city">
                    City
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>Banglore</option>
                    <option value={1}>Chennai</option>
                    <option value={2}>Hyderabad</option>
                    <option value={3}>Vizag</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>Telangana</option>
                    <option value={1}>Tamil Nadu</option>
                    <option value={2}>Karnataka</option>
                    <option value={3}>Andhra Pradesh</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="Tournamanet-country">
                    Country
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>India</option>
                    <option value={1}>UK</option>
                    <option value={2}>USA</option>
                    <option value={3}>China</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport-departure">
                    Depature
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England"
                    id="transport-departure"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport-destination">
                    Destination
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England"
                    id="transport-destination"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label
                    className="form-label"
                    htmlFor="transport-departure-time"
                  >
                    Depature Time
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="9:00AM"
                    id="transport-departure-time"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label
                    className="form-label"
                    htmlFor="transport-arrival-time"
                  >
                    Arrival Time
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="12:00PM"
                    id="transport-arrival-time"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport-price">
                    Price
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="$200"
                    id="transport-price"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="transport-description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="transport-description"
                    placeholder="Near Airport, Hospital ABC 24/7"
                  ></textarea>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="transport-image" class="form-label mb-3">
                    Image
                  </label>
                </div>
                <div class="col-sm-7 p-0">
                  <div class="form-file-upload">
                    <label
                      for="transport-image"
                      class="form-file-upload-input mt-3"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="transport-image"
                      class="form-file-upload-input"
                      multiple
                    />
                    <span class="icon">
                      <LuUpload />
                    </span>
                  </div>
                  <div class="form-file-upload-info" onClick={handleShow}>
                    <img src={BusImage} alt={imageName} />
                    {imageName} ({imageSize}Kb){" "}
                    <span className="remove-file">&#x2716;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackToIntercityTable}>
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
          <img src={BusImage} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default TransportForm;
