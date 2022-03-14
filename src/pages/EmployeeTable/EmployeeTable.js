import React from "react";
import "./EmployeeTable.css";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useState } from "react";

export const EmployeeTable = (props) => {
  let data = props.props;

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
            Header: "Start Date",
            accessor: "startDate",
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
            accessor: "state2",
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

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-4">
            <Table columns={columns} data={data} />
          </div>
          <div className="textLnk">
            <Link to="/registration">Home</Link>
          </div>
        </main>
      </div>
    </>
  );
};
