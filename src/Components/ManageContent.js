import React, { useState } from "react";

export default function ManageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const handleOutsideClick1 = (event) => {
    if (event.target.className.includes("modal add-question-modal")) {
      closeModal1();
    }
  };
  const handleOutsideClick = (event) => {
    if (event.target.className.includes("modal add-question-modal")) {
      closeModal();
    }
  };

  return (
    <div>
      <div class="page-container">
        <div class="row px-1">
          <h3 class="my-0">Website Content Management</h3>
          <div class="d-flex justify-content-between ">
            <div class="pagename-text">Manage content of web page.</div>
          </div>
        </div>
        <div class="row px-3 py-4">
          {/* Content Management   */}
          <div class="content-container">
            <form>
              <p class="content-heading">Add Content</p>
              <div class="content-body">
                <div class="row ">
                  <div class="tournament-text ps-4 mt-3 mb-4">
                    Tournament content-Home page
                  </div>
                  <div class="col-md-2 ps-4 pb-2">
                    <label htmlFor="tourDescription">Description</label>
                  </div>
                  <div class="col-md-4 pe-5 ps-1">
                    <div class="error-message">
                      <textarea
                        class="form-control  ms-3"
                        id="tourDescription"
                        rows="3"
                        placeholder="Description"
                      ></textarea>
                      <span class="error ms-3">Min 20 characters required</span>
                    </div>
                  </div>
                </div>

                <div class="row ">
                  <div class="tournament-text ps-4 mt-3 mb-4">
                    Discover your tour content-Home page
                  </div>
                  <div class="col-md-2 ps-4 pb-2">
                    <label htmlFor="tourDescription">Description</label>
                  </div>
                  <div class="col-md-4 pe-5 ps-1">
                    <div class="error-message">
                      <textarea
                        class="form-control  ms-3"
                        id="tourDescription"
                        rows="3"
                        placeholder="Description"
                      ></textarea>
                      <span class="error ms-3">Min 20 characters required</span>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="tournament-text ps-4 mt-3 mb-4">
                    Matches- Tickets screen
                  </div>
                  <div className="row mb-2">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="title">Title</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="title"
                          className="managecontentInput form-control"
                          placeholder="Select match Tickets"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="heading">Heading</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="heading"
                          className="managecontentInput form-control"
                          placeholder="single Match And Multiple Matches"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="tournament-text ps-4 mt-3 mb-4">
                    Accommodations
                  </div>
                  <div className="row mb-2">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="title">Title</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="title"
                          className="managecontentInput form-control"
                          placeholder="Select match Tickets"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="heading">Heading</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="heading"
                          className="managecontentInput form-control"
                          placeholder="single Match And Multiple Matches"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="tournament-text ps-4 mt-3 mb-4">Flights</div>
                  <div className="row mb-2">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="title">Title</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="title"
                          className="managecontentInput form-control"
                          placeholder="Select match Tickets"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="heading">Heading</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="heading"
                          className="managecontentInput form-control"
                          placeholder="single Match And Multiple Matches"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="tournament-text ps-4 mt-3 mb-4">Attractions</div>
                  <div className="row mb-2">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="title">Title</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="title"
                          className="managecontentInput form-control"
                          placeholder="Select match Tickets"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="heading">Heading</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="heading"
                          className="managecontentInput form-control"
                          placeholder="single Match And Multiple Matches"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="tournament-text ps-4 mt-3 mb-4">
                    Intra/Intercity
                  </div>
                  <div className="row mb-2">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="title">Title</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="title"
                          className="managecontentInput form-control"
                          placeholder="Select match Tickets"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="heading">Heading</label>
                    </div>
                    <div class="col-md-4  ps-4 ">
                      <div class="error-message">
                        <input
                          type="text"
                          id="heading"
                          className="managecontentInput form-control"
                          placeholder="single Match And Multiple Matches"
                        />

                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row p-2">
                  <div class="row p-2">
                    <p class="tournament-text ps-4 mt-3">FAQ</p>
                    <table class="table table-borderless ms-2">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Questions</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">1</td>
                          <td>What is the booking proceed for a packages?</td>
                          <td>
                            <button
                              type="button"
                              id="editQuestionBtn"
                              onClick={openModal1}
                              class=" mx-2 action-btn"
                            >
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            {isOpen1 && (
                              <div
                                id="editQuestion"
                                className="modal add-question-modal"
                                onClick={handleOutsideClick1}
                              >
                                <div className="add-question-modal-content py-5">
                                  <span className="close" onClick={closeModal1}>
                                    &times;
                                  </span>
                                  <form className="row g-3 px-5 py-4">
                                    <h5 className="d-flex justify-content-center py-2">
                                      Edit FAQ
                                    </h5>
                                    <div class="mb-3 row">
                                      <label
                                        for="quetion"
                                        class="col-sm-2 col-form-label"
                                      >
                                        Question
                                      </label>
                                      <div class="col-sm-10">
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="quetion"
                                          placeholder="Select Match Tickets"
                                        />
                                      </div>
                                    </div>
                                    <div class="mb-3 row">
                                      <label
                                        for="answer"
                                        class="col-sm-2 col-form-label"
                                      >
                                        Answer
                                      </label>
                                      <div class="col-sm-10">
                                        <textarea
                                          class="form-control"
                                          id="answer"
                                          rows="4"
                                          placeholder="Single match and multiple matches"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                      <button className="btn cancel-btn">
                                        CANCEL
                                      </button>
                                      <button className="btn save-btn">
                                        SAVE
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>
                            Whom Do I Contact If I Require Further Information
                            On The Packages?
                          </td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>
                            What Payment Modes Are Accepted By Cricbuster?
                          </td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>What is the booking proceed for a packages?</td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>
                            What Payment Modes Are Accepted By Cricbuster?
                          </td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">6</td>
                          <td>What is the booking proceed for a packages?</td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">7</td>
                          <td>
                            Whom Do I Contact If I Require Further Information
                            On The Packages?
                          </td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td scope="row">8</td>
                          <td>What is the booking proceed for a packages?</td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td scope="row">9</td>
                          <td>
                            Whom Do I Contact If I Require Further Information
                            On The Packages?
                          </td>
                          <td>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button href="#!" class=" mx-2 action-btn">
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="add-modalbox-add-btn"
                              id="addQuestionBtn"
                              onClick={openModal}
                            >
                              {" "}
                              Add
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
                                      Add FAQ
                                    </h5>
                                    <div class="mb-3 row">
                                      <label
                                        for="quetion"
                                        class="col-sm-2 col-form-label"
                                      >
                                        Question
                                      </label>
                                      <div class="col-sm-10">
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="quetion"
                                          placeholder="Select Match Tickets"
                                        />
                                      </div>
                                    </div>
                                    <div class="mb-3 row">
                                      <label
                                        for="answer"
                                        class="col-sm-2 col-form-label"
                                      >
                                        Answer
                                      </label>
                                      <div class="col-sm-10">
                                        <textarea
                                          class="form-control"
                                          id="answer"
                                          rows="4"
                                          placeholder="Single match and multiple matches"
                                        ></textarea>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                      <button className="btn cancel-btn">
                                        CANCEL
                                      </button>
                                      <button className="btn save-btn">
                                        SAVE
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="row ">
                    <div class="tournament-text ps-4 mt-3 mb-4">
                      Terms & Conditions
                    </div>
                    <div class="col-md-2 ps-4 pb-2">
                      <label htmlFor="tourDescription">Content</label>
                    </div>
                    <div class="col-md-4 pe-5 ps-1">
                      <div class="error-message">
                        <textarea
                          class="form-control  ms-3"
                          id="tourDescription"
                          rows="3"
                          placeholder="Description"
                        ></textarea>
                        <span class="error ms-3">
                          Min 20 characters required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn cancel-btn">
                  CANCEL
                </button>
                <button className="btn save-btn">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
