import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import "./App.css"

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
