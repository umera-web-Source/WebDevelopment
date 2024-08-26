import React from "react";
import { useNavigate } from "react-router-dom";

function InquiryForm() {
  const navigate = useNavigate()
  const BacktoInqirylist = ()=>{
    navigate('/InquiryList')
  }

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Inquiry</h3>
        <div>Check the inquiry and it status.</div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">Inquiry Details</p>
        <div className="p-4 form-inputs-section">
          <div className="row ">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="client-name">
                    Client Name
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Rajkumar"
                    id="client-name"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="contact">
                    Contact Number
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="8754433332"
                    id="contact"
                  />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                </div>
                <div className="col-sm-8">
                <input
                    type="email"
                    className="form-input"
                    placeholder="Rajkumar@gmail.com"
                    id="email"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="message"
                    placeholder="Hi,What is the Discount Price For Package ABCD."
                  ></textarea>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="inquiry-status">
                    Inquiry Status
                  </label>
                </div>
                <div className="col-sm-8">
                <select className="form-input">
                      <option value={1}>Open</option>
                      <option value={2}>Closed</option>
                      <option value={3}>Pending</option>
                    </select>
                </div>
              </div>
            </div>
          </div>

          <div className="form-btns">
            <button className="form-cancel-btn" onClick={BacktoInqirylist}>Cancel</button>
            <button className="form-save-btn">Save</button>
                    
          </div>
        </div>
      </form>
    </div>
  );
}
export default InquiryForm;
