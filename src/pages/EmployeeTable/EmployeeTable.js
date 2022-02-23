import React from "react";
import "./EmployeeTable.css";
import Table from "../../components/Table/Table";

export const EmployeeTable = () => {
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
            accessor: "dateOfBirth",
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

  const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

  const cassie = () => {
    return {
      firstName: "Cassie",
      lastName: "Brown",
      department: "sales",
      dateOfBirth: "blblbl",
      street: "Liberty Avenue",
      city: "Seattle",
      state: "Washington",
      zipCode: 309090,
    };
  };

  function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
      const len = lens[depth];
      return range(len).map((d) => {
        return {
          ...cassie(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        };
      });
    };
    return makeDataLevel();
  }

  const data = React.useMemo(() => makeData(), []);

  return (
    <>
      <div>EmployeeTable</div>
      <Table columns={columns} data={data} />
    </>
  );
};
