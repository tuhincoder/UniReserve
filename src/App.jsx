
import { Outlet, Router } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Footer from './component/utils/Shared/Footer/Footer'

function App() {


  return (
    <div>
      <div className=''>
        <MainLayout>
          <Outlet></Outlet>
        </MainLayout>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
