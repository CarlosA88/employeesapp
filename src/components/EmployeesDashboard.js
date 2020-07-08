import React, { Component } from "react";
import Axios from "../Api/employeesApi";
import CircularIndeterminate from "../common/CircularInterminate";
import Employees from "./Employee";

class EmployeesDashboard extends Component {
  state = {
    employeeDetails: [
      {
        id: "1",
        age: 0,
        email: "Carlos",
        fName: "Carlos",
        lName: "Avilez",
        gender: "",
        isFullTime: false,
        yearsOfExperience: 0,
      },
    ],
  };
  Deleting text from Master

  
  // componentWillMount() {
  //   Axios.get("https://employees-83f9f.firebaseio.com/employee.json")
  //     .then((response) => {
  //       this.setState({ employeeDetails: response.data });
  //     })
  //     .catch((Err) => console.log(Err));
  // }

  createEmployeeHandler = () => {
    const employee = {
      employeeDetails: this.state.employeeDetails,
    };
    Axios.post("/employee.json", employee)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <button onClick={this.createEmployeeHandler}>Create employee</button>

        <ul>
          {this.state.employeeDetails.map((item) => (
            <li key={item.id}>{item.fName}</li>
          ))}
        </ul>

        <CircularIndeterminate />
      </div>
    );
  }
}

export default EmployeesDashboard;
