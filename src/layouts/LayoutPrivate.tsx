import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SideNavBar from '../components/sideBar/Sidebar';
import Cookies from 'universal-cookie';

const LayoutPrivate: React.FC = () => {
    const cookies = new Cookies();
    const [roles, setRoles] = useState([])

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const user = cookies.get('user')
        console.log(user.roles);
        setRoles(user.roles);
    }
    const { isLoggedIn } = useAuthContext();

    if (!isLoggedIn) {
        return <Container className="text-center mt-5">
            <h1 className="text-danger">Acceso denegado</h1>
        </Container>
    }


    return isLoggedIn ? (
        <div>
            <SideNavBar userRole={roles} />
        </div>) : (
        <Navigate to="/login" />
    );
}

export default LayoutPrivate