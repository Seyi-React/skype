import Topbar from "@/components/Topbar"
import Leftsidebar from "@/components/Leftsidebar"

import { Outlet } from "react-router-dom"
import Bottombar from "@/components/Bottombar"


const RootLayout = () => {
  return (
    <div className="w-full md:flex">
          <Topbar/>
          <Leftsidebar/>

          <section className="flex flex-1 h-full">
            <Outlet/>
          </section>
            
            <Bottombar/>
    </div>
  )
}

export default RootLayout