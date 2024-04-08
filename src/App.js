
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './main/Main';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './main/Error';
import CardBtnRecipe from './components/CardBtnRecipe';




  const router =  createBrowserRouter ( [
    { path : "/", element : <Main> </Main> ,
      children : [ 
          {path :  '/', 
            loader : async () => {
              return fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
            },
          element : <Home></Home>},
          
          {path :  'home',
          loader : async () => {
            return fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
          },
          element : <Home></Home>},

          {
            path : "home/cardrecipe/:recipe",
            loader : async ( params) => {
              console.log(params)
              return fetch (`https://www.themealdb.com/api/json/v1/1/categories.php${params.recipe}`)
            },
            element : <CardBtnRecipe></CardBtnRecipe>
          },


          {path :  'about', element : <About></About>},
          {path : "contact", element : <Contact></Contact>}
      ]
  },

  {path : '*', element : <Error></Error>}

  ])


function App() {
  return (
    <div className="App">

      <RouterProvider router={ router }></RouterProvider>
    
    </div>
  );
}

export default App;
