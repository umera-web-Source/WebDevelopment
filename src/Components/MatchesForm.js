import React, { useState } from "react";

const MatchesForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className.includes("modal add-question-modal")) {
      closeModal();
    }
  };

  return (
    <div id="upper-matches">
      <div className="row ">
        <div className="col-lg-12">
          <h2 className="py-0 my-0">Package</h2>
          <div>Manage Package Settings</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form className="py-4">
            <div className="row">
              <div className="col-lg-5">
                <div className="row  mb-4">
                  <label htmlFor="select-tournament" className="package-label">
                    Select Tournament
                  </label>
                  <select
                    name="select-tournament"
                    id="select-tournament"
                    className="package-input"
                  >
                    <option value="india">Select</option>
                    <option value="india">T20</option>
                    <option value="india">IPL</option>
                    <option value="india">ODI</option>
                  </select>
                </div>
                <div className="row align-items-center mb-4">
                  <label htmlFor="package-name" className="package-label">
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

                <div className="row mb-4">
                  <label htmlFor="banner-heading" className="package-label">
                    Banner heading
                  </label>
                  <textarea
                    id="banner-heading"
                    name="banner-heading"
                    placeholder="Add small brief to display on the banner of package screen."
                    className="package-input"
                  ></textarea>
                </div>
                <div className="row align-items-center mb-4">
                  <label htmlFor="package-dates" className="package-label">
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
                <div className="row align-items-center mb-4">
                  <label htmlFor="package-name" className="package-label">
                    Package Sports
                  </label>
                  <input
                    type="text"
                    className="package-input"
                    id="package-name"
                    name="package-name"
                    placeholder="Enter Number of sports"
                  />
                </div>
                <div className="row align-items-center mb-4">
                  
                    <label htmlFor="package-location" className="package-label">
                      Package Location
                    </label>
                 
                  
                    <input
                      type="text"
                      className="package-input"
                      id="package-location"
                      name="package-location"
                      placeholder="Enter Locations"
                    />
                    <div style={{marginLeft:"160px"}}>
                    <span className="package-label mt-2">
                      <button
                        type="button"
                        class="d-inline  dropdown-buttons mb-1 mx-1"
                      >
                        Kochi <i class="fa-solid fa-xmark"></i>
                      </button>
                      <button
                        type="button"
                        class="d-inline  dropdown-buttons mb-1 "
                      >
                        Hyderabad <i class="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                    </div>
                </div>
              </div>
              <div className="col-lg-7 ps-5">
                <div className="row  g-2 mb-4">
                  <div className="col-auto ">
                    <label htmlFor="select-tournament" className="package-label">
                      Package Level
                    </label>
                    <select
                      name="select-tournament"
                      id="select-tournament"
                      className="package-input"
                    >
                      <option value="india">Add Levels</option>
                      <option value="india">Gold</option>
                      <option value="india">Silver</option>
                      <option value="india">Premium</option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      className="package-add-edit-button mb-3"
                      id="addQuestionBtn"
                      onClick={openModal}
                    >
                      Add/Edit Level
                    </button>
                    {isOpen && (
                      <div
                        id="addQuestion"
                        className="modal add-question-modal"
                        onClick={handleOutsideClick}
                      >
                        <div className="add-question-modal-content py-5">
                          <span className="close" onClick={closeModal}>
                            &times;
                          </span>
                          <form className="row g-3 px-5 py-4">
                            <h5 className="d-flex justify-content-center py-2">
                              Package Levels Details
                            </h5>
                            <div class="mb-3 row">
                              <label
                                for="packageLevelsDetails"
                                class="col-lg-5 col-form-label"
                              >
                                Package levels
                              </label>
                              <div class="col-lg-7">
                                <input
                                  type="text"
                                  class="form-control package-input"
                                  id="packageLevelsDetails"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div class="mb-3 row">
                              <label
                                for="packageLevelsDetails"
                                class="col-lg-5 col-form-label"
                              >
                                New Package level
                              </label>
                              <div class="col-lg-7">
                                <input
                                  type="text"
                                  class="form-control package-input"
                                  id="packageLevelsDetails"
                                  placeholder="input"
                                />
                              </div>
                              <div className="d-flex justify-content-center pt-4">
                                <button
                                  type="button"
                                  class="add-modalbox-add-btn"
                                  onClick={openModal}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-auto d-flex align-items-start ms-1">
                    <label htmlFor="banner-description" className="package-label ">
                      Description
                    </label>
                    <textarea
                      id="banner-description"
                      name="banner-description"
                      placeholder="Add small brief to display on the banner of package screen."
                      className="package-input"
                    ></textarea>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-auto d-flex align-items-start ms-1">
                    <label htmlFor="match-heading" className="package-label">
                      Match Heading
                    </label>
                    <input
                      type="text"
                      className="package-input"
                      id="match-heading"
                      name="package-location"
                      placeholder="This package has 3 matches"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MatchesForm;
