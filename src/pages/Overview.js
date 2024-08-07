import React, { useState } from "react";
import "./Overview.css";
import { Badge } from "react-bootstrap";

const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Sample data for the table
  const paymentHistory = [
    {
      id: "#PY231234563",
      date: "7 Mar 2024",
      amount: "₱1175.12",
      plan: "Quarterly (1)",
      status: "Pending",
    },
    {
      id: "#PY231234564",
      date: "23 Dec 2023",
      amount: "₱1175.12",
      plan: "Quarterly (4)",
      status: "Unpaid",
    },
    {
      id: "#PY231234565",
      date: "30 Sept 2023",
      amount: "₱1175.12",
      plan: "Quarterly (3)",
      status: "Paid",
    },
    {
      id: "#PY231234566",
      date: "7 Mar 2023",
      amount: "₱1175.12",
      plan: "Quarterly (2)",
      status: "Paid",
    },
    {
      id: "#PY231234568",
      date: "10 Feb 2023",
      amount: "₱1175.12",
      plan: "Quarterly (1)",
      status: "Paid",
    },
    {
      id: "#PY231234567",
      date: "13 Jan 2022",
      amount: "₱4700.52",
      plan: "Annually (F)",
      status: "Paid",
    },
    {
      id: "#PY231234567",
      date: "13 Jan 2022",
      amount: "₱4700.52",
      plan: "Annually (F)",
      status: "Paid",
    },
    // Add more rows if needed
  ];

   const renderStatusBadge = (status) => {
     switch (status) {
       case "Paid":
         return <Badge bg="success">Paid</Badge>;
       case "Pending":
         return <Badge bg="warning">Pending</Badge>;
       case "Unpaid":
         return <Badge bg="danger">Unpaid</Badge>;
       default:
         return <Badge bg="secondary">Unknown</Badge>;
     }
   };

  // Calculate the indices of the first and last rows for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = paymentHistory.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Pagination logic
  const totalPages = Math.ceil(paymentHistory.length / rowsPerPage);

  return (
    <div>
      <div className="container-fluid px-4 mr-0">
        <div className="row pt-3">
          <div className="col-12">
            <div className="row m-0">
              <div className="col-md-12 pb-2 d-flex justify-content-between">
                <h4>
                  <strong>Overview</strong>
                </h4>
                <h5 className="circle-background d-inline-flex align-items-center justify-content-center float-sm-right">
                  <i className="bi bi-bell "></i>
                </h5>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      <strong>Tax Due</strong>
                    </h5>
                    <p className="sub-info">
                      Your current installment plan and tax due information are
                      shown here
                    </p>
                    <p className="card-text title mb-0">Current Payment Plan</p>
                    <p className="info">Quarterly</p>
                    <p className="card-text title mb-0">Last Payment</p>
                    <p className="card-text info">
                      1st Quarter - Sept 30, 2023 - ₱1175.12
                    </p>

                    <p className="card-text title mb-0">Next Payment</p>
                    <p className="card-text info">
                      2nd Quarter - April 1, to June 30, 2024 - ₱1175.12
                    </p>
                    <div className="d-flex pt-3">
                      <button className="btn btn-outline-secondary btn-sm mr-3">
                        Change Plan
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Pay Tax Due
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      <strong>Property Information</strong>
                    </h5>
                    <p className="sub-info">
                      The next payment will be made with the selected property
                      below
                    </p>
                    <p className="card-text title mb-0">
                      Name of Declared Owner
                    </p>
                    <p className="card-text info">Yolanda C. Valler</p>
                    <p className="card-text title mb-0">Name of Barangay</p>
                    <p className="card-text info">F. De Jesus</p>

                    <p className="card-text title mb-0">
                      Tax Declaration Number
                    </p>
                    <p className="card-text info">40-0004-00800</p>
                    <div className="d-flex pt-3">
                      <button className="btn btn-outline-secondary btn-sm">
                        Select Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body p-4">
                    <h5 className="card-title pb-3">
                      <strong>Payment History and Tax Bill</strong>
                    </h5>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Payment ID</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Plan</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentRows.map((row, index) => (
                            <tr key={index}>
                              <td>{row.id}</td>
                              <td>{row.date}</td>
                              <td>{row.amount}</td>
                              <td>{row.plan}</td>
                              <td>{renderStatusBadge(row.status)}</td>
                              <td>
                                {row.status === "Paid" ? (
                                  <button className="btn btn-outline-secondary btn-sm">
                                    Download Receipt
                                  </button>
                                ) : (
                                  <button className="btn btn-primary btn-sm">
                                    Pay Tax Due
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex">
                      <button
                        className="btn btn-outline-secondary btn-sm mx-2"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        Previous
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
