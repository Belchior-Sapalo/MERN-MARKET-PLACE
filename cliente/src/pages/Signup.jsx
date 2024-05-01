
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function Signup() {
  const [formDate, setFormDate] = useState({})
  const [res, setRes] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handlerChange(e){
    setFormDate({
      ...formDate,
      [e.target.id]: e.target.value,
    })
  }

  async function handlerSubmit(e){
    e.preventDefault()
      setError(null)
      setLoading(true)
      const url = "/api/auth/signup"
      await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDate)
      }).then((res)=>res.json()).then((json)=>setRes(json));

      if(res.sucesso == false){
        setLoading(false)
        setError(res.message)
        return;
      }
      setLoading(false)
      setError(null)

  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handlerSubmit} className='flex flex-col gap-4 '>
        <input 
          type='text'
          placeholder='Nome'
          className='border p-3 rounded-lg'
          onChange={(e)=>handlerChange(e)}
          id='username'
        />
        <input 
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          onChange={handlerChange}
          id='email'
        />
        <input 
          type='password'
          placeholder='Senha'
          className='border p-3 rounded-lg'
          onChange={(e)=>handlerChange(e)}
          id='password'
        />
        <button 
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading? "carregando...": "Sign Up"}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='font-semibold'>Tem uma conta?</p>
        <Link to='/sign_in'>
          <span className='text-blue-700 font-semibold'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  )
}
