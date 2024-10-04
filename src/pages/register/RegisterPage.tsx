import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { Register } from '../../fetch/Auth';
import * as Yup from 'yup';
import Cookies from 'universal-cookie';

interface RegisterFormValues {
    username: string,
    email: string,
    password: string,
    name: string,
    lastname: string,
    phone: string
}

const RegisterPage = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: RegisterFormValues,
        { setSubmitting, setErrors }: FormikHelpers<RegisterFormValues>
    ) => {
        try {
            const data = {
                username: values.username,
                email: values.email,
                password: values.password,
                name: values.name,
                lastname: values.lastname,
                phone: values.phone
            }

            const register = await Register(data); // fetch para llamar funcion de authenticacion
            console.log(register);
            navigate('/login')


        } catch (error) {
            console.error('Error login', error)
        }
    };


    const validationSchema = Yup.object().shape({
        phone: Yup.string().required('Telefono is required'),
        name: Yup.string().required('Nombre requerido'),
        username: Yup.string().required('Username requerido'),
        email: Yup.string().required('Email requerido'),
        password: Yup.string().trim().min(6, 'Minimo 6 caracteres').required('Password requerido')
    })

    return (
        <div className='card-container'>
            <Container>
                <section className="vh-50 ">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100 container-register">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" >
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                            <p className="text-white-50 mb-5">Please enter your data!</p>

                                            <Formik
                                                initialValues={{username: '', name: '', lastname: '', email: '', password: '', phone: '' }}
                                                onSubmit={onSubmit}
                                                validationSchema={validationSchema}
                                            >
                                                {(
                                                    { values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting }
                                                ) => (
                                                    <form onSubmit={handleSubmit}>

                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="username"
                                                                id="username"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                error={touched.username && Boolean(errors.username)}
                                                                helperText={touched.username && errors.username}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" >UserName</label>
                                                        </div>

                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="name"
                                                                id="name"
                                                                name="name"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                error={touched.name && Boolean(errors.name)}
                                                                helperText={touched.name && errors.name}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" >Name</label>
                                                        </div>

                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="lastname"
                                                                id="lastname"
                                                                name="lastname"
                                                                value={values.lastname}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                error={touched.lastname && Boolean(errors.lastname)}
                                                                helperText={touched.lastname && errors.lastname}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" >Lastname</label>
                                                        </div>


                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="phone"
                                                                id="phone"
                                                                name="phone"
                                                                value={values.phone}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                error={touched.phone && Boolean(errors.phone)}
                                                                helperText={touched.phone && errors.phone}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="typePhoneX">Phone</label>
                                                        </div>

                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                disabled={isSubmitting}
                                                                error={touched.email && Boolean(errors.email)}
                                                                helperText={touched.email && errors.email}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" >Email</label>
                                                        </div>

                                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                disabled={isSubmitting}
                                                                error={touched.password && Boolean(errors.password)}
                                                                helperText={touched.password && errors.password}
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" >Password</label>
                                                        </div>

                                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                                        </div>

                                                    </form>
                                                )}
                                            </Formik>

                                        </div>

                                        <div>
                                            <p className="mb-0">Already have an account? <Link to="/login" className="text-white-50 fw-bold">Login</Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>

    )
}

export default RegisterPage
