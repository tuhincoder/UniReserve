
import { Outlet, Router } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Footer from './component/utils/Shared/Footer/Footer'

function App() {


  return (
    <div >

      <MainLayout>
        <div className='min-h-screen !scroll-smooth'>
          <Outlet></Outlet>
        </div>
      </MainLayout>

      <Footer></Footer>
    </div>
  )
}

export default App
