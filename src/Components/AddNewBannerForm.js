import React from "react";

const AddNewBannerForm = () => {
  return (
    <div className="row mb-5">
      <p className="form-label">Banner 01</p>
      <div className="col-md-6">
        <div className="row align-items-center mb-5">
          <div className="col-sm-4">
            <label className="form-label" htmlFor="bannertype">
              Banner type
            </label>
          </div>
          <div className="col-sm-8">
            <select
              className="form-input"
              id="bannertype"
              style={{ width: "150px" }}
            >
              <option selected>Image</option>
              <option value="1">Video</option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-4">
            <label htmlFor="bannerimageupload" class="form-label mb-3">
              Banner Image
            </label>
          </div>
          <div class="col-sm-6 p-0">
            <div class="form-file-upload">
              <label
                for="bannerimageupload"
                class="form-file-upload-input mt-3"
              >
                Banner Image
              </label>
              <input
                type="file"
                id="bannerimageupload"
                class="form-file-upload-input"
                multiple
              />
              <span class="icon">
                <LuUpload />
              </span>
            </div>
            <div class="form-file-upload-info">
              CSK.jpeg (500Kb) <span class="remove-file">&#x2716;</span>
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-sm-4">
            <label className="form-label" htmlFor="buttonlink">
              Button link
            </label>
          </div>
          <div className="col-sm-8">
            <input
              className="form-input"
              type="text"
              placeholder="World Cup Package 1"
              id="buttonlink"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8">
            <button className="btn add-new-button m-0">Delete Banner</button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row align-items-center mb-5">
          <div className="col-sm-4">
            <label className="form-label" htmlFor="title">
              Title
            </label>
          </div>
          <div className="col-sm-8">
            {
              <input
                type="text"
                className="form-input"
                placeholder="Are You Excited For ICC T20 World Cup"
                id="title"
              />
            }
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-4">
            <label className="form-label" htmlFor="description">
              Description
            </label>
          </div>
          <div className="col-sm-8">
            <textarea
              className="form-input"
              rows={4}
              id="description"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBannerForm;
