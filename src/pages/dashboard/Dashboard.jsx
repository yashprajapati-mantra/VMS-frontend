import { Breadcrumb, Layout, Menu, Table, theme } from 'antd';
import { useUsersQuery } from '../../queries/useUsersQuery';
import { useUserStore } from '../../store/usersStore';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

const items = Array.from({ length: 5 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));


const Dashboard = () => {

  // useUsersQuery hook to fetch users data
  const { data: users, isLoading, error } = useUsersQuery();
  const setUsers = useUserStore((state) => state.setUsers);

  // Sync query result to Zustand store
  useEffect(() => {
    if (users) setUsers(users);
  }, [users, setUsers]);


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  console.log(users);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo text-white pr-auto" >VMS LOGO</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Table dataSource={users} rowKey="id">
            <Table.Column title="Name" dataIndex="name" />
            <Table.Column title="Email" dataIndex="email" />
            <Table.Column title="Phone" dataIndex="phone" />
          </Table>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
