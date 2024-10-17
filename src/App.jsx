
import { Outlet, Router } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Footer from './component/utils/Shared/Footer/Footer'
import TopNavbar from './component/TopNavbar'

function App() {


  return (
    <div >
      <TopNavbar />
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
