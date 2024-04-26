import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input 
          type='text'
          placeholder='Nome'
          className='border p-3 rounded-lg'
          id='nome'
        />
        <input 
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input 
          type='password'
          placeholder='Senha'
          className='border p-3 rounded-lg'
          id='senha'
        />
        <button 
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='font-semibold'>Tem uma conta?</p>
        <Link to='/sign_in'>
          <span className='text-blue-700 font-semibold'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
