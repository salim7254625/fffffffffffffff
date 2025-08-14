
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import RootLayout from './Compunent/RootLayout'
import Home from './page/Home';
import Shop from './page/Shop';



let router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<RootLayout/>}>
   <Route path='/' element={<Home />}></Route>
    <Route path='/shop' element={<Shop />} ></Route>    
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