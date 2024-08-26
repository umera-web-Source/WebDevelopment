import { BiSolidPrinter } from "react-icons/bi";

function OrdersForm() {
  return (
    <div className="page-container">
      <div className="mb-2 ">
        <div>
        <h3 className="my-0">Orders</h3>
        </div>
        <div className="d-flex justify-content-between">
        <div>Check the Order Details.</div>
            <button className="btn add-new-button print-btn rounded">
              <BiSolidPrinter className="icon me-2 fs-4" />
              Print
            </button>
          </div>
      </div>
      <form className="form-section">
        <p className="form-section-heading">IPL 2 Matches Package</p>
        <div className="p-4 pt-5 form-inputs-section">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="order-id">
                    Order ID
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="856786"
                    id="order-id"
                  />
                </div>
              </div>

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
                    type="text"
                    className="form-input"
                    placeholder="Rajkumar@gmail.com"
                    id="email"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="price">
                    Total Price
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="$444"
                    id="price"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="payment-mode">
                    Payment Mode
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Credit Card"
                    id="payment-mode"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="payment-status">
                    Payment Status
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Successful"
                    id="payment-status"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="category">
                      Category
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Package"
                      id="category"
                    />
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="slots">
                      Slots booked
                    </label>
                  </div>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="4"
                      id="slots"
                    />
                  </div>
                </div>

                <p className="form-label">Number of travellers</p>
                <div className="px-5">
                  <div className="row align-items-center mb-2">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="adults">
                        Adults
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="4"
                        id="adults"
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-2">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="child">
                        Child
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="2"
                        id="child"
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-2">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="Infant">
                        Infant
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="1"
                        id="infant"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="mb-4 fw-bolder">Package Details</h6>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="orders-subheadings">Matches</div>
              <div className="row align-items-center">
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="CSK VR Wankhede Stadium, Mar 26"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="DX Vi Rr. Arun Jattiey Stadium, Mar 29"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="CSK vy dc Wankhede Stadium, Apr 3"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="DC Vs Rr. Arun Jatliey Stadiurn, Mar 29"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="orders-subheadings">Hotels</div>
              <div className="row align-items-center">
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Taj Hotel, Mumbai, Mar 24-27"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Hotel City Star, Dethi, Mar 27-30"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="ITC Maratha, Mumbai Apr 2-4"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="orders-subheadings">Flights</div>
              <div className="row align-items-center">
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="British Airways London-Mumbai Economy, Mar 24"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Air India, Mumbai New Delhi, Business, Mar27"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="British Airwiys, Mumbai-London, Economy, Apr"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="orders-subheadings">Attractions</div>
              <div className="row align-items-center">
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Gateway Of India, Mumbai, Mar 27"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Colaba, Mumabi Mar 27"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="orders-subheadings">Interacity</div>
              <div className="row align-items-center">
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England Mar 27"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England, Mar 28"
                    id=""
                  />
                </div>
                <div className="col-sm-4 mb-2">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Greyhound England, Mar 29"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="orders-subheadings">Personal Details</div>
          <div className="row mb-3">
            <div className="col-md-12">
              <p className="fw-medium mb-3">Traveller 1</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="firstname">
                        First Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Thomas"
                        id="firstname"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="lastname">
                        Last Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Grey"
                        id="lastname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="dob">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="06, March 1998"
                        id="dob"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="54878564564"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="thomas@hotmail.com"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="citizenship">
                        Citizenship
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Australian"
                        id="citizenship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="passportnum">
                        Passport Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="312454545"
                        id="passportnum"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="emergencycontact">
                        Emergency Contact
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="David"
                        id="emergencycontact"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label
                        className="form-label"
                        for="emergencycontactnumber"
                      >
                        Emergency Contact Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="2652652626"
                        id="emergencycontactnumber"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <p className="fw-medium mb-3">Traveller 2</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="firstname">
                        First Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Thomas"
                        id="firstname"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="lastname">
                        Last Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Grey"
                        id="lastname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="dob">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="06, March 1998"
                        id="dob"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="54878564564"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="thomas@hotmail.com"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="citizenship">
                        Citizenship
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Australian"
                        id="citizenship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="passportnum">
                        Passport Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="312454545"
                        id="passportnum"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="emergencycontact">
                        Emergency Contact
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="David"
                        id="emergencycontact"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label
                        className="form-label"
                        for="emergencycontactnumber"
                      >
                        Emergency Contact Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="2652652626"
                        id="emergencycontactnumber"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <p className="fw-medium mb-3">Traveller 3</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="firstname">
                        First Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Thomas"
                        id="firstname"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="lastname">
                        Last Name
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Grey"
                        id="lastname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="dob">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="06, March 1998"
                        id="dob"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="54878564564"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="thomas@hotmail.com"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="citizenship">
                        Citizenship
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Australian"
                        id="citizenship"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="passportnum">
                        Passport Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="312454545"
                        id="passportnum"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label className="form-label" htmlFor="emergencycontact">
                        Emergency Contact
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="David"
                        id="emergencycontact"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row align-items-center mb-3">
                    <div className="col-sm-4">
                      <label
                        className="form-label"
                        for="emergencycontactnumber"
                      >
                        Emergency Contact Number
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="2652652626"
                        id="emergencycontactnumber"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form-btns">
          <button className="form-cancel-btn">Cancel</button>
          <button className="form-save-btn">Save</button>
        </div> */}
      </form>
    </div>
  );
}
export default OrdersForm;
