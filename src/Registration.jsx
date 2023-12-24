import React, { useEffect, useState } from 'react';
import './Registration.css';

function Registration() {
    const [field, setField] = useState({
        firstname: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const [repeatPassword, setRepeatPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [validate, setValidate] = useState(false);
    const passwordCheck = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/gm;

    useEffect(() => {
        setValidate(false);
    }, [field]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted'); // Log a message to check if the function is being called


        if (
            field.firstname.length >= 3 &&
            field.firstname.length <= 20 &&
            field.email &&
            field.password.length >= 10 &&
            passwordCheck.test(field.password) &&
            field.password === repeatPassword
        ) {
            console.log("hii")
            setSubmitted(true);
            setValidate(true);
        } else {
            setSubmitted(true);
            setValidate(false);
        }
    };

    return (
        <div className='form-container'>
            <form className='registration-form' onSubmit={handleSubmit}>
                {submitted && validate && (
                    <h1 className='success-message'>Registration successful</h1>
                )}
                <input
                    className='form-input'
                    type="text"
                    placeholder='FirstName'
                    value={field.firstname}
                    onChange={(e) => setField({ ...field, firstname: e.target.value })}
                />
                {submitted && (!field.firstname || field.firstname.length < 3) ? (
                    <span className='error-message'>Enter a valid Name (minimum 3 characters)</span>
                ) : null}
                {submitted && field.firstname.length > 20 ? (
                    <span className='error-message'>Name should be 20 characters or less</span>
                ) : null}
                <input
                    className='form-input'
                    type="email"
                    placeholder='Email'
                    value={field.email}
                    onChange={(e) => setField({ ...field, email: e.target.value })}
                />
                {submitted && !field.email ? (
                    <span className='error-message'>Enter Your Email Id</span>
                ) : null}
                <input
                    className='form-input'
                    type="password"
                    placeholder='Password'
                    value={field.password}
                    onChange={(e) => setField({ ...field, password: e.target.value })}
                />
                {submitted && !field.password ? (
                    <span className='error-message'>Enter Password</span>
                ) : null}
                <input
                    className='form-input'
                    type="password"
                    placeholder='Re-enter Password'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {submitted && field.password !== repeatPassword ? (
                    <span className='error-message'>Passwords do not match</span>
                ) : null}
                {submitted && !passwordCheck.test(field.password) ? (
    <span className='error-message'>Please add one special character</span>
) : null}
                <button className='submit-button' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Registration;



