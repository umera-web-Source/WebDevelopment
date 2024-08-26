import { LuUpload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import   AttractionImage from '../Images/AttractionImage.jpeg';
function AddStadium() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  const BackToAttractinsTable = () => {
    navigate("/attractionsTable");
  };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Attraction</h3>
        <div>Manage attraction and its prices.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add Attractions</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-name">
                    Attraction
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Stonehenge"
                    id="attraction-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-country">
                    Country
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>Country</option>
                    <option value={1}>Australia</option>
                    <option value={2}>Singapore</option>
                    <option value={3}>India</option>
                    <option value={3}>Nepal</option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-city">
                    City
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>City</option>
                    <option value={1}>Canberra</option>
                    <option value={2}>Jurong</option>
                    <option value={3}>Bangalore</option>
                    <option value={3}>Katmandu</option>
                  </select>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="attraction-description"
                    placeholder="Near Airport, Hospital ABC 24/7"
                  ></textarea>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label for="attraction-images" class="form-label mb-3">
                    Image
                  </label>
                </div>
                <div class="col-sm-6 p-0">
                  <div class="form-file-upload">
                    <label
                      for="attraction-images"
                      class="form-file-upload-input mt-3"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="attraction-images"
                      class="form-file-upload-input"
                      multiple
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
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-email">
                    Email
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Contact@xyz.com"
                    id="attraction-email"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-timings">
                    Timings
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="10.00AM- 06.00PM"
                    id="attraction-Timing"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-2">
                <div className="col-sm-4">
                  <label className="form-label" for="attractions-contracted">
                    Contracted
                  </label>
                </div>
                <div className="col-sm-8 form-switch form-check">
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="attractions-contracted"
                    role="switch"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-12">
                  <table class="add-attractions-table mb-4">
                    <thead>
                      <tr>
                        <th>
                          <label
                            for="attraction-price-details"
                            className="form-label"
                          >
                            Price Details
                          </label>
                        </th>
                        <th>
                          <label for="attraction-price" className="form-label">
                            Price
                          </label>
                        </th>
                        <th>
                          <label
                            for="attraction-contracted-price"
                            className="form-label"
                          >
                            Contracted Prize
                          </label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price-details"
                            name="price-details"
                            placeholder="Adult"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price"
                            name="price"
                            placeholder="$200"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price"
                            name="price"
                            placeholder="$200"
                          />
                        </td>
                        <td className="d-flex mt-2">
                          <button className="action-icon">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button className="action-icon">
                            <i class="fa-regular fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price-details"
                            name="price-details"
                            placeholder="Child"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price"
                            name="price"
                            placeholder="$200"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-price"
                            name="price"
                            placeholder="$200"
                          />
                        </td>
                        <td className="d-flex mt-2">
                          <button className="action-icon">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button className="action-icon">
                            <i class="fa-regular fa-trash-can"></i>
                          </button>
                        </td>
                        <td>
                          <button type="button" class="add-row-btn">
                            Add
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="attraction-rating">
                    Rating
                  </label>
                </div>
                <div className="col-sm-8">
                  <div className="attraction-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-2">
                <div className="col-sm-4">
                  <label className="form-label" for="attractions-time-slot">
                    Different Time Slot
                  </label>
                </div>
                <div className="col-sm-8 form-switch form-check">
                  <input
                    className="form-check-input"
                    defaultChecked
                    id="attractions-time-slot"
                    role="switch"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-12">
                  <table class="add-attractions-table mb-4">
                    <thead>
                      <tr>
                        <th>
                          <label for="attraction-time" className="form-label">
                            Time
                          </label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-time"
                            placeholder="9AM - 11AM"
                          />
                        </td>
                        <td className="d-flex mt-2">
                          <button className="action-icon">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button className="action-icon">
                            <i class="fa-regular fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            id="attraction-time"
                            placeholder="12PM - 2PM"
                          />
                        </td>
                        <td className="d-flex mt-2">
                          <button className="action-icon">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button className="action-icon">
                            <i class="fa-regular fa-trash-can"></i>
                          </button>
                        </td>
                        <td>
                          <button type="button" class="add-row-btn">
                            Add
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={BackToAttractinsTable}>
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
          <img src={AttractionImage} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddStadium;
