import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif"
import { Link } from 'react-router-dom'



function Login() {
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
});
console.log(data)

const handleOnChange = (e) =>{

    const {name, value} = e.target
    setData((preve) =>{
        return{
            ...preve,
            [name] : value
        }
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password} = data;
    if ( email && password ) {
            alert("successfull")
    }    
    else{
        alert("please Enter required fields")
    }
}

  return (
    <div className='p-3 md:p-4'>
        <div className='"w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Signup</h1>    */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src={loginSignupImage} className='w-full'></img>
            </div>
            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
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

                <button type='submit' className=' w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
            </form>
            <p className='text-left'>Don't have account ? <Link to={"/Signup"} className="text-red-600 underline">Signup</Link></p>
        </div>
    </div>
  )
}

export default Login