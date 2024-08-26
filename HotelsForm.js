import React from 'react'

const HotelsForm = () => {
  return (
    <div id="upper-hotels" >
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
                            <label for="select-tournament" className="package-label">Select
                                Tournament</label>
                            <select name="select-tournament" id="select-tournament"
                                className="package-input">
                                <option value="india">Select</option>
                                <option value="india">T20</option>
                                <option value="india">IPL</option>
                                <option value="india">ODI</option>
                                <option value="india">LPL</option>
                            </select>
                        </div>

                        <div className="row align-items-center mb-4">
                            <label for="package-dates" className="package-label">Package Dates</label>
                            <input type="date" className="package-input" id="package-dates"
                                name="package-dates" placeholder="Enter Dates"/>
                        </div>
                    </div>
                    <div className="col-lg-7 ps-5">

                        <div className="row align-items-center mb-4">
                            <label for="package-name" className="package-label">Package name</label>
                            <input type="text" className="package-input" id="package-name"
                                name="package-name" placeholder="Enter Name"/>
                        </div>

                        <div className="row align-items-center mb-4">
                            <label for="package-name" className="package-label">Accommodation
                                Heading</label>
                            <input type="text" className="package-input" id="package-name"
                                name="package-name" placeholder="Input" />
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
</div>
  )
}

export default HotelsForm