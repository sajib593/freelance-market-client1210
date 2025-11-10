import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";


const Login = () => {


     let {signin, signInGoogle } = useContext (AuthContext);

    let location = useLocation();
    let navigate = useNavigate();

    let [error, setError] = useState("")


    let handleLogin =(e)=>{
        e.preventDefault();

        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;

        // console.log   (email,password); 

        signin(email, password)
        .then((result)=>{

            let user = result.user;
            // console.log(user);
            // console.log("Display Name:", user.displayName);


            Swal.fire('Login successfully')


            navigate(`${location.state? location.state : '/'}`);

        })
        .catch((error)=>{
            // console.log(error);
            let errorMessage = error.message;

            Swal.fire(errorMessage)

            setError(errorMessage);
    })
}


let handleGoogleLogin =()=>{

      signInGoogle()
      .then((result)=>{

        const user = result.user;
      // console.log("Google user:", user);
      Swal.fire('Login successfully')

      navigate(`${location.state? location.state : '/'}`);

      })
      .catch((error) => {
      // console.error(error.message);
      Swal.fire(error.message)
    });

    }



    return (
       <>

        <title>Login</title>

        <Navbar></Navbar>

          <div className="flex justify-center items-center min-h-screen">
             <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
      <h2 className="font-semibold text-2xl text-center">Login YourAccount</h2>
      
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          {/* email    */}
          <label className="label">Email</label>
          <input required name="email" type="email" className="input" placeholder="Email" />
          
          
          {/* password */}

          <label className="label">Password</label>
          <input required name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password? pls <Link to="/forgetPassword" className='text-xl font-bold text-orange-700'>Reset</Link></a></div>
          
                  {error && <p className="text-red-500">{error}</p>}  
                    
                    <button className="btn btn-neutral mt-4">Login</button>
         
         
         <p className="text-center font-semibold">Dont have an account ? <Link className="text-amber-800" to='/register'>Register</Link></p>
        </fieldset>
      </form>


      <button onClick={handleGoogleLogin}  className='btn py-6  bg-linear-to-r from-purple-500 to-orange-400 hover:from-purple-600 hover:to-orange-500'> Google Login </button>

    </div>
        </div>

        <br /><br />
        {/* <Footer></Footer> */}

        </>
    );
};

export default Login;