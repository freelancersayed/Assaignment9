import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorUser, setErrorUser] = useState("");
  const [chacked, setChacked] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("url");
    const password = form.get("password");
    const Accept = e.target.terms.checked;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setErrorUser("password must be 6 caracter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorUser("password must be a Uppercass");
      return;
    } else if (!Accept) {
      setChacked("pleace chacked in");
      return;
    }
    setErrorUser("");
    setChacked("");

    // firebase e set kora hoice
    createUser(email, password)
      .then(() => {
        toast.success("Sign up Succesfully!");

        updateUserProfile(name, photo).then(() => {
          console.log("update profile");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Crestview | register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        {/* <h1 className='text-4xl text-green-600 font-bold -mt-[800px]'>Please Register</h1> */}
        <div className="hero-content flex-col w-[450px]">
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl font-bold text-center mb-">Register</h1>
                <div className="divider divider- text-4xl font-bold font-mono mb-10">
                  <p className="bg-gray-700 w-10 h-4 rounded-full"></p>
                </div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
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
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="Photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <div className=" relative items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="font-bold absolute -ml-6 mt-4"
                  >
                    {showPass ? (
                      <FaEye className=""></FaEye>
                    ) : (
                      <FaEyeSlash></FaEyeSlash>
                    )}
                  </span>
                </div>
                <p className="text-red-500">{errorUser}</p>
              </div>
              <br />
              <div className="">
                <input type="checkbox" name="terms" id="" />
                <label className="ml-1" htmlFor="terms">
                  Accept our{" "}
                  <a className="text-green-500 underline" href="">
                    Terms and Conditions
                  </a>
                </label>
                <p className="text-red-500  mb-1 underline">{chacked}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <p className="flex justify-between">
                Alrady have an account{" "}
                <Link className="text-green-600  ml-5" to="/login">
                  login
                </Link>{" "}
              </p>
            </form>
            <ToastContainer position="top-center" className="mt-36 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
