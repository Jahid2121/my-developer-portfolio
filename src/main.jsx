import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router';
import { Toaster } from 'react-hot-toast';

<Toaster />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-4xl mx-auto font-customPoppins'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
