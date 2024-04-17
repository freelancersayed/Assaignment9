import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { RxUpdate } from "react-icons/rx";
import { Helmet } from 'react-helmet-async';

const Profile = ({chidren}) => {
    const {user, updateProfile} = useContext(AuthContext);
    console.log(user);

    const handleUpdate =()=>{
        updateProfile()
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error);
        })
      }


    return (
        <div className='border-t-4 border-orange-400'>
           <Helmet>
                <title>Crestview | profile</title>
    </Helmet>
          <div className='min-h-screen mb-20 max-w-[1280px] mx-auto '>
       <div className='shadow-2xl shadow-black w-full p-2'>
       <div >
                <img className='h-52 w-full rounded' src="/image/cover.png" alt=""  />
                <div className='flex items-center mb-5'>
                    <img className='rounded-full w-32 h-32 border-4 border-gray-700 w-44 h-44 -mt-6 ' src={user.photoURL} alt="" data-aos="fade-left"/>
                    <h1 className='text-5xl font-bold ml-8' data-aos="fade-right">{user.displayName}</h1>
                </div>
            </div>
            <div>
               
            <hr />
            </div>
            <div className='py-4 text-right w-full flex justify-between items-center'>
              <p><span className='font-bold'>Email:</span> <span className='text-red-500 underline'>{user.email}</span></p>
               <Link  className='text-xl items-center btn font-bold' to="/register"> Update Profile</Link>
            </div>
       </div>
        </div>
        </div>
    );
};

export default Profile;