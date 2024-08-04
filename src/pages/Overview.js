import React from "react";
import "./Overview.css";
import Sidebar from "../components/Sidebar";

const Overview = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 container-fluid px-4">
        <div className="row mt-4 ">
          <div className="col-12">
            <div className="row m-0">
              <div className="col-md-12 pb-2">
                <h4>
                  <strong>Overview</strong>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Tax Due</h5>
                    <p className="card-text">
                      <strong>Current Payment Plan:</strong> Quarterly
                    </p>
                    <p className="card-text">
                      <strong>Last Payment:</strong> 1st Quarter - Sept 30, 2023
                      - ₱1175.12
                    </p>
                    <p className="card-text">
                      <strong>Next Payment:</strong> 2nd Quarter - April 1, to
                      June 30, 2024 - ₱1175.12
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-secondary">
                        Change Plan
                      </button>
                      <button className="btn btn-primary">Pay Tax Due</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Property Information</h5>
                    <p className="card-text">
                      <strong>Name of Declared Owner:</strong> Yolanda C. Valler
                    </p>
                    <p className="card-text">
                      <strong>Name of Barangay:</strong> F. De Jesus
                    </p>
                    <p className="card-text">
                      <strong>Tax Declaration Number:</strong> 40-0004-00800
                    </p>
                    <button className="btn btn-outline-secondary">
                      Select Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Payment History and Tax Bill</h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
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
                          <tr>
                            <td>#PY231234563</td>
                            <td>7 Mar 2024</td>
                            <td>₱1175.12</td>
                            <td>Quarterly (1)</td>
                            <td>Pending</td>
                            <td>
                              <button className="btn btn-primary btn-sm">
                                Pay Tax Due
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>#PY231234564</td>
                            <td>23 Dec 2023</td>
                            <td>₱1175.12</td>
                            <td>Quarterly (4)</td>
                            <td>Unpaid</td>
                            <td>
                              <button className="btn btn-primary btn-sm">
                                Pay Tax Due
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>#PY231234565</td>
                            <td>30 Sept 2023</td>
                            <td>₱1175.12</td>
                            <td>Quarterly (3)</td>
                            <td>Paid</td>
                            <td>
                              <button className="btn btn-outline-secondary btn-sm">
                                Download Receipt
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>#PY231234566</td>
                            <td>7 Mar 2023</td>
                            <td>₱1175.12</td>
                            <td>Quarterly (2)</td>
                            <td>Paid</td>
                            <td>
                              <button className="btn btn-outline-secondary btn-sm">
                                Download Receipt
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>#PY231234568</td>
                            <td>10 Feb 2023</td>
                            <td>₱1175.12</td>
                            <td>Quarterly (1)</td>
                            <td>Paid</td>
                            <td>
                              <button className="btn btn-outline-secondary btn-sm">
                                Download Receipt
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>#PY231234567</td>
                            <td>13 Jan 2022</td>
                            <td>₱4700.52</td>
                            <td>Annually (F)</td>
                            <td>Paid</td>
                            <td>
                              <button className="btn btn-outline-secondary btn-sm">
                                Download Receipt
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-secondary btn-sm">
                        Previous
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
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
