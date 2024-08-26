import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import tableData from "../JsonData/data.json";
import "../orderPagination.scss"
import { useNavigate } from 'react-router-dom';

function OrderPagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage, setdataPerPage] =useState([]) 
    const itemsPerPage = 5;
    const navigate = useNavigate();
    const totalPages = Math.ceil(tableData.length / itemsPerPage )
        // const totalPages = 10
    const pageNum = [];
    if(totalPages <= 3){
        for(let i=1; i <= totalPages; i++){
            pageNum.push(i)
        }
    }else{
        if (currentPage <= 2) {
            pageNum.push(1, 2, 3, '...', totalPages);
        } else if (currentPage >= totalPages - 1) {
            pageNum.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
        } else {
            pageNum.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
        }
    }
    
    useEffect(()=>{
        let arr = []
        for(let i = (currentPage * itemsPerPage ) - itemsPerPage    ; i< currentPage * itemsPerPage ; i++ ){
            arr.push(tableData[i])
        } 
        setdataPerPage(arr)
    },[currentPage])

    const OrdersList = ()=>{
        navigate('/OrdersList')
    }

    return (
        <div className="card dashboard-Order-Cards">
            <div className="card-header d-flex justify-content-between bg-white align-items-center">
                <h5>Orders</h5>
                <div className="">
                    <button type="button" className="border border-0 bg-white text-success " onClick={OrdersList}>View
                        All</button>
                </div>
            </div>
            <div className="card-body p-0 m-0 order-table">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Order</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Client Contact</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPerPage.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.order}</td>
                                    <td>{item.clientName}</td>
                                    <td>{item.clientMobileNumber}</td>
                                    <td>{item.paymentStatus}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {/* <!-- Start pagination --> */}
            <div className="d-flex justify-content-end px-5 pb-2">
                    <ul className="pagination">
                        <li className={`page-item pagination-page-items ${currentPage === 1 ? "disabled" : "" } `} >
                            <button className="page-link"  aria-label="Previous" onClick={()=>setCurrentPage(currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {pageNum.map((page, i) => {
                            return (
                                <li className= {`page-item pagination-page-items ${currentPage === page ? "active": ""}`} key={i} >
                                {page === '...' ? (<span className="page-link">...</span>) :
                                (<button className="page-link"  onClick={()=>setCurrentPage(page)} >{page}</button>)}
                                </li>
                            )
                        })}
                        <li className={`page-item pagination-page-items ${currentPage === totalPages ? "disabled" : "" } `} >
                            <button className="page-link" aria-label="Next" onClick={()=>setCurrentPage(currentPage + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
            </div>
            {/* <!-- End pagination --> */}
        </div>
    )
}

export default OrderPagination