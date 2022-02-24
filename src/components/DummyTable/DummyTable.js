import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const DummyTable = (props) => {
  console.log(props);
  const blbl = props.props;
  console.log(blbl);

  const tableRows = blbl.map((info) => {
    return (
      <tr>
        <td>{info.lastName}</td>
        <td>{info.firstName}</td>
        {/* <td>{info.dateBirth}</td> */}
        {/* <td>{info.startDate}</td> */}
        <td>{info.street}</td>
        <td>{info.city}</td>
        <td>{info.state}</td>
        <td>{info.zipCode}</td>
        <td>{info.department}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            {/* <th>Date of Birth</th> */}
            {/* <th>Date of Start</th> */}
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Link to="/registration">return Registration Page</Link>
    </div>
  );
};
