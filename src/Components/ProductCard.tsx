import './productCard.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';

interface PropsType {
  id: number;
  tittle: string;
  img: string;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({ id, tittle, img, price }) => {
  const dispatch = useAppDispatch();

  const store = useAppSelector((store) => store.cart);

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      tittle,
      price: parseFloat(price),
      quantity: 1,
    };
    console.log('Adding to cart:', payload);
    console.log(store);

    dispatch(addToCart(payload));
  };

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ id, img, tittle, price }));
  };

  return (
    <section className="product-item" draggable onDragStart={handleDragStart}>
      <div>
        <img src={img} alt={tittle} />
      </div>
      <h3>{tittle}</h3>
      <p>${price}</p>
      <button onClick={addProductToCart}>Add to cart</button>
    </section>
  );
};

export default ProductCard;