import React from 'react'
import { useNavigate } from 'react-router-dom'

 const FlightstableForm = () => {
    const navigate = useNavigate();
    const BackToFlightsTable = ()=>{
        navigate('/Flightstable')
    }
  return (
    <div>
       <div class="page-heading">
                <div class="ms-2">
                    <h2>Flight</h2>
                    <p>Manage flights and details of flights.</p>
                </div>
            </div>
            <div class="content-container px-4">
                <form action="">
                    <p class="content-heading">Edit Flight</p>
                    <div class="content-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row  mb-4">
                                    <label for="airline-name" class="add-label">Airline name</label>
                                  <div class="error-message">
                                        <input type="text" class="add-input" id="airline-name" name="airline-name"
                                            placeholder="British Airways"/>
                                        <span class="error">Airline name is required</span>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <label for="logo-images" class="add-label">Logo Images</label>
                                    <div class=" error-message" >
                                        <div class="teams-file-upload">
                                            <label for="logo-images" class="teams-file-upload-input">Logo Images</label>
                                            <input type="file" id="logo-images" name="logo-images"
                                                class="teams-file-upload-input"/>
                                            <span class="teams-file-icon"><i
                                                    class="fa-solid fa-arrow-up-from-bracket"></i></span>
                                        </div>
                                        <div class="teams-file-info">Logo (500Kb) <span
                                                class="remove-file">&#x2716;</span>
                                        </div>
                                        <span class="error">Airline name is required</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row mb-4">
                                    <label for="departure" class="add-label">Departure</label>
                                    <div class="error-message" >
                                        <input type="text" class="add-input" id="departure" name="departure"
                                            placeholder="San Fransisco"/>
                                        <span class="error">Departure is required</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <label for="departure-date-time" class="add-label">Departure Date & Time</label>
                                    <div class="error-message" >
                                        <input class="add-input" type="datetime-local" id="departure-date-time" />
                                        <span class="error">Departure date & time is required</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                  <label for="transfers" class="add-label">Transfers</label>
                                    <div class="error-message" >
                                    <input type="text" class="add-input" id="transfers" name="transfers"
                                          placeholder="2" />
                                      </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row mb-4">
                                    <label for="destination" class="add-label">Destination</label>
                                    <div class="error-message" >
                                        <input type="text" class="add-input" id="destination" name="destination"
                                            placeholder="New Delhi" />
                                        <span class="error">Destination is required</span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <label for="duration" class="add-label">Duration</label>
                                    <div class="error-message" >
                                        <input type="text" class="add-input" id="duration" name="duration"
                                            placeholder="12 Hrs 20 Min" />
                                        <span class="error">Duration is required</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row align-items-center mb-4">
                                  <label for="transfer1" class="add-label">1st Transfer</label>
                                   <div class="error-message" >
                                    <input type="text" class="add-input" id="transfer1" name="transfer1"
                                          placeholder="Dubai 1Hr 30Min" />
                                      </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row align-items-center mb-4">
                                  <label for="transfer2" class="add-label">2nd Transfer</label>
                                     <div class="error-message" >
                                    <input type="text" class="add-input" id="transfer2" name="transfer2"
                                          placeholder="Istanbul 1Hr 30Min" />
                                      </div>
                                </div>
                            </div>
                        </div>

                        <p class="add-label my-4">Baggage</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <p class="add-label my-4">Flight 1</p>
                                <div class="row align-items-center mb-4">
                                  <label for="fl1-checkin" class="add-label">Check-In</label>
                                   <div class="error-message" >
                                    <input type="text" class="add-input" id="fl1-checkin" name="fl1-checkin"
                                          placeholder="1Kg" />
                                      </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                  <label for="fl1-cabin" class="add-label">Cabin</label>
                                  <div class="error-message" >
                                    <input type="text" class="add-input" id="fl1-cabin" name="fl1-cabin"
                                          placeholder="1Kg" />
                                      </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <p class="add-label my-4">Flight 2</p>
                                <div class="row align-items-center mb-4">
                                  <label for="fl2-checkin" class="add-label">Check-In</label>
                                  <div class="error-message" >
                                    <input type="text" class="add-input" id="fl2-checkin" name="fl2-checkin"
                                          placeholder="1Kg" />
                                      </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                  <label for="fl2-cabin" class="add-label">Cabin</label>
                                  <div class="error-message" >
                                    <input type="text" class="add-input" id="fl2-cabin" name="fl2-cabin"
                                          placeholder="1Kg" />
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row mb-4 justify-content-between">
                                    <label class="add-label" for="hotel-contracted">Contracted</label>
                                    <div class="form-check form-switch error-message" >
                                        <input class="form-check-input " type="checkbox" role="switch"
                                            id="hotel-contracted" />
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                  <label for="hotel-contract-date" class="add-label">Contract Date</label>
                                   <div class="error-message" >
                                      <input class="add-input" type="datetime-local" id="hotel-contract-date" />
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <table>
                                <thead>
                                    <tr>
                                        <th >Class</th>
                                        <th >Travellers</th>
                                        <th >API price</th>
                                        <th >Contracted prize</th>
                                        <th>Tax %</th>
                                        <th >Hike %</th>
                                        <th >Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Economy"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Adult"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Child"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Infant"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <a onclick="bussinessclass()" class="btn business-btn">Check for Bussiness class</a>
                            <table id="businesstable" >
                                <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Travellers</th>
                                        <th>API price</th>
                                        <th>Contracted prize</th>
                                        <th>Tax %</th>
                                        <th>Hike %</th>
                                        <th>Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Business"/>
                                        </td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Adult" /></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200" /></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100" /></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Child"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="Infant"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$200"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="25%"/></td>
                                        <td><input type="text" class="add-hotel-table-input" placeholder="$100"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                  <div  class="mt-2 d-flex justify-content-end">
                        <a href="#" class="btn cancel-btn" onClick={BackToFlightsTable}>CANCEL</a>
                        <a href="#" class="btn save-btn">SAVE</a>
                    </div>
                </form>
            </div>
    </div>
  )
}
export default FlightstableForm