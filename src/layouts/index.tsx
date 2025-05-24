import { Outlet } from "react-router"
import NavBar from "../components/navBar"

const Layout = () => {
  return (
    <div  className=" bg-neutral-100 dark:bg-neutral-800">
       <main className="w-full min-h-screen">
        <NavBar/>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
