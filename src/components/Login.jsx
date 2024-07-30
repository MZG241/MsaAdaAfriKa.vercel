import React from 'react'
import goog1 from '../assets/goog1.png'
import apple1 from '../assets/apple1.png'
import {  FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Login = () => {
  return (


    <div className='p-6 flex justify-center items-center h-screen bg-red-800'>
        <div className='w-96 p-6 shadow-lg shadow-black bg-white rounded-lg'>
            <h1 className='text-center font-bold mb-4'>Créez votre compte client</h1>
            <form action="" className='w-full'>
            <div className='   grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <input type="text" placeholder='Prenom' className='px-4 py-2  bg-gray-400/25  rounded w-full' />
            <input type="text" placeholder='Prenom'  className='px-4 py-2 bg-gray-400/25 rounded w-full' />
        </div>
<div className='mb-4'>
<input type="text" placeholder='Email,Telephone ou Whatsapp'  className='px-4 py-2 bg-gray-400/25 rounded w-full' />     
</div>
<div className=' mb-4 flex items-center'>
<input type="password" placeholder='Password'  className='px-4 py-2 bg-gray-400/25 rounded w-full' /> <FaRegEyeSlash className='-ml-6 text-gray-500'   /> 
</div>
<div className=' mb-4'>
<input type="radio"  /> <label className='font-bold'> En procédant ,vous acceptez les conditions générales d'utilisation.</label>
</div>
<button type='submit' className=' mb-4  font-semibold text-white  bg-red-800  w-full py-2 rounded-lg mx-auto md:text-center'>S'inscrire par courriel</button>




<h2 className='text-center mb-4 '>Ou s'inscrire avec</h2>




<div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
<a href="" className='border-2 border-gray-300 py-2 rounded-lg text-center flex justify-center items-center hover:bg-gray-300 transition-all duration-300 hover:text-white'><img src={goog1} className='w-8 h-8 mr-2' alt="" />Google</a>
<a href="" className='border-2 border-gray-300 py-2 rounded-lg text-center flex justify-center items-center hover:bg-gray-300 transition-all duration-300 hover:text-white'><img src={apple1} className='w-8 h-8 mr-2' alt="" />Apple</a>
</div>

<p className='text-gray-500'>Vous avez déjà un compte ?  <a href="" className='font-bold text-red-800 '>Se connecter maintenant</a>   </p>

 
</form>
        </div>
       
    </div>
   
  )
}

export default Login