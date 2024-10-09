import MyCard from './MyCard';

function Cards({ isLogin, writings }) {
    const card = writings.map(writing =>
        <MyCard writing={writing}/>
  );
  return (
    <ul>
        {isLogin && card}
    </ul>
  );
}

export default Cards;