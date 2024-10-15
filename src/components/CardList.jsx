import { useEffect } from 'react';
import MyCard from './MyCard';

function CardList({ isLogin, products }) {
  return (
    isLogin && <div>
      {products.map(product => {
            return (<MyCard product={product}/>);
          }
        )
      }
    </div>
  );
}

export default CardList;