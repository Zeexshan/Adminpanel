import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

const LoanTable = () => {
  const rows = [
    {
      id: 101001,
      product: "Home Loan",
      img: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
      customer: "Alice Johnson",
      date: "15 September",
      amount: 500000,
      method: "Bank Transfer",
      status: "Approved",
    },
    {
      id: 101002,
      product: "Car Loan",
      img: "https://example.com/loan-car.jpg",
      customer: "Robert Brown",
      date: "22 September",
      amount: 300000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 101003,
      product: "Personal Loan",
      img: "https://example.com/loan-personal.jpg",
      customer: "Laura Wilson",
      date: "2 October",
      amount: 150000,
      method: "Credit Card",
      status: "Rejected",
    },
    {
      id: 101004,
      product: "Education Loan",
      img: "https://example.com/loan-education.jpg",
      customer: "Michael Davis",
      date: "10 October",
      amount: 450000,
      method: "Direct Debit",
      status: "Approved",
    },
    {
      id: 101005,
      product: "Business Loan",
      img: "https://example.com/loan-business.jpg",
      customer: "Sophia Martinez",
      date: "25 October",
      amount: 700000,
      method: "Online Payment",
      status: "Pending",
    },
  ];

  return (
    <TableContainer
    component={Paper}
    className="table"
    style={{ backgroundColor: "#e0e5ec" }}
  >
    {/* Wrap Table in tableWrapper div */}
    <div className="tableWrapper">
      <Table sx={{ minWidth: 650 }} aria-label="loan table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Loan Type</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </TableContainer>
  );
};

export default LoanTable;
