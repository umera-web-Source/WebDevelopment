import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewMatchForm = () => {
    const navigate = useNavigate()
    const BackToLandingpage = () =>{
        navigate('/Addbanner')
      }
  return (
    <div className="page-container">
      <form className="form-section">
        <p className="form-section-heading">Add Matches</p>
        <div className="p-4 form-inputs-section">
          <div className="row ">
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
                  <label className="form-label" htmlFor="hotel-country">
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
                  <label className="form-label" htmlFor="hotel-description">
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
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-country">
                      Stadium
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>Wankhede Stadium</option>
                      <option value={1}></option>
                      <option value={2}>ODI</option>
                      <option value={3}>Test</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-name">
                      City
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Mumbai"
                      id="hotel-name"
                    />
                  </div>
                  <div className="col-sm-2">
                    <p className="form-label ">Score</p>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-country">
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
                    <label className="form-label" htmlFor="hotel-country"></label>
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
                    <label className="form-label" htmlFor="hotel-name">
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
            <button className="form-cancel-btn" onClick={BackToLandingpage}>Cancel</button>
            <button className="form-save-btn">Save</button>
                    
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddNewMatchForm
