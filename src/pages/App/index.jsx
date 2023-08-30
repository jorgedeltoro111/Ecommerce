import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../Context';
import Home from '../Home';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Account from '../Account';
import NavBar from '../../Components/NavBar/index';
import './App.css';

/**Con esta funcion vamos a crear un array de rutas que van a devolver a nuestro componente
 * lo que deseamos es querer darle una ruta a cada componente y retornalo para mostrarlo.
 * y en la funcion principal "App" lo vamos a recibir.
 */
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/*', element: <NotFound/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/my-account', element: <Account/> },
  ])

  return routes;
}

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
