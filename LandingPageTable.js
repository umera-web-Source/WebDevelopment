import { LuUpload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import BannerData from "../JsonData/BannerData.json";

function LandingPageTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(BannerData.length / itemsPerPage);
  const pageNum = [];

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
  } else {
    if (currentPage <= 2) {
      pageNum.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pageNum.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNum.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  useEffect(() => {
    let arr = [];
    for (
      let i = currentPage * itemsPerPage - itemsPerPage;
      i < currentPage * itemsPerPage && i < BannerData.length;
      i++
    ) {
      arr.push(BannerData[i]);
    }
    setDataPerPage(arr);
  }, [currentPage]);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bannertable");
  };
  const handleButtonAddBannerClick = () => {
    navigate("/landingpageform");
  };

  return (
    <div className="page-container ">
      <div className="mb-4">
        <h3 className="my-0">Landing Page Content</h3>
        <div className="d-flex justify-content-between">
          <div>Manage content of landing page.</div>
          <div>
            <button
              className="btn add-new-button"
              onClick={handleButtonAddBannerClick}
            >
              <FaPlus className="icon" />
              Add Banner
            </button>
          </div>
        </div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto d-flex"></div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <div className="table-wrapper">
            <table className="w-100 data-table table table-hover">
              <thead>
                <tr>
                  <th>BannerType</th>
                  <th className="p-0">Banner </th>
                  <th>Banner Title</th>
                  <th>Description</th>
                  <th>Links</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataPerPage.map((banner, index) => (
                  <tr key={index}>
                    <td>{banner.BannerType}</td>
                    <td className="">
                      <img
                        src={banner.Banner}
                        className="w-50 h-75"
                        alt="bannerimg"
                      />
                    </td>
                    <td>{banner.BannerTitle}</td>
                    <td>{banner.Description}</td>
                    <td>{banner.Links}</td>

                    <td >
                      <div className="d-flex">
                        
                        <button
                          className="action-icon"
                          onClick={handleButtonClick}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="action-icon">
                          <i class="fa-regular fa-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
          <div>
            <select className="table-control-input">
              <option selected>10 items per page</option>
              <option value={1}>20 items per page</option>
              <option value={2}>30 items per page</option>
              <option value={3}>40 items per page</option>
              <option value={3}>50 items per page</option>
            </select>
          </div>
          <ul className="pagination">
            <li
              className={`page-item pagination-page-items ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {pageNum.map((page, i) => (
              <li
                className={`page-item pagination-page-items ${
                  currentPage === page ? "active" : ""
                }`}
                key={i}
              >
                {page === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}
            <li
              className={`page-item pagination-page-items ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="page-container">
    //   <div className="mb-4">
    //     <h3 className="my-0">Landing Page Content</h3>
    //     <div>Manage content of the landing page .</div>
    //   </div>
    //   <form className="form-section">
    //     <p className="form-section-heading">Add Contents</p>
    //     <div className="p-4 pt-5 form-inputs-section">
    //       <div className="row justify-content-between mb-3 tournament-text p-0">
    //         <div className="col-auto">
    //           <p className="form-label pt-2">Hero banner</p>
    //         </div>
    //         <div className="col-auto">
    //           <div>
    //             <button
    //               className="btn add-new-button m-0"
    //               onClick={handleButtonClick}
    //             >
    //               <FaPlus className="icon" />
    //               Add Banner
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mb-5">
    //         <p className="form-label">Banner 01</p>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="bannertype">
    //                 Banner type
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <select
    //                 className="form-input"
    //                 id="bannertype"
    //                 style={{ width: "150px" }}
    //               >
    //                 <option selected>Image</option>
    //                 <option value="1">Video</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label for="bannerimageupload" class="form-label mb-3">
    //                 Banner Image
    //               </label>
    //             </div>
    //             <div class="col-sm-6 p-0">
    //               <div class="form-file-upload">
    //                 <label
    //                   for="bannerimageupload"
    //                   class="form-file-upload-input mt-3"
    //                 >
    //                   Banner Image
    //                 </label>
    //                 <input
    //                   type="file"
    //                   id="bannerimageupload"
    //                   class="form-file-upload-input"
    //                 />
    //                 <span class="icon">
    //                   <LuUpload />
    //                 </span>
    //               </div>
    //               <div class="form-file-upload-info">
    //                 CSK.jpeg (500Kb) <span class="remove-file">&#x2716;</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="buttonlink">
    //                 Button link
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <input
    //                 className="form-input"
    //                 type="text"
    //                 placeholder="World Cup Package 1"
    //                 id="buttonlink"
    //               />
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-sm-4"></div>
    //             <div className="col-sm-8">
    //               <button className="btn add-new-button m-0">
    //                 Delete Banner
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="title">
    //                 Title
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               {
    //                 <input
    //                   type="text"
    //                   className="form-input"
    //                   placeholder="Are You Excited For ICC T20 World Cup"
    //                   id="title"
    //                 />
    //               }
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="description">
    //                 Description
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <textarea
    //                 className="form-input"
    //                 rows={4}
    //                 id="description"
    //                 placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //               ></textarea>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mb-5">
    //         <p className="form-label">Banner 02</p>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="bannertype">
    //                 Banner type
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <select
    //                 className="form-input"
    //                 id="bannertype"
    //                 style={{ width: "150px" }}
    //               >
    //                 <option selected>Image</option>
    //                 <option value="1">Video</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label for="bannerimageupload" class="form-label mb-3">
    //                 Banner Image
    //               </label>
    //             </div>
    //             <div class="col-sm-6 p-0">
    //               <div class="form-file-upload">
    //                 <label
    //                   for="bannerimageupload"
    //                   class="form-file-upload-input mt-3"
    //                 >
    //                   Banner Image
    //                 </label>
    //                 <input
    //                   type="file"
    //                   id="bannerimageupload"
    //                   class="form-file-upload-input"
    //                 />
    //                 <span class="icon">
    //                   <LuUpload />
    //                 </span>
    //               </div>
    //               <div class="form-file-upload-info">
    //                 CSK.jpeg (500Kb) <span class="remove-file">&#x2716;</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="buttonlink">
    //                 Button link
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <input
    //                 className="form-input"
    //                 type="text"
    //                 placeholder="World Cup Package 1"
    //                 id="buttonlink"
    //               />
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-sm-4"></div>
    //             <div className="col-sm-8">
    //               <button className="btn add-new-button m-0">
    //                 Delete Banner
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="title">
    //                 Title
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               {
    //                 <input
    //                   type="text"
    //                   className="form-input"
    //                   placeholder="Are You Excited For ICC T20 World Cup"
    //                   id="title"
    //                 />
    //               }
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="description">
    //                 Description
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <textarea
    //                 className="form-input"
    //                 rows={4}
    //                 id="description"
    //                 placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //               ></textarea>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row justify-content-between mb-3 tournament-text p-0">
    //         <div className="col-auto">
    //           <p className="form-label pt-2">Ad banner</p>
    //         </div>
    //         <div className="col-auto">
    //           <div>
    //             <button className="btn add-new-button m-0">
    //               <FaPlus className="icon" />
    //               Add Ad
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mb-5">
    //         <p className="form-label">Banner 01</p>
    //         <div className="col-md-6">
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label for="bannerimageupload" class="form-label mb-3">
    //                 Banner Image
    //               </label>
    //             </div>
    //             <div class="col-sm-6 p-0">
    //               <div class="form-file-upload">
    //                 <label
    //                   for="bannerimageupload"
    //                   class="form-file-upload-input mt-3"
    //                 >
    //                   Banner Image
    //                 </label>
    //                 <input
    //                   type="file"
    //                   id="bannerimageupload"
    //                   class="form-file-upload-input"
    //                 />
    //                 <span class="icon">
    //                   <LuUpload />
    //                 </span>
    //               </div>
    //               <div class="form-file-upload-info">
    //                 CSK.jpeg (500Kb) <span class="remove-file">&#x2716;</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="buttonlink">
    //                 Button link
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <input
    //                 className="form-input"
    //                 type="text"
    //                 placeholder="World Cup Package 1"
    //                 id="buttonlink"
    //               />
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-sm-4"></div>
    //             <div className="col-sm-8">
    //               <button className="btn add-new-button m-0">
    //                 Delete Banner
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="title">
    //                 Title
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               {
    //                 <input
    //                   type="text"
    //                   className="form-input"
    //                   placeholder="Are You Excited For ICC T20 World Cup"
    //                   id="title"
    //                 />
    //               }
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="description">
    //                 Description
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <textarea
    //                 className="form-input"
    //                 rows={4}
    //                 id="description"
    //                 placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //               ></textarea>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row justify-content-between mb-3 tournament-text p-0">
    //         <div className="col-auto">
    //           <p className="form-label pt-2">Others</p>
    //         </div>
    //         <div className="col-auto"></div>
    //       </div>
    //       <div className="row mb-2">
    //         <div className="col-md-6">
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="description">
    //                 SEO Content
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <textarea
    //                 className="form-input"
    //                 rows={7}
    //                 id="description"
    //                 placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //               ></textarea>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label for="client-logos" class="form-label mb-3">
    //                 Client Logos
    //               </label>
    //             </div>
    //             <div class="col-sm-6 p-0">
    //               <div class="form-file-upload">
    //                 <label
    //                   for="client-logos"
    //                   class="form-file-upload-input mt-3"
    //                 >
    //                   Client Logos
    //                 </label>
    //                 <input
    //                   type="file"
    //                   id="client-logos"
    //                   class="form-file-upload-input"
    //                 />
    //                 <span class="icon">
    //                   <LuUpload />
    //                 </span>
    //               </div>
    //               <div class="form-file-upload-info">
    //                 CSK.jpeg (500Kb) <span class="remove-file">&#x2716;</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mb-5">
    //         <p className="form-label mb-5">Crickbuster Information</p>
    //         <div className="col-md-6">
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="contactnumber">
    //                 Contact Number
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <input
    //                 className="form-input"
    //                 type="text"
    //                 placeholder="(954)-526-5577"
    //                 id="contactnumber"
    //               />
    //             </div>
    //           </div>
    //           <div className="row align-items-center mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="email">
    //                 Email ID
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <input
    //                 className="form-input"
    //                 type="text"
    //                 placeholder="inquiry@cricbuster.com"
    //                 id="email"
    //               />
    //             </div>
    //           </div>
    //           <div className="row mb-5">
    //             <div className="col-sm-4">
    //               <label className="form-label" htmlFor="address">
    //                 Address
    //               </label>
    //             </div>
    //             <div className="col-sm-8">
    //               <textarea
    //                 className="form-input"
    //                 rows={4}
    //                 id="address"
    //                 placeholder="16192 Coastal Highway,Lewes,DE 19958"
    //               ></textarea>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6"></div>
    //       </div>
    //     </div>
    //     <div className="form-btns">
    //       <button className="form-cancel-btn">Cancel</button>
    //       <button className="form-save-btn">Save</button>
    //     </div>
    //   </form>
    // </div>
  );
}
export default LandingPageTable;
