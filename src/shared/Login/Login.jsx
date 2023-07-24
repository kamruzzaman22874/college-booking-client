import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css"
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const { loginUser, googleLogin, resetPassword } = useContext(AuthContext)
    const emailRef = useRef()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result => {
            form.reset()
            const loggedUser = result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully done',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(loggedUser);
            
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
    }
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>{
            const googleSingnIn = result.user;
            console.log(googleSingnIn)
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
    }
    const handleResetPassword =() =>{
        const email = emailRef.current.value
        if(!email){
            alert('Please provide valid email')
            return;
        }
        resetPassword(email)
        .then(() => {})
        .catch(err => console.error(err));
    }
    return (
        <form onSubmit={handleLogin} className="login-form w-full mx-auto  mt-32">
            <h2 className="logo">Login</h2>
            <div className="input-info">
                <input ref={emailRef} name="email" type="text" placeholder="enter your email" />
                <input name="password" type="password" placeholder="enter your password" />
            </div>
            <div className="flex justify-end py-2 underline">
                <button onClick={handleResetPassword}><p><Link>Forget Password?</Link></p></button>
            </div>
            <button className="btn-submit">Sign In</button>
            <div>
                <p className=" text-center text-amber-500">Do not have an account? please <Link className="underline" to="/register">Register</Link></p>
            </div>
            <div className="flex gap-8 py-5 justify-center">
                <FcGoogle onClick={handleGoogleLogin} className="text-4xl cursor-pointer"/>
                <FaGithub className="text-4xl cursor-pointer" />
            </div>
        </form>
    );
};

export default Login;