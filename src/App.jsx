
import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'

function App() {


  return (
    <div>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  )
}

export default App
