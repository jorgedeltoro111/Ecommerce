import './App.css';
import Home from '../Home';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Account from '../Account';

function App() {
  return (
    <div className='bg-red-100'>
      <Home/>
      <Account/>
      <MyOrder/>
      <MyOrders/>
      <SignIn/>
      <NotFound/>
    </div>
  )
}

export default App
