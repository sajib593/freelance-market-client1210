import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {




     let {createUser, setUser, updateUser, signInGoogle} =useContext (AuthContext);

    let [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();

    let handleRegister =(e)=>{
        e.preventDefault();

        let form = e.target;
        let name = form.name.value;
        let photo = form.photo.value;
        let email = form.email.value;
        let password = form.password.value;

        // console.log(name, photo,email,password);

        createUser(email, password)
        .then((result)=>{
            let user = result.user;
            // console.log(user);


            updateUser({
                displayName: name,
                photoURL: photo
            })
            .then(()=>{

                setUser({...user, displayName: name, photoURL: photo});

                Swal.fire('congratulation Resistration successfully')

                navigate("/");
                
            })

        })
        .catch((error)=>{
            // console.log(error);
            let errorMessage = error.message;

            Swal.fire('registration failed', errorMessage)
            
        })
    }


    let handleGoogleLogin =()=>{

      signInGoogle()
      .then((result)=>{

        const user = result.user;
      // console.log("Google user:", user);
      navigate("/");

      })
      .catch((error) => {
      console.error(error.message);
    });

    }




    return (
         <>

        <title>Register</title>

        <Navbar></Navbar>
        <br />

         <div className="flex justify-center items-center min-h-screen">
             <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
      <h2 className="font-semibold text-2xl text-center">Register YourAccount</h2>
      
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">

            {/* name----------------  */}

            <label className="label">Name</label>
          <input required name='name' type="text" className="input" placeholder="Name" />

          {/* photo-------------------------  */}

            <label className="label">Photo</label>
          <input required name='photo' type="text" className="input" placeholder="Photo URL" />

            {/* email ------------ */}
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />

          {/* password ------------ */}
          <div   className='relative'>
            <label className="label">Password</label>
          <input  required 
          name='password' 
          pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
          title="Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."

          type={showPassword? 'text' : 'password'} 

          className="input" placeholder="Password" />


        <span className='absolute top-8 -ml-10' onClick={()=>setShowPassword(!showPassword)}>

             {showPassword? <FaEye size={15} ></FaEye> : <FaEyeSlash size={15} />
}

        </span>


          </div>
          
          
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
         
     
        </fieldset>
      </form>



       <button onClick={handleGoogleLogin}  className='btn bg-linear-to-r from-purple-500 to-orange-400 hover:from-purple-600 hover:to-orange-500'> Google Login </button>
         
         <p className="text-center font-semibold">Already have an account ? <Link className="text-amber-800" to='/login'>Login</Link></p>



    </div>
        </div>

        <br /><br />


        <Footer>

        </Footer>

        </>
    );
};

export default Register;