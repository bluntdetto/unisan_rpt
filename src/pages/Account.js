import React, { useState } from "react";
import "./Overview.css";
import { Badge, Modal, Button, Form } from "react-bootstrap";

const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // Modal state
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "Yolanda",
    lastName: "Valler",
    middleInitial: "C.",
    email: "yolanda@gmail.com",
    phone: "09123456789",
  });

  // Sample data for the table
  const listOfProperties = [
    {
      no: "1",
      kind: "Agricultural",
      TDno: "40-004-00800",
      loc: "F. De Jesus",
      assessedValue: "22,480.00",
    },
    {
      no: "2",
      kind: "Agricultural",
      TDno: "40-004-00800",
      loc: "F. De Jesus",
      assessedValue: "22,480.00",
    },
    {
      no: "3",
      kind: "Agricultural",
      TDno: "40-004-00800",
      loc: "F. De Jesus",
      assessedValue: "22,480.00",
    },
    {
      no: "3",
      kind: "Agricultural",
      TDno: "40-004-00800",
      loc: "F. De Jesus",
      assessedValue: "22,480.00",
    },

    // Add more rows if needed
  ];

  // Calculate the indices of the first and last rows for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = listOfProperties.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Pagination logic
  const totalPages = Math.ceil(listOfProperties.length / rowsPerPage);

  // Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here, e.g., API call
    handleClose();
  };

  // Handle input changes in the form
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container-fluid px-4 mr-0">
        <div className="row pt-3">
          <div className="col-12">
            <div className="row m-0">
              <div className="col-md-12 pb-2">
                <h4>
                  <strong>Account</strong>
                </h4>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-body p-4">
                    <h5 className="card-title">
                      <strong>Personal Information</strong>
                    </h5>

                    <div className="row pt-3">
                      <div className="col">
                        <p className="card-text title mb-0 ">First Name</p>
                        <p className="info">Yolanda</p>
                      </div>
                      <div className="col">
                        <p className="card-text title mb-0">Last Name</p>
                        <p className="card-text info">Valler</p>
                      </div>
                      <div className="col">
                        <p className="card-text title mb-0">Middle Initial</p>
                        <p className="card-text info">C.</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <p className="card-text title mb-0">Email Address</p>
                        <p className="card-text info">yolanda@gmail.com</p>
                      </div>
                      <div className="col">
                        <p className="card-text title mb-0">Phone</p>
                        <p className="card-text info">09123456789</p>
                      </div>
                      <div className="col"></div>
                    </div>

                    <div className="d-flex pt-3">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={handleShow}
                      >
                        Edit
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
                      <strong>List of Properties</strong>
                    </h5>
                    <div className="table-responsive table-container">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Kind</th>
                            <th>TD No.</th>

                            <th>Location of Property</th>
                            <th>Assessed Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentRows.map((row, index) => (
                            <tr key={index}>
                              <td>{row.no}</td>
                              <td>{row.kind}</td>
                              <td>{row.TDno}</td>
                              <td>{row.loc}</td>
                              <td>{row.assessedValue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex ">
                      <button
                        className="btn btn-outline-secondary btn-sm mx-2 "
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
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-secondary btn-sm mx-2 a ">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Personal Info Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName" className="mt-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="middleInitial" className="mt-3">
              <Form.Label>Middle Initial</Form.Label>
              <Form.Control
                type="text"
                name="middleInitial"
                value={userData.middleInitial}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Modal.Footer>
              <div className="d-flex justify-content-end w-100">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Overview;
