import { useAppSelector } from '../redux/hooks';
// import './nav.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Title = styled.h1`
  width: 50%;
`;

const CartButton = styled.button`
  height: 50px;
`;

const SignInButton = styled(Link)`
  width: 200px;
  height: 20px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s;

  &:hover {
    background-color: #555;
    border-color: #666;
    color: rgb(57, 177, 247);
  }
`;

const NavBar = ({ setOpenCart }: any) => {
  const count = useAppSelector((store) => store.cart.length);

  return (
    <Nav>
      <Title>Online Shopping</Title>
      <SignInButton to='/login'>Sign in</SignInButton>
      <CartButton onClick={() => setOpenCart(true)}>
        Cart <span>{count}</span>
      </CartButton>
    </Nav>
  );
}

export default NavBar;