
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import RootLayout from './Compunent/RootLayout'
import Footer from './Compunent/Footer';
import Navbar from './Compunent/Navbar';
// import Banner from './Compunent/Banner';


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Navbar/>}></Route>
    <Route path="/" element={<Footer/>}></Route>
  </Route>
))
  function App(){
  return (
    <> 
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}
export default App