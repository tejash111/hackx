import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ElementAllHackatons } from './components/hackDiscovery/page.jsx'
import { HackathonDetail } from './components/hackDiscovery/detail/page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateHackPage } from './components/CreateHack/page.jsx'
import { ElementCreateProject } from './components/createProject/ElementCreateProject.jsx'
import { ElementDashboard } from './components/dashboard/dashboard.jsx'
import { ElementProjectLogin } from './components/auth/projectLogin.jsx'
import { JudgeRegister } from './components/auth/judgeRegister.jsx'
import { CreateHackthonContext } from './context/createHackContext.jsx'

const router = createBrowserRouter([
  { path: "/", element: <ElementAllHackatons /> },
  { path: "/hackathons", element: <ElementAllHackatons /> },
  { path: "/hackathon/:slug", element: <HackathonDetail /> },
  { path: "/createhackathon", element: <CreateHackPage /> },
  {path: "/createproject" , element : <ElementCreateProject/>},
   {path: "/dashboard" , element : <ElementDashboard/>},
  {path: "/login" , element : <ElementProjectLogin/>},
  {path: "/judge-register" , element : <JudgeRegister/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CreateHackthonContext>
    <RouterProvider router={router} />
    </CreateHackthonContext>
  </StrictMode>,
)
