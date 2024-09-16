import React from 'react'
import './registration.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Registration () {

    const navigate = useNavigate();
    const location = useLocation(); 

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className='registration_page_wrap'>
            <form>
                <div className='registration_wrapper'>
                    <h3>Register</h3>
                    <div className='fields'>
                        <div className='registration_rows'>
                            <div className='registration_each_input_field'>
                                <div>
                                    First Name
                                </div>
                                <input type='text' required></input>
                            </div>
                            <div className='registration_each_input_field'>
                                <div>
                                    Last Name
                                </div>
                                <input type='text' required></input>
                            </div>
                        </div>
                        <div className='registration_rows'>
                            <div className='registration_each_input_field'>
                                <div>
                                    Business Name
                                </div>
                                <input type='text' required></input>
                            </div>
                            <div className='registration_each_input_field'>
                                <div>
                                    Business Email
                                </div>
                                <input type='text' required></input>
                            </div>
                        </div>
                        <div className='registration_rows'>
                            <div className='registration_each_input_field'>
                                <div>
                                    Enter Password
                                </div>
                                <input type='text' required></input>
                            </div>
                            <div className='registration_each_input_field'>
                                <div>
                                    Confirm Password
                                </div>
                                <input type='text' required></input>
                            </div>
                        </div>
                    </div>

                    <div className='registration_button'>
                        <button onClick={handleNavigate('/fields')}>Register</button>
                    </div>

                    <hr/>

                    <div className='login_route_registration'>
                        <button onClick={handleNavigate('/login')}>
                            <u>Already have an account? <b>Sign In</b></u>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}