import React from "react";
import { LuUpload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import HotelImage from '../Images/CrickbusterHotel.jpeg'

function AddHotel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageName = "CSK.jpeg";
  const imageSize = 500;

  const navigate = useNavigate();
  const BackToHotelTable = () => {
    navigate("/HotelsTable");
  };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Hotels</h3>
        <div>Manage your Hotels and customize.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Add New Hotel</p>
        <div className="p-4 form-inputs-section">
          <div className="row ">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-name">
                    Hotel name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Court Yard"
                    id="hotel-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="No.Of Matches">
                    Address
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Near Airport"
                    id="hotel-city"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-country">
                    Category
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>India</option>
                    <option value={1}>India</option>
                    <option value={2}>India</option>
                    <option value={3}>India</option>
                  </select>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="hotel-description"
                  ></textarea>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-email">
                    Email
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Contact@courtyard.in"
                    id="hotel-email"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5 ">
                  <div className="col-sm-4">
                    <p htmlFor="hotel-rating" className="form-label">
                      Rating
                    </p>
                  </div>
                  <div className="col-sm-8">
                    <p className="add-hotel-rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </p>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-country">
                      Category
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <select className="form-input">
                      <option selected>India</option>
                      <option value={1}>India</option>
                      <option value={2}>India</option>
                      <option value={3}>India</option>
                    </select>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-email">
                      Zip Code
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="624 005"
                      id="hotel-zip"
                    />
                  </div>
                </div>

                <p className="form-label">Cordinates</p>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-latitude">
                      Latitude
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="152'545"
                      id="hotel-zip"
                    />
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-longitude">
                      Longitude
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="152'545"
                      id="hotel-zip"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="form-label mb-3">Images</p>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-4">
                <div className="col-sm-4">
                  <label htmlFor="hotel-logo" class="form-label mb-3">
                    Thumbnail
                  </label>
                </div>
                <div className="col-sm-8">
                  <div class="p-0">
                    <div class="form-file-upload">
                      <label
                        for="hotel-logo"
                        class="form-file-upload-input mt-3"
                      >
                        Thumbnail
                      </label>
                      <input
                        type="file"
                        id="hotel-logo"
                        class="form-file-upload-input"
                      />
                      <span class="icon">
                        <LuUpload />
                      </span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={HotelImage} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-sm-4">
                  <label htmlFor="hotel-logo" class="form-label mb-3">
                    Others
                  </label>
                </div>
                <div className="col-sm-8">
                  <div class="p-0">
                    <div class="form-file-upload">
                      <label
                        for="hotel-logo"
                        class="form-file-upload-input mt-3"
                      >
                        Others
                      </label>
                      <input
                        type="file"
                        id="hotel-logo"
                        class="form-file-upload-input"
                      />
                      <span class="icon">
                        <LuUpload />
                      </span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={HotelImage} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={HotelImage} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                    <div class="form-file-upload-info" onClick={handleShow}>
                      <img src={HotelImage} alt={imageName} />
                      {imageName} ({imageSize}Kb){" "}
                      <span className="remove-file">&#x2716;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label htmlFor="contracted" class="form-label mb-3">
                    Contracted
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
                      id="contracted"
                      defaultChecked
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="contract-Date">
                    Contract Date
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="date"
                    className="form-input"
                    id="contract-Date"
                    name="contract-Date"
                  />
                </div>
              </div> */}
            </div>

            {/* <div className="col-md-6">
              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <label htmlFor="hotel-facilities" className="form-label">
                    Facilities
                  </label>
                </div>
                <div className="col-sm-8">
                  <i className="fa-solid fa-bell-concierge hotel-facilities-icons"></i>
                  <i className="fa-solid fa-wine-bottle hotel-facilities-icons"></i>
                  <i className="fa-solid fa-wheelchair hotel-facilities-icons icon-inactive"></i>
                  <i className="fa-solid fa-wifi hotel-facilities-icons"></i>
                  <i className="fa-solid fa-water-ladder hotel-facilities-icons icon-inactive"></i>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div class="row mb-5">
            <table>
              <thead>
                <tr>
                  <th>Room details</th>
                  <th>API price</th>
                  <th>Contract prize</th>
                  <th>Extra for single occupancy</th>
                  <th>Tax %</th>
                  <th>Hike %</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Economy"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Adult"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$200"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <button className="action-icon">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Economy"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Child"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$200"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <button className="action-icon">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Economy"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="Infant"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$200"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="25%"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="add-hotel-table-input"
                      placeholder="$100"
                    />
                  </td>
                  <td>
                    <button className="action-icon">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <button className="btn add-new-button lh-1">
                        <FaPlus className="icon" />
                        Add
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <div className="form-btns">
            <button className="form-cancel-btn" onClick={BackToHotelTable}>
              Cancel
            </button>
            <button className="form-save-btn">Save</button>
                    
          </div>
        </div>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="img-preview-modal"
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="border-0 p-0 m-0">
          <img src={HotelImage} alt={imageName} className="modalFormImage" />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddHotel;
