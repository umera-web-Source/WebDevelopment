import React from "react";

const FlightsForm = () => {
  return (
    <div id="upper-flights">
      <div className="row ">
        <div className="col-lg-12">
          <h2 className="py-0 my-0">Packages</h2>
          <div>Manage Package Settings</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form className="py-4">
            <div className="row">
              <div className="col-lg-5">
                <div className="row  mb-4">
                  <label for="select-tournament" className="package-label">
                    Select Tournament
                  </label>
                  <select
                    name="select-tournament"
                    id="select-tournament"
                    className="package-input"
                  >
                    <option value="india">select</option>
                    <option value="india">Banglore</option>
                    <option value="india">Pune</option>
                    <option value="india">Chennai</option>
                    <option value="india">Kochi</option>
                  </select>
                </div>

                <div className="row align-items-center mb-4">
                  <label for="package-dates" className="package-label">
                    Package Dates
                  </label>
                  <input
                    type="date"
                    className="package-input"
                    id="package-dates"
                    name="package-dates"
                    placeholder="Enter Dates"
                  />
                </div>
              </div>
              <div className="col-lg-7 ps-5">
                <div className="row align-items-center mb-4">
                  <label for="package-name" className="package-label">
                    Package name
                  </label>
                  <input
                    type="text"
                    className="package-input"
                    id="package-name"
                    name="package-name"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="row align-items-center mb-4">
                  <label for="package-name" className="package-label">
                    Flights Heading
                  </label>
                  <input
                    type="text"
                    className="package-input"
                    id="package-name"
                    name="package-name"
                    placeholder="Input"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <button className="btn  add-new-button">
            <span className="">
              <i className="fa-solid fa-plus"></i>
            </span>{" "}
            Add Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsForm;
