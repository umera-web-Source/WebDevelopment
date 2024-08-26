import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TeamsForm() {
  const navigate = useNavigate();
  const BackToTeamsTable = () => {
    navigate("/teamstable");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageUrl =
    "https://basikanchana.github.io/crickbuster/images/teams/england.png";
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Teams</h3>
        <div>Manage your team and customize.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add New Team</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="team-name">
                    Team name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Chennai Super Kings"
                    id="team-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="team-logo" class="form-label mb-3">
                    Team Logo
                  </label>

                  <div class="info-btn">
                    i<span class="info-btn-text">Less than 5MB</span>
                  </div>
                </div>
                <div class="col-sm-6 p-0">
                  <div class="form-file-upload">
                    <label for="team-logo" class="form-file-upload-input mt-3">
                      Team Logo
                    </label>
                    <input
                      type="file"
                      id="team-logo"
                      class="form-file-upload-input"
                      multiple
                    />
                    <span class="icon">
                      <LuUpload />
                    </span>
                  </div>
                  <div class="form-file-upload-info" onClick={handleShow}>
                    <img src={imageUrl} alt={imageName} />
                    {imageName} ({imageSize}Kb){" "}
                    <span className="remove-file">&#x2716;</span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="teams-category">
                    Category
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input" id="teams-category">
                    <option selected>All</option>
                    <option value={1}>International</option>
                    <option value={2}>National</option>
                    <option value={3}>County</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackToTeamsTable}>
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
          <img src={imageUrl} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default TeamsForm;
