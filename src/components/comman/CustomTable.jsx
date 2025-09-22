// A reusable Ant Design Table component with row selection and custom pagination position.
// Usage:
// <CustomTable columns={columnsArray} data={dataArray} rowKey="id" pagination={["topRight"]} />
// columns: Array of column definitions for Ant Design Table
// data: Array of data objects to display
// rowKey: Unique key for each row (default: 'id')
// pagination: Array of pagination positions (default: ['topRight'])

import { Table } from "antd";
import { useState } from "react";

const CustomTable = ({ columns, data, rowKey = "id", pagination = ["topRight"], isRowSelectionEnabled = false }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: "odd",
                text: "Select Odd Row",
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = changableRowKeys.filter((_, index) => index % 2 === 0);
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: "even",
                text: "Select Even Row",
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = changableRowKeys.filter((_, index) => index % 2 !== 0);
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };


    return (
        <Table
            rowSelection={isRowSelectionEnabled ?? rowSelection}
            columns={columns}
            dataSource={data}
            rowKey={rowKey}
            pagination={{ position: pagination }}
        />
    );
};

export default CustomTable;
