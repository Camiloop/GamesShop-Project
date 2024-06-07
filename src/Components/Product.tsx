import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, selectSortBy } from '../redux/slice/sortSlice';
import { games } from "../assets/games";
import ProductCard from './ProductCard';
import './Product.css';

const Product = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const sortByName = () => {
    if (sortBy === 'name') {
      dispatch(setSortBy('name-desc'))
    } else
    dispatch(setSortBy('name'));
  };

  const sortByPrice = () => {
    if (sortBy === 'price') {
      dispatch(setSortBy('price-desc'))
    } else
    dispatch(setSortBy('price'));
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
    <section>
      <div className='btn-container'>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPrice}>Sort by Price</button>
      </div>
      <div className="product-grid">
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
      </div>
    </section>
  );
};

export default Product;