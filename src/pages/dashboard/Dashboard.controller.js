import { fetchUsers } from '../../api/userApi';

export async function getUsers() {
  // Any transformation logic goes here before returning to UI
  const users = await fetchUsers();
  return users;
}
