import React from "react";
import { Modal, Button } from "react-bootstrap";

const PayTaxDue = ({ show, handleClose, taxData, userData }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header style={{ justifyContent: "space-between" }}>
        <Modal.Title>
          <strong className="ml-2">Pay Tax Due</strong>
        </Modal.Title>

        <div>
          <strong>{taxData.taxDeclarationNumber}</strong>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4 ">
              <img
                style={{
                  height: "100px",
                  width: "auto",
                }}
                src="/ERPT logo 1.png"
                alt="Logo"
                className="img-fluid"
              />

              <p>
                <strong>Municipality of Unisan, Quezon</strong>
              </p>
            </div>

            <div
              className="col-md-6"
              style={{
                fontSize: "15px",
              }}
            >
              <p>
                F. De Jesus Brgy. Hall, Resma Rd, Unisan, Quezon 4305
                <br />
                Phone: 0912-123-1234
                <br />
                Email: unisan@gmail.com
                <br />
                Web: erpt-unisan.com
              </p>
            </div>
            <div
              className="col-md-6 text-right"
              style={{
                fontSize: "15px",
              }}
            >
              <p>
                <strong className="fs-5">{userData.name}</strong>
                <br />
                {userData.email}
                <br />
                {userData.address}
                <br />
                {userData.date}
                <br />
                Quarter (1)
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead className="thead-dark">
                    <tr>
                      <th>Real Property Tax</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Assessed Value - Building</td>
                      <td>{`PHP ${taxData.assessedValue}`}</td>
                    </tr>
                    <tr>
                      <td>Basic Tax 1%</td>
                      <td>{`PHP ${taxData.basicTax}`}</td>
                    </tr>
                    <tr>
                      <td>Special Education Fund 1%</td>
                      <td>{`PHP ${taxData.educationFund}`}</td>
                    </tr>
                    <tr>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sub -
                        Total Amount
                      </td>
                      <td>{`PHP ${taxData.subTotal}`}</td>
                    </tr>
                    <tr>
                      <td>Discount 10%</td>
                      <td>{`- PHP ${taxData.discount}`}</td>
                    </tr>
                    <tr className="fs-6">
                      <td>
                        <strong>
                          {" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
                        </strong>
                      </td>
                      <td>
                        <strong>{`PHP ${taxData.totalAmount}`}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success">
          <strong>Pay via MAYA</strong>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PayTaxDue;
