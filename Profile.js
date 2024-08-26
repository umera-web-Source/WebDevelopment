import { useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  const navigate = useNavigate();
  const BackToDashboard = () => {
    navigate("/dashboard");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageUrl =
    "https://i.pinimg.com/564x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg";
  const imageName = "image.jpeg";
  const imageSize = 500;

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Profile</h3>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card card-body bg-light mt-3 rounded-0">
            <div className="row">
              <div className="col-md-3 text-center mb-3">
                <img
                  src="https://i.pinimg.com/564x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg"
                  className="rounded-circle profile-image"
                  alt="avatar"
                />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div>
                  <h3>John Doe</h3>
                  <p className="text-muted lead">Administrator</p>
                  <p className="lead text-muted">johndoe@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Customize your profile</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John"
                    id="username"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="johndoe@example.com"
                    id="email"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-input"
                    placeholder="******"
                    id="password"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="fullname">
                    Full Name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    id="fullname"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Administrator"
                    id="title"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="profile-pic" class="form-label mb-3">
                    Profile Picture
                  </label>
                  <div class="info-btn">
                    i<span class="info-btn-text">Less than 5MB</span>
                  </div>
                </div>
                <div class="col-sm-6 p-0">
                  <div class="form-file-upload">
                    <label
                      for="profile-pic"
                      class="form-file-upload-input mt-3"
                    >
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      id="profile-pic"
                      class="form-file-upload-input"
                    />
                    <span class="icon">
                      <LuUpload />
                    </span>
                  </div>
                  {
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={imageUrl} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackToDashboard}>
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt={imageName} style={{ width: "100%" }} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Profile;
