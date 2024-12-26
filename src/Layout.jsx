import { Outlet,Link } from "react-router-dom"
import "./index.css"
export default function Layout() {  
    return (
    <div>
       
       <nav>
        <div className="flex justify-between p-3 bg-black">
        <div>
        <h3 className="text-3xl text-white gap-5 font-sans">Shanker InfoTech</h3>
        </div>
        <div>
        <ul className="flex text-xl text-white font-sans gap-6 ">
            <li className=" hover:text-red-600"><Link to="/">Home</Link></li>
            <li className=" hover:text-red-600"><Link to="service">Service</Link></li>
            <li className=" hover:text-red-600"><Link to="about">About</Link></li>
            <li className=" hover:text-red-600"><Link to="contact">Contact</Link></li>
        </ul>
        </div>
        </div>
       </nav>
        <Outlet/>
        {/* <footer className="bg-green-500">
        <h5>Last Position</h5>
       </footer> */}
    </div>
    )
}
