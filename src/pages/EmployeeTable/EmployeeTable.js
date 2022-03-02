import React from "react";
import "./EmployeeTable.css";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";

export const EmployeeTable = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Current Employees",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Department",
            accessor: "department",
          },
          {
            Header: "Date of Birth",
            accessor: "dateBirth",
          },
          {
            Header: "Street",
            accessor: "street",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "State",
            accessor: "state",
          },
          {
            Header: "Zip Code",
            accessor: "zipCode",
          },
        ],
      },
    ],
    []
  );

  // const clearData = (event) => {
  //   event.preventDefault();
  //   localStorage.clear();
  // };

  const data = props.props;

  return (
    <>
      <Table columns={columns} data={data} />
      <div className="textLnk">
        <Link to="/registration">Home</Link>
      </div>
      {/* <div className="clearData">
        <button onClick={clearData}>Clear Table</button>
      </div> */}
    </>
  );
};
