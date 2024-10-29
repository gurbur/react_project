import CardList from '../components/CardList';
import NavVertical from '../components/NavVertical';
import RecentlySeen from '../components/RecentlySeen';


export default function HomePage({ isLogin, setLogin, products }) {
    return(
        <div className="container">
        <aside>
            <NavVertical/>
            <RecentlySeen />
        </aside>
        <main>
        <section className="blog-posts">
            <CardList isLogin={isLogin}  products = {products} />
        </section>
        </main>
        </div>
    );
}