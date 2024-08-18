import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const Arptc = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  const usersData = [
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(1) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(2-4) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(1) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(2-4) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(1) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(2-4) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(1) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(2-4) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(1) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    {
      date: "10/03/23",
      taxpayer: "Yolanda C. Valler",
      period: "(2-4) 2023",
      ORNumber: "4335773",
      brgy: "Muliguin",
      class: "R",
    },
    // Additional dummy data for testing
  ];

  const filteredData = usersData
    .filter((user) => {
      if (filter === "All") return true;
      return user.status === filter;
    })
    

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
                <strong>Abstract of Real Property Tax Collection</strong>
              </h4>
            </div>
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
                    <Button
                      variant="btn-primary"
                      className="btn-primary ms-2 btn-sm"
                    >
                      Download
                    </Button>
                    <Button variant="outline-secondary" className="ms-2 btn-sm">
                      Filter
                    </Button>
                  </div>
                  <div className="table-container">
                    <Table hover responsive>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Taxpayer</th>
                          <th>Period Covered</th>
                          <th>O.R. No</th>
                          <th>Name of Brgy.</th>
                          <th>Class</th>
                          <th>Basic Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentRows.map((user, index) => (
                          <tr key={index}>
                            <td>{user.date}</td>
                            <td>{user.taxpayer}</td>
                            <td>{user.period}</td>
                            <td>{user.ORNumber}</td>
                            <td>{user.brgy}</td>
                            <td>{user.class}</td>
                            <td>
                              <Button
                                variant="outline-primary"
                                size="sm"
                                className="me-2 "
                              >
                                View Computation
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

export default Arptc;
