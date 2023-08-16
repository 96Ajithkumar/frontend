import React, { useState } from 'react';
import loginSignupImage from "../assest/login-animation.gif";
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase65 } from '../utility/ImagetoBase65';
// import {BiShow, BiHide} from "react-icons/bi"

function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
        image : ""
    });
    console.log(data)

    const handleOnChange = (e) =>{

        const {name, value} = e.target
        setData((preve) =>{
            return{
                ...preve,
                [name] : value
            };
        });
    };

    const handleUploadProfileImage = async(e)=>{
        const data = await ImagetoBase65(e.target.files[0])
        console.log(data)

        setData((preve) =>{
            return{
                ...preve,
                image : data
            }
        })
    }



    const handleSubmit = async(e) => {
        e.preventDefault();
        const { firstName, email, password, confirmPassword } = data;
        if (firstName && email && password && confirmPassword) {
          if (password === confirmPassword) {

                alert("successfull");
                navigate("/login");
            }
            else{
                alert("password and confirm password not equal")
            }
        }
        else{
            alert("please Enter required fields")
        };
    };
  return (
    <div className='p-3 md:p-4'>
        <div className='"w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Signup</h1>    */}
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src={ data.image ? data.image : loginSignupImage} className='w-full h-full'></img>

                <label htmlFor='profileImage'>
                   <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                     <p className="text-sm p-1 text-white">Upload</p>
                    </div>
                    <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}></input>
                </label>  
            </div>
            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                 <label htmlFor='firstName'>First Name</label>
                 <input type={"text"}
                 id="firstName" 
                 name="firstName" 
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                 value={data.firstName} 
                 onChange={handleOnChange}></input>

                <label htmlFor='lastName'>Last Name</label>
                <input type={"text"}
                 id="lastName" 
                 name="lastName" 
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                 value={data.lastName}
                 onChange={handleOnChange}></input>

                <label htmlFor='email'>Email</label>
                <input type={"email"}
                 id="email"
                 name="email"
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                 value={data.email}
                 onChange={handleOnChange}></input>

                <label htmlFor='password'>Password</label>                
                <input type={"password"}
                 id="password"
                 name="password"
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                 value={data.password}
                 onChange={handleOnChange}></input>

                <label htmlFor='confirmpassword'>Confirm Password</label>                
                <input type={"confirmpassword"}
                 id="confirmpassword"
                 name="confirmPassword" 
                 className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                 value={data.confirmPassword}
                 onChange={handleOnChange}></input>

                <button type='submit' className=' w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Signup</button>
            </form>
            <p className='text-left'>Already have account ? <Link to={"/login"} className="text-red-600 underline">Login</Link></p>
        </div>
    </div>
  )
}

export default Signup