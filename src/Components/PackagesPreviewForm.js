import { useNavigate } from "react-router-dom";

function PackagesPreviewForm() {
  const navigate = useNavigate();
  const backToPackageForm = () => {
    navigate("/PackagesForm");
  };
  return (
    <div className="page-container">
      <div className="filter-container">
        <div className="col-auto d-flex">
          <div className="mb-4">
            <h3 className="my-0">Packages</h3>
            <div>Magange packages settings.</div>
          </div>
        </div>
        <div className="col-auto d-flex">
          <div className="row align-items-center me-2">
            <div className="col-auto">
              <label className="form-label" htmlFor="attraction-name">
                Price per package
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-input packages-preview-input"
                placeholder="$1200"
                id="attraction-name"
              />
            </div>
          </div>
          <div className="row align-items-center me-2">
            <div className="col-auto">
              <label className="form-label" htmlFor="attraction-name">
                Spots
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-input packages-preview-input"
                placeholder="200"
                id="attraction-name"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-auto">
              <input
                type="checkbox"
                id="enablebooking"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div className="col-auto">
              <label className="form-label" htmlFor="enablebooking">
                Enable Booking
              </label>
            </div>
          </div>
        </div>
      </div>
      <form className="form-section">
        <div className="p-4 form-inputs-section">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-sm-auto">
              <p className="fw-bold">Package name</p>
            </div>
            <div className="col-sm-4">
              <div className="row align-items-center">
                <div className="col-4">
                  <label className="form-label" htmlFor="">
                    Package Level
                  </label>
                </div>
                <div className="col-6">
                  <select className="form-input">
                    <option value="1">Gold</option>
                    <option value="2">Silver</option>
                    <option value="3">Platinum</option>
                  </select>
                </div>
                <div className="col-2 ">
                  <button className="action-icon">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="fw-medium">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                dui augue. Suspendisse potenti. Donec interdum hendrerit nisi
                sed pretium. Aenean vel aliquam massa. Integer vel sem quis diam
                ullamcorper pretium. Donec aliquet elementum ullamcorper. Aenean
                iaculis mattis pellentesque. Etiam magna augue, tempor sed
                lectus vitae, interdum vulputate orci. Etiam vestibulum, quam at
                sodales tincidunt, magna ex egestas eros, seo vitae turpis
                vestibulum, quam at sodales tincidurit, magna ex egestas eros,
                aeo vitae turpis. Aenean iaculis mattis pellentesque. Etiam
                magna augue, tempor sed lectus vitae, interdum. Aenean iaculis
                mattis pellentesque. Etiam magna augue, tempor sed lectus vitae,
                interdum
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="packages-preview-subheadings">Matches</div>
              <div className="col-lg-6">
                <table className="w-100 packages-preview-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Matches</th>
                      <th>Date & time</th>
                      <th>Tickets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>T20</td>
                      <td>
                        <span className="fw-medium">26-08-2022</span>
                        <br />
                        <span className="time">11:00 AM</span>
                      </td>
                      <td>First</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="packages-preview-subheadings">Hotels</div>
              <div className="col-lg-9">
                <table className="w-100 packages-preview-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Match</th>
                      <th>Hotels</th>
                      <th>Rooms</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="text-secondary">CSK VS RR</td>
                      <td>Hotel Nebo</td>
                      <td>First</td>
                      <td className="fw-medium">Mar2 - Mar12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="packages-preview-subheadings">Flights</div>
              <div className="col-lg-10">
                <table className="w-100 packages-preview-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Departure</th>
                      <th>Destination</th>
                      <th>Flight</th>
                      <th>Class</th>
                      <th>Date and time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Delhi</td>
                      <td>Mumbai</td>
                      <td>Flight</td>
                      <td>First</td>
                      <td>
                        <span className="fw-medium">26-08-2022</span>
                        <br />
                        <span className="time">11:00 AM</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="packages-preview-subheadings">Attractions</div>
              <div className="col-lg-6">
                <table className="w-100 packages-preview-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Attraction</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Av Mall</td>
                      <td>
                        <span className="fw-medium">26-08-2022</span>
                        <br />
                        <span className="time">11:00 AM</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="packages-preview-subheadings">
                Intra/Intercity
              </div>
              <div className="col-lg-10">
                <table className="w-100 packages-preview-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Transport</th>
                      <th>Departure</th>
                      <th>Destination</th>
                      <th>Departure Time</th>
                      <th>Travel Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bus</td>
                      <td>Mumbai</td>
                      <td>Chennai</td>
                      <td>5:00 AM</td>
                      <td>3 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="form-cancel-btn" onClick={backToPackageForm}>
            Cancel
          </button>
          <button className="form-save-btn">Save</button>
        </div>
      </form>
    </div>
  );
}
export default PackagesPreviewForm;
