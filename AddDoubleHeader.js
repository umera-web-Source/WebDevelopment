import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

function AddDoubleHeader() {
  const navigate = useNavigate();
  // const BackToAddbanner = () => {
  //   navigate("/Addbanner");
  // };
  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">IPL - 2022 India</h3>
        <div>26 Mar 2022 - 29 May 2022</div>
        <form className="m-4">
          <div className="row  border-bottom mb-5">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="date"
                    id="date"
                    placeholder="March 26, 2022"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-name">
                    Number of matches
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="2"
                    id="hotel-name"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-country">
                    Stadium
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>Wankhede Stadium</option>
                    <option value={1}></option>
                    <option value={2}></option>
                    <option value={3}></option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label htmlFor="hotel-date-range" className="form-label">
                    Hotel date range
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="date"
                    id="hotel-date-range"
                    placeholder="March 26, 2022"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <table className="banner-table double-table table-borderless">
                <thead>
                  <tr>
                    <th>Seat Category</th>
                    <th>Price</th>
                    <th>Hike</th>
                    <th>Seats Left</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" placeholder="CAT-A" />
                    </td>
                    <td>
                      <input type="text" placeholder="$200" />
                    </td>
                    <td>
                      <input type="text" placeholder="25%" />
                    </td>
                    <td>
                      <input type="text" placeholder="02" />
                    </td>
                    <td>
                      <i className="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" placeholder="CAT-B" />
                    </td>
                    <td>
                      <input type="text" placeholder="$200" />
                    </td>
                    <td>
                      <input type="text" placeholder="25%" />
                    </td>
                    <td>
                      <input type="text" placeholder="02" />
                    </td>
                    <td>
                      <i className="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" placeholder="Input" />
                    </td>
                    <td>
                      <input type="text" placeholder="$$$" />
                    </td>
                    <td>
                      <input type="text" placeholder="00%" />
                    </td>
                    <td>
                      <input type="text" placeholder="0" />
                    </td>
                    <td>
                      <i className="fa-solid fa-trash"></i>
                    </td>
                    <td>
                      <div>
                        <button className="btn add-new-button lh-1 d-flex">
                          <FaPlus className="icon" />
                          Add
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>

      <form className="form-section">
        <div className="p-4 form-inputs-section">
          <div className="row  border-bottom mb-5">
            <p className="form-section-heading text-center border border-0 mb-4">
              Match 01
            </p>

            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-name">
                    Title
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="IPL"
                    id="hotel-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-country">
                    Match Type
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>National</option>
                    <option value={1}>T20</option>
                    <option value={2}>IPL</option>
                    <option value={3}></option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <label htmlFor="departure-date-time" className="form-label">
                    Date & Time
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="departure-date-time"
                    placeholder="March 26, 2022"
                    onFocus={(e) => (e.target.type = "datetime-local")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
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
                    placeholder="Near Airport"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5">
                  <p className="d-flex justify-content-end me-5 pe-5">Score</p>
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-country">
                      Teams
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>CSK</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="131/5"
                      id="hotel-name"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-country"></label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>KKR</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="133/4"
                      id="hotel-name"
                    />
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-name">
                      Results
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="KKR Won By 6 Wickets "
                      id="hotel-name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <p className="form-section-heading text-center border border-0 mb-5">
              Match 02
            </p>

            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-name">
                    Title
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="IPL"
                    id="hotel-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" for="hotel-country">
                    Match Type
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>National</option>
                    <option value={1}>T20</option>
                    <option value={2}>IPL</option>
                    <option value={3}></option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <label htmlFor="departure-date-time" className="form-label">
                    Date & Time
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="departure-date-time"
                    placeholder="March 26, 2022"
                    onFocus={(e) => (e.target.type = "datetime-local")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
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
                    placeholder="Near Airport"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5">
                  <p className="d-flex justify-content-end me-5 pe-5">Score</p>
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-country">
                      Teams
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>CSK</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="131/5"
                      id="hotel-name"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-country"></label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>KKR</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="133/4"
                      id="hotel-name"
                    />
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" for="hotel-name">
                      Results
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="KKR Won By 6 Wickets "
                      id="hotel-name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-btns">
            <button className="form-cancel-btn">
              Cancel
            </button>
            <button className="form-save-btn">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddDoubleHeader;
