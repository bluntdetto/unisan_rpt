import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div>
      <div className="container-fluid px-4 mr-0 ">
        <div className="row pt-3">
          <div className="col-12">
            <div className="row m-0">
              <div className="col-md-12 pb-2">
                <h4>
                  <strong>Overview</strong>
                </h4>
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
                    <p className="card-text title mb-0 ">
                      Current Payment Plan
                    </p>
                    <p className="info">Quarterly</p>
                    <p className="card-text title mb-0">Last Payment</p>
                    <p className="card-text info">
                      1st Quarter - Sept 30, 2023 - ₱1175.12
                    </p>

                    <p className="card-text title mb-0">Next Payment</p>
                    <p className="card-text info">
                      2nd Quarter - April 1, to June 30, 2024 - ₱1175.12
                    </p>
                    <p></p>
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
                      <button className="btn btn-outline-secondary btn-sm ">
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
