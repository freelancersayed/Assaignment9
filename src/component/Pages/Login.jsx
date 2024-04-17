import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook} from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";



const Login = () => {

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState()
  const { singIn, signInWithGoogle, signInWithGithub, singInWithX, signInWithFb, loader, updateProfile   } = useContext(AuthContext);

  const location = useLocation();
  console.log('login', location);
  const navigate = useNavigate();

//   const from = location?.state || "/"


//  if(loader){
//   return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
//  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setError([])
    singIn(email, password)

      .then((result) => {
        console.log(result.user);
        toast.success("Login Succesfully!");
        navigate(location?.state ? location.state : '/')
        e.target.reset()
      //  if(user){
      //   return navigate(from)
      //  }
      })
      .catch((error) => {
        console.log(error.massage);
        // toast.error({error});
        setError('This is wrong email or password')
      });
  };


  const handleGoogleSign = ()=>{
    signInWithGoogle()
    .then(result =>{
      // if(result.user){
      //   <Navigate to="profile"></Navigate>
      // }
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleGithubSign=()=>{
    signInWithGithub()
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleXSign =()=>{
    singInWithX()
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
      // console.log('x');
    })
    .catch(error=>{
      console.log(error);
      console.log('problem');
    })
  }

  const handleFb =()=>{
    signInWithFb()
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.log(error);
    })
  }
  // const handleUpdate =()=>{
  //   updateProfile()
  //   .then(result=>{
  //     console.log(result.user);
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   })
  // }

  return (
    <div>
       <Helmet>
                <title>Crestview | login</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        {/* <h1 className="text-4xl text-green-600 font-bold -mt-[800px]">
          Please Login
        </h1> */}
        <div className="hero-content flex-col w-[450px]">
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl font-bold text-center mb-">Login</h1>
                <div className="divider divider- text-4xl font-bold font-mono mb-10"> <p className='bg-gray-700 w-10 h-4 rounded-full'></p></div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className=" relative items-center">
              <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span onClick={()=>setShowPass(!showPass)}  className="font-bold absolute -ml-6 mt-4">

                {
                  showPass? <FaEye className="" ></FaEye>:<FaEyeSlash></FaEyeSlash>
                }
                </span>
              </div>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             <div>
             <p onClick={handleGoogleSign} className="btn btn-link text-xl"> <FcGoogle /></p>
              <p onClick={handleGithubSign} className="btn btn-link text-xl hover:[text]"> <FaGithub /></p>
              <p onClick={handleXSign} className="btn btn-link text-xl hover:[text]"> <FaSquareXTwitter /></p>
              <p onClick={handleFb} className="btn btn-link text-xl hover:[text]"><FaFacebook /></p>
             </div>

              <p className="flex justify-between">
                New here?{" "}
                <Link className="text-green-600  ml-5" to="/register">
                  create an account
                </Link>{" "}
              </p>
            </form>
            <ToastContainer position="top-center"  className="mt-32 "/>
            <p className="text-center mb-2 text-red-500 font-bold">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
