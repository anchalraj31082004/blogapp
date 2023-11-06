import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddPost, AllPosts, AuthLayout, EditPost, Home, Post,} from './components/index.js'
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={false}>
            <Home/>
          </AuthLayout>
        ), 
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication ={false}>
          <Login/>
        </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication ={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication ={true}>
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayout authentication ={true}>
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <AuthLayout authentication ={true}>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element:<Post/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
