import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { removeProduct } from '../redux/slice/cartSlice';
import styled from 'styled-components';

interface PropsType {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const Section = styled.section``;

const CartProductsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 100px;
  margin-right: 20px;
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.h2``;

const ProductPrice = styled.p`
  margin: 5px 0;
`;

const RemoveButton = styled.button`
  height: 35px;
  width: 35px;
  background-color: #a82c23;
  color: #fff;
  border: none;
  padding: 1px 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const CartProducts: React.FC<PropsType> = ({ id, img, title, price, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <Section>
      <CartProductsContainer>
        <ProductImage src={img} />
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>
            {quantity} X ${price}
          </ProductPrice>
        </ProductInfo>
        <RemoveButton onClick={() => dispatch(removeProduct(id))}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M199 103v50h-78v30h270v-30h-78v-50H199zm18 18h78v32h-78v-32zm-79.002 80l30.106 286h175.794l30.104-286H137.998zm62.338 13.38l.64 8.98 16 224 .643 8.976-17.956 1.283-.64-8.98-16-224-.643-8.976 17.956-1.283zm111.328 0l17.955 1.284-.643 8.977-16 224-.64 8.98-17.956-1.284.643-8.977 16-224 .64-8.98zM247 215h18v242h-18V215z"></path>
          </svg>
        </RemoveButton>
      </CartProductsContainer>
    </Section>
  );
};

export default CartProducts;