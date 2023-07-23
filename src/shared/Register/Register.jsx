import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUserData(result.user,name,photo)
            form.reset()
        })
        .catch(err => console.error(err));
    }

    const updateUserData= (user,name,photo) =>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(() =>{
            alert('Updated profile name')
        })
        .catch(err => console.error(err));
    }
    return (
        <form onSubmit={handleRegister} className="login-form w-full mx-auto mt-32">
            <h2 className="logo">Register</h2>
            <div className="input-info">
                <input name="name" type="text" placeholder="enter your name" required />
                <input name="photo" type="text" placeholder="enter your Photo URL" required />
                <input name="email" type="email" placeholder="enter your email" required />
                <input name="password" type="password" placeholder="enter your password" required />
            </div>
            <button className="btn-submit">Sign Up</button>
            <div>
                <p className=" text-center text-amber-500">Already have an account? please <Link className="underline" to="/login">Login</Link></p>
            </div>
        </form>
    );
};

export default Register;