import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LayoutPrivate: React.FC = () => {

    const { isLoggedIn } = useAuthContext();

    if (!isLoggedIn) {
        return <Container className="text-center mt-5">
            <h1 className="text-danger">Acceso denegado</h1>
        </Container>
    }


    return isLoggedIn ? (
        <div>
            <h1>LayoutPrivate</h1>
        </div>) : (
        <Navigate to="/login" />
    );
}

export default LayoutPrivate