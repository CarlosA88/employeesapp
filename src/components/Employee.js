import React from "react";

const Employees = ({ employeeDetails }) => {
  return (
    <div>
      <div>
        <ul>
          {employeeDetails.map((item) => (
            <li key={item.fName}>{item.fName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employees;
