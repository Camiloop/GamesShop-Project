import { useState } from 'react'
import NavBar from '../Components/NavBar'
import Product from '../Components/Product'
import Cart from '../Components/Cart'


const Home = () => {

  const [openCart, setOpenCart] = useState(false)
 
  return (
    <div>
      <NavBar setOpenCart = {setOpenCart}/>
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      <Product />
    </div>
  )
}

export default Home