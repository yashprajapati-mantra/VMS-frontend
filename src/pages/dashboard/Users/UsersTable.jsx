import { Table } from "antd";

const UsersTable = ({ data }) => {
    return (
        <Table dataSource={data} rowKey="id">
            <Table.Column title="FirstName" dataIndex="firstName" />
            <Table.Column title="LastName" dataIndex="lastName" />
            <Table.Column title="Email" dataIndex="email" />
            <Table.Column title="Phone" dataIndex="phone" />
        </Table>
    );
};

export default UsersTable;
