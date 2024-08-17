import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const UserManagement = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const filteredData = usersData
    .filter((user) => {
      if (filter === "All") return true;
      return user.status === filter;
    })
    .filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                    <Button variant="outline-secondary" className="ms-2 btn-sm">
                      Filter
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
    </div>
  );
};

export default UserManagement;
