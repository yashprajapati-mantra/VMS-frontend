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
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            {
                key: "select-current-page",
                text: "Select Current page",
                // onSelect: (changableRowKeys) => {
                //     let newSelectedRowKeys = changableRowKeys.filter((_, index) => index % 2 === 0);
                //     setSelectedRowKeys(newSelectedRowKeys);
                // },
            },
            {
                key: "select-all-page",
                text: "Select all page",
                // onSelect: (changableRowKeys) => {
                //     let newSelectedRowKeys = changableRowKeys.filter((_, index) => index % 2 !== 0);
                //     setSelectedRowKeys(newSelectedRowKeys);
                // },
            },
        ],
    };


    return (
        <Table
            rowSelection={isRowSelectionEnabled && rowSelection}
            columns={columns}
            dataSource={data}
            rowKey={rowKey}
            pagination={pagination ? { position: pagination } : false}
        />
    );
};

export default CustomTable;
