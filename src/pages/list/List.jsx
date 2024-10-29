import React, { useState, useEffect } from "react";
import "./List.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const List = () => {
  const [creditScore, setCreditScore] = useState(0);
  const [loanEligibility, setLoanEligibility] = useState("");
  const [eligibleLoans, setEligibleLoans] = useState([]);

  useEffect(() => {
    const sampleData = {
      annualIncome: 600000,
      monthlySalary: 50000,
      propertyValue: 1200000,
      bonuses: 10000,
      rentalIncome: 5000,
      interestIncome: 2000,
    };

    const score = calculateCreditScore(sampleData);
    setCreditScore(score);
    setLoanEligibility(determineLoanEligibility(score));
    setEligibleLoans(getEligibleLoans(score));
  }, []);

  const calculateCreditScore = (data) => {
    let score = 300;

    if (data.annualIncome > 500000) score += 100;
    else if (data.annualIncome > 200000) score += 50;

    if (data.monthlySalary > 50000) score += 100;
    else if (data.monthlySalary > 20000) score += 50;

    if (data.propertyValue > 1000000) score += 150;
    else if (data.propertyValue > 500000) score += 75;

    score += data.bonuses > 0 ? 50 : 0;
    score += data.rentalIncome > 0 ? 50 : 0;
    score += data.interestIncome > 0 ? 50 : 0;

    return Math.min(score, 850);
  };

  const determineLoanEligibility = (score) => {
    if (score >= 750) return "Eligible for all types of loans";
    else if (score >= 650) return "Eligible for personal and auto loans";
    else if (score >= 550) return "Eligible for personal loans only";
    return "Not eligible for loans";
  };

  const getEligibleLoans = (score) => {
    const loans = [];
    if (score >= 750) {
      loans.push({ type: "Home Loan", amount: "Up to ₹50 Lakhs" });
      loans.push({ type: "Auto Loan", amount: "Up to ₹20 Lakhs" });
      loans.push({ type: "Personal Loan", amount: "Up to ₹10 Lakhs" });
    } else if (score >= 650) {
      loans.push({ type: "Auto Loan", amount: "Up to ₹15 Lakhs" });
      loans.push({ type: "Personal Loan", amount: "Up to ₹7 Lakhs" });
    } else if (score >= 550) {
      loans.push({ type: "Personal Loan", amount: "Up to ₹5 Lakhs" });
    }
    return loans;
  };

  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="listContainer">
        <Navbar />
        <div className="bottom">
          <div className="fchart">
            <CircularProgressbar
              value={(creditScore / 850) * 100}
              text={`${creditScore}`}
              strokeWidth={5}
            />
          </div>
          <p className="title">Calculated Credit Score</p>
          <p className="amount">{creditScore}</p>
          <p className="desc">
            This score is calculated based on your income, salary, property value, and other factors.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Loan Eligibility</div>
              <div
                className={`itemResult ${
                  loanEligibility.includes("Not eligible") ? "negative" : "positive"
                }`}
              >
                {loanEligibility.includes("Not eligible") ? (
                  <KeyboardArrowDownIcon fontSize="small" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="small" />
                )}
                <div className="resultAmount">{loanEligibility}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Credit Score Range</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small" />
                <div className="resultAmount">
                  {creditScore >= 750
                    ? "Excellent"
                    : creditScore >= 650
                    ? "Good"
                    : creditScore >= 550
                    ? "Fair"
                    : "Poor"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <h1 className="title">Eligible Loans</h1>
        </div>
        <div className="loanCards">
          {eligibleLoans.length > 0 ? (
            eligibleLoans.map((loan, index) => (
              <div className="loanCard" key={index}>
                <h2>{loan.type}</h2>
                <p>Eligibility Amount: {loan.amount}</p>
                <button className="applyButton">Apply for Loan</button>
              </div>
            ))
          ) : (
            <p>No eligible loans available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
