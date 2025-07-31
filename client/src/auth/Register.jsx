import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    });

    const hc = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const hs = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5700/api/auth/register', form);
            alert('Registration success');
        } catch (error) {
            alert('Registration failed');
            console.error(error);
        }
    };

    return <>
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <form
                onSubmit={hs}
                className="bg-white p-5 rounded-4 shadow-lg w-100"
                style={{ maxWidth: '420px' }}
            >
                <h2 className="text-center mb-4 text-primary">
                    <i className="fas fa-user-plus me-2"></i>
                    Register
                </h2>

                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-user me-2 text-secondary"></i>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-envelope me-2 text-secondary"></i>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-phone-alt me-2 text-secondary"></i>
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your phone"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Address */}
                <div className="mb-3">
                    <label className="form-label">
                        <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter your address"
                        onChange={hc}
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="form-label">
                        <i className="fas fa-lock me-2 text-secondary"></i>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Choose a strong password"
                        onChange={hc}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold shadow-sm"
                >
                    <i className="fas fa-user-check me-2"></i>
                    Register
                </button>
                <span>Already have an caaount <Link to={'/login'}> Login</Link> </span>
            </form>
        </div>
    </>
};

export default Register;
