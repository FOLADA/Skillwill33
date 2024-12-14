import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

const App:React.FC = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/users/:id' element={<UserPage/>}/>
    </Routes>
    </>
  )
}

export default App
