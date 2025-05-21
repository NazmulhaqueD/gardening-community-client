import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {



    return (

        <div className="card bg-base-100 max-w-sm mx-auto my-24 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form className='space-y-4'>
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn w-full btn-neutral mt-4">Login</button>
                    <p>Don't have an account !!! please
                        <NavLink to='/register' className={'text-teal-500 px-2 text-xl font-semibold'}>Register</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;