import React from "react";
import "../inquiry.scss";
import tableData from "../inquiry.json";
import { useNavigate } from "react-router-dom";

const Inquiry = () => {
  const navigate = useNavigate()
  const InquiryList = ()=>{
    navigate('/InquiryList')
  }
  return (
    <div className="card inquiry">
      <div className="card-header d-flex justify-content-between bg-white align-items-center">
        <h5>Inquiry</h5>
        <div className="">
          <button
            type="button"
            className="border border-0 bg-white text-success "
            onClick={InquiryList}
          >
            View All
          </button>
        </div>
      </div>
      <div className="card-body p-0 m-0 inquiry-card inquiry-scrollbar">
        <div className="dashbord-table-data-scrollbar ">
          <table className="data-table-header-collapse">
            <tbody>
              {tableData.map((value, i) => {
                return (
                  <tr className="table-data-elements d-flex justify-content-around align-items-center" key={i}>
                    <td className="">
                      <img
                        src={value.imageUrl}
                        class="inquiry-profiles"
                        alt="error"
                      />
                    </td>
                    <td className="fw-semibold">{value.package}</td>
                    <td className="fw-semibold">{value.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
