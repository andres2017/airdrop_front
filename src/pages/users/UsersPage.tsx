import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { getAllUsers } from '../../services/UsersService';
import { Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from '../../interfaces/User.interface';

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const cookies = new Cookies();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const token = cookies.get('token');
        console.log(token);
        const users = await getAllUsers(token);
        console.log(users);
        setUsers(users);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.details.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.details.lastname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Users</h1>
            <Form.Group controlId="search">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Search by username, email, name, or lastname"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Wallet Address</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>{user.details.name}</td>
                            <td>{user.details.lastname}</td>
                            <td>{user.details.phone}</td>
                            <td>{user.wallet.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersPage;