import React from "react";

const EmployeeManagement = () => {
  const employees = [
    {
      no: "001",
      name: "Bernard C. Abella",
      email: "bernardabella@gmail.com",
      password: "********",
    },
    {
      no: "002",
      name: "Bernard C. Abella",
      email: "bernardabella@gmail.com",
      password: "********",
    },
    {
      no: "001",
      name: "Bernard C. Abella",
      email: "bernardabella@gmail.com",
      password: "********",
    },
    {
      no: "002",
      name: "Bernard C. Abella",
      email: "bernardabella@gmail.com",
      password: "********",
    },
  ];

  return (
    <div
      className="container-fluid p-4 "
      style={{ backgroundColor: "#e8ecf0" }}
    >
      <div className="row pb-2">
        <div className=" ">
          <div className="row m-0">
            <div className="col-md-12 pb-2">
              <h4>
                <strong>Employee Management</strong>
              </h4>
            </div>
          </div>
          <div className="card p-4" style={{ backgroundColor: "white" }}>
            <h5 className="card-title mb-4">
              <strong>Create Employee Account</strong>
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
                    <label htmlFor="formPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="formPassword"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="form-group info">
                    <label htmlFor="formRetypePassword">Re-Type Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="formRetypePassword"
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary float-right">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="">
          <div className="card p-4" style={{ backgroundColor: "white" }}>
            <h5 className="mb-3 ">
              <strong>All Employees</strong>
            </h5>
            <form className="d-flex mb-3">
              <input
                type="search"
                className="form-control mr-2"
                placeholder="Search Here"
                aria-label="Search"
              />
              <button type="button" className="btn btn-outline-secondary">
                Search
              </button>
            </form>
            <div className="table-responsive table-container">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td>{employee.no}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.password}</td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </button>
                        <button type="button" className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
