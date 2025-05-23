import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // sign in with firebase
        signIn(email, password)
            .then(result => {
                // console.log(result.user)
                setUser(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are loggedIn successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error.message)
            })
        console.log(email, password)
    }

    // signIn with google
    const handleSignUpWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                const user = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                    creationTime: result.user?.metadata.creationTime,
                    lastSignInTime: result.user?.metadata.lastSignInTime,
                }
                fetch('https://gardening-server-six.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You are loggedIn successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(`${location.state ? location.state : '/'}`)
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div className="card bg-base-100 max-w-sm mx-auto my-24 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className='space-y-4'>

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn w-full btn-neutral mt-4">Login</button>

                    <button onClick={handleSignUpWithGoogle} type='button' className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p>Don't have an account !!! please
                        <NavLink to='/register' className={'text-teal-500 px-2 text-xl font-semibold'}>Register</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;