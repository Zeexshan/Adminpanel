import React, { useState } from "react";
import "./New.scss";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    annualIncome: "",
    monthlySalary: "",
    bonuses: "",
    property: "",
    propertyValue: "",
    rentalIncome: "",
    interestIncome: "",
    creditScore: "",
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ["annualIncome", "monthlySalary", "property", "propertyValue"];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) { 
      console.log("Form submitted:", formData); 
      navigate("/home"); 
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Financial Data Input</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Income Proof (Upload ITR): <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label htmlFor="annualIncome">Annual Income</label>
                <input
                  type="number"
                  id="annualIncome"
                  placeholder="Enter Annual Income"
                  value={formData.annualIncome}
                  onChange={handleChange}
                />
                {errors.annualIncome && <span className="error">{errors.annualIncome}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="monthlySalary">Monthly Salary</label>
                <input
                  type="number"
                  id="monthlySalary"
                  placeholder="Enter Monthly Salary"
                  value={formData.monthlySalary}
                  onChange={handleChange}
                />
                {errors.monthlySalary && <span className="error">{errors.monthlySalary}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="bonuses">Bonuses and Incentives</label>
                <input
                  type="number"
                  id="bonuses"
                  placeholder="Enter Bonuses and Incentives"
                  value={formData.bonuses}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="property">Property Type</label>
                <input
                  type="text"
                  id="property"
                  placeholder="e.g., Residential, Commercial"
                  value={formData.property}
                  onChange={handleChange}
                />
                {errors.property && <span className="error">{errors.property}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="propertyValue">Property Market Value</label>
                <input
                  type="number"
                  id="propertyValue"
                  placeholder="Enter Property Value"
                  value={formData.propertyValue}
                  onChange={handleChange}
                />
                {errors.propertyValue && <span className="error">{errors.propertyValue}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="rentalIncome">Rental Income (if any)</label>
                <input
                  type="number"
                  id="rentalIncome"
                  placeholder="Enter Rental Income"
                  value={formData.rentalIncome}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="interestIncome">Interest Income</label>
                <input
                  type="number"
                  id="interestIncome"
                  placeholder="Enter Interest Income"
                  value={formData.interestIncome}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="creditScore">Credit Score (if known)</label>
                <input
                  type="number"
                  id="creditScore"
                  placeholder="Enter Credit Score"
                  value={formData.creditScore}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
