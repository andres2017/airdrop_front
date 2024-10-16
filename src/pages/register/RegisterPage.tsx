import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Register } from '../../fetch/Auth';
import { distributeReward } from '../../services/RewardService';
import LoadingComponent from '../../components/loading/LoadingComponent';
import './Register.css';

interface RegisterFormValues {
    username: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    phone: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: RegisterFormValues, { setSubmitting, setErrors }: FormikHelpers<RegisterFormValues>) => {
        setLoading(true);
        try {
            const data = {
                username: values.username,
                email: values.email,
                password: values.password,
                name: values.name,
                lastname: values.lastname,
                phone: values.phone
            };

            const register = await Register(data); // fetch para llamar función de autenticación
            console.log(register.data.wallet.address);
            await handleReward(register.data.wallet.address);

            navigate('/login');
        } catch (error) {
            console.error('Error login', error);
            setErrors({ email: 'Error en el servidor. Inténtalo de nuevo más tarde.' });
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    const handleReward = async (address: string) => {
        try {
            console.log('paso la transaccion', address);
            const txHash = await distributeReward(address, 35);
            alert(`Recompensa distribuida con éxito. Hash de la transacción: ${txHash}`);
        } catch (error) {
            alert(`Error al distribuir la recompensa: ${error.message}`);
        }
    };

    const validationSchema = Yup.object().shape({
        phone: Yup.string().required('Teléfono requerido'),
        name: Yup.string().required('Nombre requerido'),
        lastname: Yup.string().required('Apellido requerido'),
        username: Yup.string().required('Username requerido'),
        email: Yup.string().email('Email inválido').required('Email requerido'),
        password: Yup.string().trim().min(6, 'Mínimo 6 caracteres').required('Password requerido')
    });

    return (
        <div className='card-container'>
            {loading && <LoadingComponent />}
            <Container>
                <section className="vh-50">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100 container-register">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <Card className="bg-dark text-white">
                                    <Card.Body className="p-5 text-center">
                                        <Formik
                                            initialValues={{ username: '', name: '', lastname: '', email: '', password: '', phone: '' }}
                                            onSubmit={onSubmit}
                                            validationSchema={validationSchema}
                                        >
                                            {({ values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-md-5 mt-md-4 pb-5">
                                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                                        <p className="text-white-50 mb-5">Please enter your data!</p>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="text"
                                                                id="username"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.username && errors.username ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Username</label>
                                                            {touched.username && errors.username && (
                                                                <div className="invalid-feedback">{errors.username}</div>
                                                            )}
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Name</label>
                                                            {touched.name && errors.name && (
                                                                <div className="invalid-feedback">{errors.name}</div>
                                                            )}
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="text"
                                                                id="lastname"
                                                                name="lastname"
                                                                value={values.lastname}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.lastname && errors.lastname ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Lastname</label>
                                                            {touched.lastname && errors.lastname && (
                                                                <div className="invalid-feedback">{errors.lastname}</div>
                                                            )}
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="text"
                                                                id="phone"
                                                                name="phone"
                                                                value={values.phone}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Phone</label>
                                                            {touched.phone && errors.phone && (
                                                                <div className="invalid-feedback">{errors.phone}</div>
                                                            )}
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Email</label>
                                                            {touched.email && errors.email && (
                                                                <div className="invalid-feedback">{errors.email}</div>
                                                            )}
                                                        </div>

                                                        <div className="form-outline form-white mb-4">
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                className={`form-control form-control-lg ${touched.password && errors.password ? 'is-invalid' : ''}`}
                                                            />
                                                            <label className="form-label">Password</label>
                                                            {touched.password && errors.password && (
                                                                <div className="invalid-feedback">{errors.password}</div>
                                                            )}
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            className="btn btn-outline-light btn-lg px-5"
                                                            disabled={isSubmitting}
                                                        >
                                                            Register
                                                        </button>

                                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                                        </div>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default RegisterPage;