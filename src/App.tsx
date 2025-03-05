import './App.css'
import './index.css'
import Create from './Components/Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Category from './Components/Category'
import LoginSignup from './Components/LoginSignup'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Pages from './Components/Pages'
function App() {


  return (

    <div className='Main-css'>
      <Router>
        <Routes>
          <Route path='/Create' element={<Create></Create>}> </Route>
          <Route path='/LoginSignup' element={<LoginSignup></LoginSignup>}></Route>
          <Route path='/Home' element={<Home></Home>} ></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Category' element={<Category></Category>}></Route>
          <Route path='Pages' element={<Pages></Pages>}></Route>
          <Route path='/Blog' element={<Blog></Blog>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
