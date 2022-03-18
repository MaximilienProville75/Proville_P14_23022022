import React from "react";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";

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
        <div className="text-center text-4xl mt-5 font-serif font-extrabold text-gray-900">
          Hr Net : Current Employees
        </div>
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-4">
            <Table columns={columns} data={data} />
          </div>
          <div className="m-auto text-center px-4 py-2 border ring-4 text-sm ring-purple-300/40 font-medium rounded-md text-gray-700 bg-purple-100 hover:bg-purple-300/40 w-24 shadow-xl shadow-purple-300">
            <Link to="/">Home</Link>
          </div>
        </main>
      </div>
    </>
  );
};
