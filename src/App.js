import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Items from './Component/Items/Items';
import Login from './Component/LogIn/Login';
import Main from './Component/Main/Main';
import SearchItem from './Component/searchItems/SearchItem';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path:'/items',
          loader: async () =>{
           return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
          },
          element:<Items></Items>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '/items/:itemsId',
      loader: async ({params}) =>{
        console.log(params.itemsId)
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.itemsId}`)
      },
      element:<SearchItem></SearchItem>
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ])
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
