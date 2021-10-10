import React from "react";
import { Form, Button, Container } from 'react-bootstrap';
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import {useForm } from '../hook/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle, loginSincrono, loginFacebook} from '../actions/actionLogin';

function Login() {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        Email: '',
        Password: ''
    })

    const {Email,Password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginSincrono(Email,Password)); 
       dispatch(loginEmailPassword(Email,Password));
    }

    const handleGoogle = () => {
         dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
   }

   const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    Password: Yup.string()
      .required("Campo Requerido, Mínimo 5 caracteres")
  });

    return (
        <Formik
        initialValues={{
          Email: "",
          Password: ""
        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form onSubmit={handleLogin} className="principal">
            <h1>Iniciar Sesión</h1>
            <Form.Group className="mb-3 " >
                <Form.Label className="campo">Correo</Form.Label><br/>
                <Field className="formBasicEmail"
                    type="email"
                    placeholder="correo@gmail.com"
                    name="Email"
                    value={Email}
                    onChange={handleInputChange} />
                <ErrorMessage
                    name='Email'
                    component='div'
                    className='field-error text-danger'
                />
                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="contraseña">Contraseña</Form.Label>
                <Field className="formBasicPassword"
                    type="password"
                    placeholder="Password"
                    name="Password"
                    value={Password}
                    onChange={handleInputChange} />
                <ErrorMessage
                    name='Password'
                    component='div'
                    className='field-error text-danger'
                />
            </Form.Group>
            <Button className="bootsend" variant="primary" type="submit">
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>

                <Container
                    className="facebook-btn"
                    onClick={handleFacebook}

                >
                    <Container className="facebook-icon-wrapper">
                        <img className="facebook-icon" src="https://res.cloudinary.com/djlvgbuji/image/upload/v1632858497/icon-fb_l9ewqn.jpg" width="50px" height="48px" alt="facebook button" />
                    </Container>
                </Container>
            </Container>
            <Link 
            to="/registro" 
            className="registro">
                Registrarse
            </Link> <br/>

        </Form>
    </Formik>
    );
}

export default Login;
