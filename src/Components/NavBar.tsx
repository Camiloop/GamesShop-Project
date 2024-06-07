import { useAppSelector } from '../redux/hooks';
import './nav.css'
import { Link } from 'react-router-dom'

const NavBar = ({setOpenCart}: any) => {

  const count = useAppSelector((store) => store.cart.length)

  return (
  <>
  <nav>
    <h1>Online Shopping</h1>
    <Link className='sign-btn' to='/login'>
    {/* <img src={iconimg} /> */}
    Sign in</Link>
    <button onClick={() => setOpenCart(true)}>Cart
      <span>{count}</span>
    </button>
  </nav> 
  </>
  )
}

export default NavBar;