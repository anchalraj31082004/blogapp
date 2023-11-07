import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header, Footer} from "./components"
import { Outlet } from 'react-router-dom'
import { getPosts } from './store/postSlice'

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
       if(userData){
          dispatch(login({userData}))
       } else {
        dispatch(logout())
       }
    })
    .catch((error) => console.log(error.message))
    .finally(() => setLoading(false))
  },[])

  useEffect(() => {
    try {
      dispatch(getPosts())
    } catch (error) {
      console.log(error);
    }
  },[])

  return (
    !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
            <Header/>
            <main>
              Todo: <Outlet/>
            </main>
            <Footer/>
        </div>
      </div>
    ) : (<div>loading ....</div>)
  )
}

export default App