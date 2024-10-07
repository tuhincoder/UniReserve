import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'



const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div><Toaster /></div>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
