import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');
    const [registeredUser, setRegisteredUser] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage('❌ Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5700/api/auth/register', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                password: formData.password,
            });

            setMessage('✅ Registration successful!');
            setRegisteredUser(response.data.user);

            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
            setMessage('❌ Registration failed');
            setRegisteredUser(null);
        }
    };

    return <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className="p-4 shadow-lg rounded-4 border border-2 border-light">
                            <h3 className="text-center mb-4">Create an Account</h3>

                            {message && <Alert variant="info" className="text-center">{message}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Enter your address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Register
                                </Button>
                            </Form>

                            <p className="mt-3 text-center">
                                Already have an account? <Link to="/login">Login here</Link>
                            </p>

                            {registeredUser && (
                                <Alert variant="success" className="mt-4">
                                    <h5 className="text-center">🎉 Registered User Info</h5>
                                    <hr />
                                    <p><strong>Name:</strong> {registeredUser.name}</p>
                                    <p><strong>Email:</strong> {registeredUser.email}</p>
                                    <p><strong>Phone:</strong> {registeredUser.phone}</p>
                                    <p><strong>Address:</strong> {registeredUser.address}</p>
                                </Alert>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
};

export default Register;
