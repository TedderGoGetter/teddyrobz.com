import './App.scss'
import About from './Pages/About'
import Home from './Pages/Home'
import PromptGen from './Pages/PromptGen'
import Header from './components/Header'
import { createBrowserRouter, Routes, Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Oblique from './Pages/Oblique'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="prompt" element={<PromptGen/>}/>
      <Route path="oblique" element={<Oblique/>}/>
    </Route>
  )
)

function App() {


  return (

    <RouterProvider router={router}/>

    
  )
}

export default App
