import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CartProducts from './CartProducts';
import { addToCart } from '../redux/slice/cartSlice';
import './cart.css';

const Cart = ({ setOpenCart }: any) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.cart);

  const getTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    const product = JSON.parse(data);
    dispatch(addToCart({ ...product, price: parseFloat(product.price), quantity: 1 }));
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="right-side-menu" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="menu-content">
        <h2>Your cart</h2>
        <button className="close-button" onClick={() => setOpenCart(false)}>
          X
        </button>
        <div>
          {products?.map((i) => (
            <CartProducts key={i.id} id={i.id} img={i.img} tittle={i.tittle} price={i.price} quantity={i.quantity} />
          ))}
        </div>
        <h3>Total</h3>
        <h3>${getTotal()}</h3>
      </div>
    </section>
  );
};

export default Cart;