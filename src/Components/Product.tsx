import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, selectSortBy } from '../redux/slice/sortSlice';
import { games } from "../assets/games";
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Section = styled.section``;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: center;
  gap: 35px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-row-gap: 20px;
  margin: auto;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: -30px;
`;

const Product = () => {

  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const sortByName = () => {
    if (sortBy === 'name') {
      dispatch(setSortBy('name-desc'));
    } else {
      dispatch(setSortBy('name'));
    }
  };

  const sortByPrice = () => {
    if (sortBy === 'price') {
      dispatch(setSortBy('price-desc'));
    } else {
      dispatch(setSortBy('price'));
    }
  };

  const sortedGames = () => {
    if (sortBy === 'name') {
      return games.slice().sort((a, b) => a.tittle.localeCompare(b.tittle));
    }
    if (sortBy === 'name-desc') {
      return games.slice().sort((a, b) => b.tittle.localeCompare(a.tittle));
    }
    if (sortBy === 'price') {
      return games.slice().sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return games.slice().sort((a, b) => b.price - a.price);
    }
    return games;
  };
  
  return (
    <Section>
      <BtnContainer>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPrice}>Sort by Price</button>
      </BtnContainer>
      <ProductGrid>
        {
          sortedGames().map((i) => (
            <ProductCard
              key={i.id}
              id={i.id}
              img={i.img}
              tittle={i.tittle}
              price={i.price}
            />  
          ))
        }
      </ProductGrid>
    </Section>
  );
};

export default Product;