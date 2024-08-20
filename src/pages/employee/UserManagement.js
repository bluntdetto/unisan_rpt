import React, { useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const UserManagement = () => {
  const [sort, setSort] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showSortModal, setShowSortModal] = useState(false); // State to show/hide modal
  const [selectedColumn, setSelectedColumn] = useState("Name");
  const [sortOrder, setSortOrder] = useState("asc"); // State to hold sort order
  const rowsPerPage = 9;

  const usersData = [
    {
      no: "1",
      name: "Yolanda C. Valler",
      email: "yolandavaller@gmail.com",
      phoneNo: "09123456789",
      taxDeclaration: "40-1234-12345",
      assessedValue: "22,420.00",
    },
    // Additional dummy data for testing
    {
      no: "2",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phoneNo: "0987654321",
      taxDeclaration: "50-2345-56789",
      assessedValue: "30,000.00",
    },
    {
      no: "3",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      phoneNo: "0123456789",
      taxDeclaration: "60-3456-67890",
      assessedValue: "15,000.00",
    },
    {
      no: "1",
      name: "Yolanda C. Valler",
      email: "yolandavaller@gmail.com",
      phoneNo: "09123456789",
      taxDeclaration: "40-1234-12345",
      assessedValue: "22,420.00",
    },
    // Additional dummy data for testing
    {
      no: "2",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phoneNo: "0987654321",
      taxDeclaration: "50-2345-56789",
      assessedValue: "30,000.00",
    },
    {
      no: "3",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      phoneNo: "0123456789",
      taxDeclaration: "60-3456-67890",
      assessedValue: "15,000.00",
    },
    {
      no: "1",
      name: "Yolanda C. Valler",
      email: "yolandavaller@gmail.com",
      phoneNo: "09123456789",
      taxDeclaration: "40-1234-12345",
      assessedValue: "22,420.00",
    },
    // Additional dummy data for testing
    {
      no: "2",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phoneNo: "0987654321",
      taxDeclaration: "50-2345-56789",
      assessedValue: "30,000.00",
    },
    {
      no: "3",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      phoneNo: "0123456789",
      taxDeclaration: "60-3456-67890",
      assessedValue: "15,000.00",
    },
  ];

  const sortedData = usersData
    .sort((user) => {
      if (sort === "All") return true;
      return user.status === sort;
    })
    .sort((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    const handleSort = () => {
      setShowSortModal(true);
    };
  
    const handleSaveSort = () => {
      // Implement sorting logic here based on selectedColumn and sortOrder
      console.log("Selected Column:", selectedColumn);
      console.log("Sort Order:", sortOrder);
  
      // Close modal
      setShowSortModal(false);
    };
  

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div className="container-fluid px-4 mr-0">
      <div className="row pt-3">
        <div className="col-12">
          <div className="row m-0">
            <div className="col-md-12 pb-2">
              <h4>
                <strong>Real Property Owners</strong>
              </h4>
            </div>
          </div>
          <div className="card p-4" style={{ backgroundColor: "white" }}>
            <h5 className="card-title mb-4">
              <strong>Create Real Property Owner Account</strong>
            </h5>
            <form>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formName"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="formEmail"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formphoneNo">Phone no.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formphoneNo"
                      placeholder="Enter phone no."
                    />
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formtaxDeclaration">Tax Declaration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formtaxDeclaration"
                      placeholder="Enter tax declaration"
                    />
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formassessedValue">Assessed Value</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formassessedValue"
                      placeholder="Enter assessed Value"
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary float-right">
                Create
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="ms-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="outline-secondary" className="ms-2 btn-sm" onClick={handleSort}>
                      Sort
                    </Button>
                  </div>
                  <div className="table-container">
                    <Table hover responsive>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone No.</th>
                          <th>Tax Declaration</th>
                          <th>Assessed Value</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentRows.map((user, index) => (
                          <tr key={index}>
                            <td>{user.no}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNo}</td>
                            <td>{user.taxDeclaration}</td>
                            <td>{user.assessedValue}</td>
                            <td>
                              <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                              >
                                Edit
                              </Button>
                              <Button variant="danger" size="sm">
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex mt-2 ">
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
      {/* Sort Modal */}
      <Modal show={showSortModal} onHide={() => setShowSortModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formColumn">
              <Form.Label>Column</Form.Label>
              <Form.Control
                as="select"
                value={selectedColumn}
                onChange={(e) => setSelectedColumn(e.target.value)}
              >
                <option value="Name">Name</option>
                <option value="Email">Email</option>
                <option value="TaxDeclaration">Tax Declaration</option>
                <option value="AssessedValue">Assessed Value</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSortOrder" className="mt-3">
              <Form.Label>Sort by</Form.Label>
              <Form.Control
                as="select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                {selectedColumn === "TaxDeclaration" ||
                selectedColumn === "AssessedValue" ? (
                  <>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </>
                ) : (
                  <>
                    <option value="asc">Alphabetical Asc (A - Z)</option>
                    <option value="desc">Alphabetical Dsc (Z - A)</option>
                  </>
                )}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSortModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveSort}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
