import { Table } from "antd";

const RolesTable = ({ data }) => {
    return (
        <Table dataSource={data} rowKey="id">
            <Table.Column title="Id" dataIndex="id" />
            <Table.Column title="Title" dataIndex="title" />
            <Table.Column title="Body" dataIndex="body" />
            <Table.Column title="Tags" dataIndex="tags" />
        </Table>
    );
};

export default RolesTable;
