import React, { useState } from "react";
import { Table, Button, Badge, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Payments.css"; // Custom CSS for this component

const Payments = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  // State for modal visibility
  const [showFilterModal, setShowFilterModal] = useState(false);

  // State for filter inputs
  const [filterData, setFilterData] = useState({
    fromDate: null,
    toDate: null,
    minAmount: "",
    maxAmount: "",
    plan: "",
    status: "",
  });

  const paymentsData = [
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
      id: "#PY231234569",
      date: "10 Dec 2021",
      amount: "₱1175.12",
      plan: "Quarterly (4)",
      status: "Paid",
    },
    {
      id: "#PY231234569",
      date: "10 Dec 2021",
      amount: "₱1175.12",
      plan: "Quarterly (4)",
      status: "Paid",
    },
    {
      id: "#PY231234569",
      date: "10 Dec 2021",
      amount: "₱1175.12",
      plan: "Quarterly (4)",
      status: "Paid",
    },
    {
      id: "#PY231234569",
      date: "10 Dec 2021",
      amount: "₱1175.12",
      plan: "Quarterly (4)",
      status: "Paid",
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const applyFilter = () => {
    setShowFilterModal(false);
    // Here you can implement the logic to filter the paymentsData based on filterData
    // Example: you can filter by date range, min/max amount, plan, and status
  };

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

  const renderActionButton = (status) => {
    if (status === "Paid") {
      return <Button variant="outline-primary btn-sm">Download Receipt</Button>;
    } else {
      return <Button variant="outline-primary btn-sm">Pay Tax Due</Button>;
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = paymentsData.filter((payment) => {
    // Filter by status (button group filter)
    if (filter !== "All" && payment.status !== filter) {
      return false;
    }
  
    // Filter by date range
    if (filterData.fromDate && new Date(payment.date) < new Date(filterData.fromDate)) {
      return false;
    }
    if (filterData.toDate && new Date(payment.date) > new Date(filterData.toDate)) {
      return false;
    }
  
    // Filter by amount
    const paymentAmount = parseFloat(payment.amount.replace(/[₱,]/g, ""));
    if (filterData.minAmount && paymentAmount < parseFloat(filterData.minAmount)) {
      return false;
    }
    if (filterData.maxAmount && paymentAmount > parseFloat(filterData.maxAmount)) {
      return false;
    }
  
    // Filter by plan
    if (filterData.plan && payment.plan.indexOf(filterData.plan) === -1) {
      return false;
    }
  
    // Filter by status from modal
    if (filterData.status && payment.status !== filterData.status) {
      return false;
    }
  
    return true;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="container-fluid px-4 mr-0">
      <div className="row pt-3">
        <div className="col-12">
          <div className="row m-0">
            <div className="col-md-12 pb-2">
              <h4>
                <strong>Payment History and Tax Bill</strong>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="btn-group">
                      <Button
                        className="btn-sm px-3"
                        variant="outline-secondary"
                        onClick={() => setFilter("All")}
                        active={filter === "All"}
                      >
                        All
                      </Button>
                      <Button
                        className="btn-sm px-3"
                        variant="outline-secondary"
                        onClick={() => setFilter("Paid")}
                        active={filter === "Paid"}
                      >
                        Paid
                      </Button>

                      <Button
                        className="btn-sm px-3"
                        variant="outline-secondary"
                        onClick={() => setFilter("Pending")}
                        active={filter === "Pending"}
                      >
                        Pending
                      </Button>
                      <Button
                        className="btn-sm px-3"
                        variant="outline-secondary"
                        onClick={() => setFilter("Unpaid")}
                        active={filter === "Unpaid"}
                      >
                        Unpaid
                      </Button>
                    </div>
                    <Button variant="outline-secondary" className="ms-2 btn-sm" onClick={() => setShowFilterModal(true)}>
                      Filter
                    </Button>
                  </div>
                  <div className="table-responsive table-container">
                    <Table hover responsive>
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
                        {currentRows.map((payment, index) => (
                          <tr key={index}>
                            <td>{payment.id}</td>
                            <td>{payment.date}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.plan}</td>
                            <td>{renderStatusBadge(payment.status)}</td>
                            <td>{renderActionButton(payment.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex ">
                    <Button
                      variant="outline-secondary text-center"
                      className="btn-sm mx-2"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline-secondary text-center"
                      className="btn-sm"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                    <div className="sub-info mx-3 mt-1">
                      Page {currentPage} of {totalPages}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex justify-content-between">
              <Form.Group>
                <Form.Label>Date From</Form.Label>
                <DatePicker
                  selected={filterData.fromDate}
                  onChange={(date) => setFilterData({ ...filterData, fromDate: date })}
                  className="form-control"
                  placeholderText="From"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date To</Form.Label>
                <DatePicker
                  selected={filterData.toDate}
                  onChange={(date) => setFilterData({ ...filterData, toDate: date })}
                  className="form-control"
                  placeholderText="To"
                />
              </Form.Group>
            </div>
            <Form.Group className="mt-3">
              <Form.Label>Amount</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Control
                  type="number"
                  name="minAmount"
                  value={filterData.minAmount}
                  onChange={handleFilterChange}
                  placeholder="min"
                />
                <Form.Control
                  type="number"
                  name="maxAmount"
                  value={filterData.maxAmount}
                  onChange={handleFilterChange}
                  placeholder="max"
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Plan</Form.Label>
              <Form.Control
                as="select"
                name="plan"
                value={filterData.plan}
                onChange={handleFilterChange}
              >
                <option value="">Select plan</option>
                <option value="Annually">Annually</option>
                <option value="Quarterly">Quarterly</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={filterData.status}
                onChange={handleFilterChange}
              >
                <option value="">Select status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Pending">Pending</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowFilterModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowFilterModal(false);
              setCurrentPage(1); // Reset pagination
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payments;
