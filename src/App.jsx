
import './App.css'
import NavigationBar from '../navbar'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home'
import { Page1 } from './Pages/page1'

function App() {

  return(
    <>
     <Router>
    <div>
      <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page1" element={<Page1/>} />

        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
