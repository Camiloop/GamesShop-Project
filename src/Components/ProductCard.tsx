import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';
import styled from 'styled-components';

interface PropsType {
  id: number;
  tittle: string;
  img: string;
  price: string;
}

const ProductItem = styled.section`
  width: 200px;
  border: 1px solid #ddd;
  background-color: rgba(84, 84, 86, 0.533);
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  margin-top: 5px;
  font-size: 16px;
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(64, 64, 194);
  }
`;

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
    <ProductItem draggable onDragStart={handleDragStart}>
      <div>
        <ProductImage src={img} alt={tittle} />
      </div>
      <ProductTitle>{tittle}</ProductTitle>
      <ProductPrice>${price}</ProductPrice>
      <AddToCartButton onClick={addProductToCart}>Add to cart</AddToCartButton>
    </ProductItem>
  );
};

export default ProductCard;