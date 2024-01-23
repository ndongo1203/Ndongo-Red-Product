import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import profileImage from '../../Assets/images/Image1.png'; 
import { Link } from 'react-router-dom';

const Connexion = () => {
    return (
        <div className="ConnexionPage" >
            <Container className="">
                <Row>
                    <div className="text-center text-white mt-3 d-flex justify-content-center">
                        <img src={profileImage} alt="" className='img-fluid' />
                        <h2 className='mx-3'>RED PRODUCT</h2>
                    </div>
                    <Col className='bg-white shadow-sm p-4 mt-3 this-cart-0 mx-auto' md={{ span: 6, offset: 3 }}>
                        <div className="">
                            <h5>Connectez-vous en tant que Admin</h5>
                        </div>
                        <Form className='mt-4'>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="E-mail" style={{ border: 'none', outline: 'none' }} required />
                                <hr className='mt-5' style={{ border: 'none', borderBottom: '3px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formMotDePasse">
                                <Form.Control type="password" placeholder="Mot de passe" style={{ border: 'none', outline: 'none' }} required />
                                <hr className='mt-5' style={{ border: 'none', borderBottom: '3px solid #ced4da' }} />
                            </Form.Group>

                            <Form.Group controlId="formRememberMe" className='p-3 fs-5'>
                                <Form.Check
                                    type="checkbox"
                                    label="Gardez-moi connecté"
                                />
                            </Form.Group>
                            <Link to="/Dashboard">
                            <Button className='w-100 mt-4 p-2 fs-5' style={{ background: '#494C4F', border: 'none' }} type="submit">
                                Se connecter
                            </Button>
                            </Link>
                        </Form>
                    </Col>

                    <div className="text-center fs-5 mt-3">
                        <p><a style={{ color: '#FFD964', textDecoration: 'none' }} href='#1'>Mot de passe oublié ?</a></p>
                    </div>

                    <div className="text-center fs-5">
                        <p><span className='text-white'>Vous n'avez pas de compte ?</span> <Link to="/inscription" style={{ color: '#FFD964', textDecoration: 'none' }} href="Inscription">S'inscrire</Link></p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Connexion;
