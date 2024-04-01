import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Error from './pages/error.jsx';
import About from './pages/about.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/projects.jsx';
import Resume from './pages/resume.jsx';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <About />,
          },
         
          {
            path: '/projects',
            element: <Projects />,
          },
          {
            path: '/Contact',
            element: <Contact />,
          },
          {
            path: '/Resume',
            element: <Resume />,
          },

    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
