import { LuUpload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Cricketbanner from "../Images/Cricketbanner.jpeg";

function LandingPageForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   navigate("/Addbanner");
  // };

  const bannerTable = () => {
    navigate("/bannertable");
  };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Landing Page Content</h3>
        <div>Manage content of the landing page .</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add Contents</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row justify-content-between mb-3 tournament-text p-0">
            <div className="col-auto">
              <p className="form-label pt-2">Hero banner</p>
            </div>
            {/* <div className="col-auto">
              <div>
                <button
                  className="btn add-new-button m-0"
                  onClick={handleButtonClick}
                >
                  <FaPlus className="icon" />
                  Add Banner
                </button>
              </div>
            </div> */}
          </div>
          <div className="row mb-5">
            <p className="form-label">Banner 01</p>
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="bannertype">
                    Banner type
                  </label>
                </div>
                <div className="col-sm-8">
                  <select
                    className="form-input"
                    id="bannertype"
                    style={{ width: "150px" }}
                  >
                    <option selected>Image</option>
                    <option value="1">Video</option>
                  </select>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="bannerimageupload" className="form-label mb-3">
                    Banner Image
                  </label>
                </div>
                <div className="col-sm-6 p-0">
                  <div className="form-file-upload">
                    <label
                      for="bannerimageupload"
                      className="form-file-upload-input mt-3"
                    >
                      Banner Image
                    </label>
                    <input
                      type="file"
                      id="bannerimageupload"
                      className="form-file-upload-input"
                    />
                    <span className="icon">
                      <LuUpload />
                    </span>
                  </div>
                  <div class="form-file-upload-info" onClick={handleShow}>
                    <img src={Cricketbanner} alt={imageName} />
                    {imageName} ({imageSize}Kb){" "}
                    <span className="remove-file">&#x2716;</span>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="buttonlink">
                    Button link
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="World Cup Package 1"
                    id="buttonlink"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="col-sm-8">
                  {
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Are You Excited For ICC T20 World Cup"
                      id="title"
                    />
                  }
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="description"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={bannerTable}>
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
          <img src={Cricketbanner} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default LandingPageForm;
