import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        console.log('Form data:', formData); // Debug log
        console.log('Validation result:', newErrors); // Debug log
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('🔥 Form submitted! Form data:', formData);

        const validationErrors = validateForm();
        console.log('Validation errors:', validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log('❌ Validation failed, stopping submission');
            return;
        }

        console.log('✅ Validation passed, starting sign in process...');
        setIsLoading(true);

        try {
            console.log('⏳ Simulating API call...');
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('✅ API call completed successfully');

            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', formData.email);
            console.log('💾 Auth data saved to localStorage');

            console.log('🏠 Redirecting to home page...');
            history.push('/');

        } catch (error) {
            console.error('❌ Sign in error:', error);
            setErrors({ general: 'Sign in failed. Please try again.' });
        } finally {
            setIsLoading(false);
            console.log('🔄 Loading state reset');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <div className="signin-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your RealEstate account</p>
                </div>

                {errors.general && (
                    <div className="error-message general-error">
                        {errors.general}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="signin-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                required
                            />
                            <span className="input-icon">📧</span>
                        </div>
                        {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && <span className="field-error">{errors.password}</span>}
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="signin-button"
                        disabled={isLoading}
                        onClick={() => console.log('Button clicked!')} // Debug log
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <div className="signin-footer">
                    <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
                </div>

                <div className="divider">
                    <span>or</span>
                </div>

                <div className="social-signin">
                    <button className="social-button google">
                        <span className="social-icon">🌐</span>
                        Continue with Google
                    </button>
                    <button className="social-button facebook">
                        <span className="social-icon">📘</span>
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}
