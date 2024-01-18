import { Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Register from './pages/Register'
import Signin from './pages/Signin'
import { useAppContext } from './contexts/AppContext'
import AddHotel from './pages/AddHotel'
import MyHotels from './pages/MyHotels'
import EditHotel from './pages/EditHotel'


function App() {

  const {isLoggedIn} = useAppContext()

  return (
    <Routes>
      <Route path='/' element={<Layout>
        <p>Home Page</p>
      </Layout>}/>

      <Route path='/search' element={<Layout>
        <p>Search Page</p>
      </Layout>}/>

      <Route path='/register' element={<Layout>
        <Register/>
      </Layout>}/>

      <Route path='/sign-in' element={<Layout>
        <Signin/>
      </Layout>}/>

      {isLoggedIn && (
      <>
      <Route path='/add-hotel' element={<Layout><AddHotel/></Layout>}/>
      <Route path='/my-hotels' element={<Layout><MyHotels/></Layout>}/>
      <Route path='/edit-hotel/:hotelId' element={<Layout><EditHotel/></Layout>}/>
      </>
      )}

    </Routes>

    
    
  )
}

export default App
