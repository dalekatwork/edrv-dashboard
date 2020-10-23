import React from "react";
import { Table, Tag } from "antd";
import { data } from "./data";
import { withRouter } from "react-router";

const columns = [
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Shop Name",
    dataIndex: "shopName",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Total Chargestations",
    dataIndex: "chargeStations",
  },
  {
    title: "Status",
    dataIndex: "active",
    render: (active: boolean) => (
      <div style={{ textAlign: "center" }}>
        {active ? (
          <Tag color="green">Open Now</Tag>
        ) : (
          <Tag color="darkgray">Closed</Tag>
        )}
      </div>
    ),
  },
];

function Locations({ history }: { history: any }) {
  return (
    <>
      <h1>Locations</h1>
      <Table
        columns={columns}
        bordered
        dataSource={data}
        rowClassName="cursor-pointer"
        onRow={(row) => {
          return {
            onClick: () => history.push(`/${row.key}`), // click row
          };
        }}
      />
    </>
  );
}

export default withRouter(Locations);
