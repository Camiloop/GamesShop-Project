import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CartProducts from './CartProducts';
import { addToCart } from '../redux/slice/cartSlice';
import styled from 'styled-components';

const RightSideMenu = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 23%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #426583 transparent;
  transition: transform 0.3s ease;
`;

const MenuContent = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  margin-top: 20px;
`;

const Total = styled.h3`
  margin-top:'20px';
`;

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
    <RightSideMenu onDrop={handleDrop} onDragOver={handleDragOver}>
      <MenuContent>
        <h2>Your cart</h2>
        <CloseButton onClick={() => setOpenCart(false)}>X</CloseButton>
        <ContentDiv>
          {products?.map((i) => (
            <CartProducts key={i.id} id={i.id} img={i.img} title={i.tittle} price={i.price} quantity={i.quantity} />
          ))}
        </ContentDiv>
        <Total>Total</Total>
        <Total>${getTotal()}</Total>
      </MenuContent>
    </RightSideMenu>
  );
};

export default Cart;