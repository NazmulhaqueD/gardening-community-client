import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const { signUp, signInWithGoogle, profileUpdate, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { name, photo, email, password } = Object.fromEntries(formData.entries());
        console.log(email, password)

        // sign up 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 8 characters long and include uppercase, lowercase, and a special character.");
            return;
        }

        signUp(email, password)
            .then(result => {
                const user = {
                    name,
                    email,
                    photo,
                    creationTime: result.user?.metadata.creationTime,
                    lastSignInTime: result.user?.metadata.lastSignInTime,
                }
                setUser(result.user)
                profileUpdate(name, photo)
                    .then(() => {
                        fetch('https://gardening-server-six.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data?.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "You are create an account successfully",
                                        showConfirmButton: false,
                                        timer: 3000
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        toast.error(`${error.message}, please try again`)
                    })
                console.log(result.user);
            })
            .catch(error => {
                toast.error(`${error.message}, please try again`)
            })
    }

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
                    .then((data) => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You are loggedIn successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                        console.log(data)
                    })
            })
            .catch(error => {
                toast.error(`${error.message}, please try`)
            })
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto my-24 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className='space-y-4'>
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="name" required  />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required  />

                    <label className="label">Photo</label>
                    <input type="text" className="input" name='photo' placeholder="Photo URL" required  />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required  />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn w-full btn-neutral mt-4">SignUp</button>

                    <button onClick={handleSignUpWithGoogle} type='button' className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        SignUp with Google
                    </button>

                    <p>Already have an account !!! please
                        <NavLink to='/login' className={'text-teal-500 px-2 text-xl font-semibold'}>Login</NavLink>
                    </p>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;