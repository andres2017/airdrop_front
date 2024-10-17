import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { getAllRole } from '../../services/RolesService';
import { Table, Form } from 'react-bootstrap';
import { RoleResponse } from '../../interfaces/Role.interface';

const RolesPage = () => {
  const [roles, setRoles] = useState<RoleResponse[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const cookies = new Cookies();
  useEffect(() => {
    getRoles();
}, []);

const getRoles = async () => {
  const token = cookies.get('token');
  console.log(token);
  const roles = await getAllRole(token);
  console.log(roles);
  setRoles(roles);
};

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};

const filteredRoles = roles.filter(role =>
  role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  role.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div>
      <h1>Roles</h1>
      <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
              type="text"
              placeholder="Search by name or description"
              value={searchTerm}
              onChange={handleSearch}
          />
      </Form.Group>
      <Table striped bordered hover>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Create Date</th>
              </tr>
          </thead>
          <tbody>
              {filteredRoles.map(role => (
                  <tr key={role.id}>
                      <td>{role.name}</td>
                      <td>{role.description}</td>
                      <td>{role.status}</td>
                      <td>{new Date(role.createdate).toLocaleString()}</td>
                  </tr>
              ))}
          </tbody>
      </Table>
  </div>
);
};

export default RolesPage