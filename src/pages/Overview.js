import React, { useState } from "react";
import "./Overview.css";
import { Badge, Modal, Button, Table, Form } from "react-bootstrap";
import PayTaxDue from "../components/PayTaxDue"; // Import the modal component

const Overview = () => {
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [showTaxModal, setShowTaxModal] = useState(false); // New state for TaxDeclarationModal
  const [showChangePlanModal, setShowChangePlanModal] = useState(false); // New state for Change Plan Modal

  const [selectedProperty, setSelectedProperty] = useState({
    barangay: "F. De Jesus",
    taxDeclaration: "40-0004-00800",
  });

  const [highlightedProperty, setHighlightedProperty] = useState(null); // State to track the highlighted property
  const [selectedPlan, setSelectedPlan] = useState("Annually"); // State to track the selected plan

  // Data for the tax modal
  const taxData = {
    taxDeclarationNumber: "40 - 004 - 12345",
    logoUrl: "https://via.placeholder.com/150", // Replace with actual logo URL
    companyName: "ERPT - UNISAN",
    municipality: "Municipality of Unisan, Quezon",
    address: "F. De Jesus Brgy. Hall, Resma Rd, Unisan, Quezon 4305",
    phone: "0912-123-1234",
    email: "unisan@gmail.com",
    website: "erpt-unisan.com",
    assessedValue: "261,140.00",
    basicTax: "652.85",
    educationFund: "652.85",
    subTotal: "1,305.70",
    discount: "130.57",
    totalAmount: "1,175.13",
  };

  const userData = {
    name: "Yolanda C. Valler",
    email: "yolandavaller@gmail.com",
    address: "Brgy. F. De Jesus, Unisan, Quezon",
    date: "Mar 7, 2024",
  };

  // Pagination state and data for payment history
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

  // Modal logic for selecting a property
  const properties = [
    { barangay: "F. De Jesus", taxDeclaration: "40-0004-00800" },
    { barangay: "F. De Jesus", taxDeclaration: "40-0004-00800" },
    { barangay: "F. De Jesus", taxDeclaration: "40-0004-00800" },
  ];

  const handleSelectProperty = (property) => {
    setHighlightedProperty(property); // Highlight the selected property
  };

  const handleSaveProperty = () => {
    if (highlightedProperty) {
      setSelectedProperty(highlightedProperty); // Save the highlighted property
      setShowModal(false); // Close the modal
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handlers to show/hide the tax modal
  const handleShowTaxModal = () => setShowTaxModal(true);
  const handleCloseTaxModal = () => setShowTaxModal(false);

  // Handlers to show/hide the change plan modal
  const handleShowChangePlanModal = () => setShowChangePlanModal(true);
  const handleCloseChangePlanModal = () => setShowChangePlanModal(false);

  const handleSavePlan = () => {
    // Save the selected plan (you can add your logic here)
    setShowChangePlanModal(false);
  };

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
                      <button className="btn btn-outline-secondary btn-sm mr-3" 
                      onClick={handleShowChangePlanModal}
                      >
                        Change Plan
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleShowTaxModal}
                      >
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
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={handleShowModal}
                      >
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
                    <div className="table-responsive table-container">
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
                                  <button
                                    className="btn btn-primary btn-sm"
                                    onClick={handleShowTaxModal}
                                  >
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
      {/* Modal for selecting property */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Barangay</th>
                <th>Tax Declaration</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr
                  key={index}
                  onClick={() => handleSelectProperty(property)}
                  className={
                    highlightedProperty === property ? "table-active" : ""
                  }
                  style={{ cursor: "pointer" }}
                >
                  <td>{property.barangay}</td>
                  <td>{property.taxDeclaration}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveProperty}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Tax Declaration Modal */}
      <PayTaxDue
        show={showTaxModal}
        handleClose={handleCloseTaxModal}
        taxData={taxData}
        userData={userData}
      />
      {/* Change Plan Modal */}
      <Modal show={showChangePlanModal} onHide={handleCloseChangePlanModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Payment Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <Form.Group controlId="planSelect">
              <Form.Label>Select Payment Plan</Form.Label>
              <Form.Control
                as="select"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
              >
                <option value="Annually">Annually</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Pre-Annual">Pre-Annual</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChangePlanModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSavePlan}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Overview;
