import React from 'react'
import './login.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation(); 

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className='login_page_wrap'>
            <form>
                <div className='login_wrapper'>
                    <h3>Sign In</h3>
                    <div className='login_email_input'>
                        <div>
                            Enter you email
                        </div>
                        <input type='text' required></input>
                    </div>
                    <div className='login_password_input'>
                        <div>
                            Enter you password
                        </div>
                        <input type='password' required></input>
                    </div>
                    <div className='forget_password_button'>
                        <button><u>Forgot password?</u></button>
                    </div>
                    <div className='login_button'>
                        <button onClick={handleNavigate('/fields')}>Sign In</button>
                    </div>

                    <hr/>

                    <div className='login_route_registration'>
                        <button onClick={handleNavigate('/registration')}>
                            <u>New here? <b>Create an Account</b></u>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}