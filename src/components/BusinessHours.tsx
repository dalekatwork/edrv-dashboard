import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data, days, Hours, RowEntry } from "./data";
import { Button, Table } from "antd";
import EditModal from "./EditModal";

export default function (props: any) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeRow, setActiveRow] = useState(-1);
  const [dataSource, setDataSource] = useState<RowEntry[]>([]);
  const id = props.match.params.id;
  const entry = data[id];
  const { shopName, businessHours } = entry;

  useEffect(() => {
    setDataSource(
      days.map((row) => {
        return { key: row.id, day: row.name, hours: businessHours[row.id] };
      })
    );
  }, [businessHours]);

  const columns = [
    {
      title: "Day",
      dataIndex: "day",
    },
    {
      title: "Business Hours",
      dataIndex: "hours",
      children: [
        {
          title: "Open",
          dataIndex: "hours",
          key: "hours",
          align: "center",
          render: (hours: Hours[]) => (
            <>
              {hours.map((row, index) => (
                <div key={index}>{row.open}</div>
              ))}
            </>
          ),
        },
        {
          title: "Close",
          dataIndex: "hours",
          key: "hours",
          align: "center",
          render: (hours: Hours[]) => (
            <>
              {hours.map((row, index) => (
                <div key={index}>{row.close}</div>
              ))}
            </>
          ),
        },
      ],
    },
    {
      title: "Misc",
      dataIndex: "key",
      width: 200,
      render: (key: string) => (
        <Button
          onClick={() => {
            setShowEditModal(true);
            setActiveRow(parseInt(key));
          }}
          type="link"
          block
        >
          Edit Business Hours
        </Button>
      ),
    },
  ];

  function updateData(newRow: Hours[]) {
    const tmpDataSource = dataSource.slice();
    tmpDataSource[activeRow].hours = newRow;
    setDataSource(tmpDataSource);
  }

  if (entry) {
    return (
      <>
        <h1>
          <Link style={{ color: "black" }} to="/">
            Locations
          </Link>{" "}
          /<Link to={`/${id}`}> {shopName}</Link>
        </h1>
        <Table
          columns={columns}
          pagination={false}
          bordered
          dataSource={dataSource}
        />
        {showEditModal && (
          <EditModal
            data={dataSource[activeRow]}
            visible={showEditModal}
            updateCallback={updateData}
            closeModal={() => setShowEditModal(false)}
          />
        )}
      </>
    );
  }
  return (
    <>
      The shop is not on our list. Please try another shop{" "}
      <Link to="/">here</Link>{" "}
    </>
  );
}
