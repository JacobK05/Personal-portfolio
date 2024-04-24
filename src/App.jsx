import { Outlet } from "react-router-dom"
import Nav from "./components/NavTabs"
import './App.css'
// import project from "./components/project"
// import Footer from "./components/Footer"
export default function App() {
return (
  <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
)
 
}

