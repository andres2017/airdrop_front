import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFoundPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const errorMessage = (error as { statusText?: string; message?: string })?.statusText || (error as { message?: string })?.message || "Unknown error";

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1 className="display-1 text-danger">404</h1>
                    <p className="lead text-light">Page not found</p>
                    <p className="text-muted">{errorMessage}</p>
                    <Button variant="primary" onClick={handleGoHome}>Go to Home</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage