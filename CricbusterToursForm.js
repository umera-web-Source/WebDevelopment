import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import AttractionImage from "../Images/CrickbusterTravle.jpeg";

function CricbusterToursForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  const BackToToursTable = () => {
    navigate("/crickbusterTours");
  };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Cricbuster Tours</h3>
        <div>Add the details of the past tours.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add New Tour</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="tourtitle">
                    Title
                  </label>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="CRICKET WORLD CUP - INDIA 2023"
                    id="tourtitle"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="tour-banner-image" class="form-label mb-3">
                    Banner Image
                  </label>
                </div>
                <div class="col-sm-6 p-0">
                  <div class="form-file-upload">
                    <label
                      for="tour-banner-image"
                      class="form-file-upload-input mt-3"
                    >
                      Banner Image
                    </label>
                    <input
                      type="file"
                      id="tour-banner-image"
                      class="form-file-upload-input"
                    />
                    <span class="icon">
                      <LuUpload />
                    </span>
                  </div>
                  <div class="form-file-upload-info" onClick={handleShow}>
                    <img src={AttractionImage} alt={imageName} />
                    {imageName} ({imageSize}Kb){" "}
                    <span className="remove-file">&#x2716;</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center mb-6">
                <div className="col-sm-4">
                  <label
                    className="form-label"
                    htmlFor="transport-departure-time"
                  >
                    Content
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-input"
                    // placeholder="9:00AM"
                    id="transport-departure-time"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackToToursTable}>
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
        
        <Modal.Body className="border-0 p-0 m-0">
          <img
            src={AttractionImage}
            alt={imageName}
           className="modalFormImage"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default CricbusterToursForm;
