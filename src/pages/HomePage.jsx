
import CardList from '../components/CardList';
import NavVertical from '../components/NavVertical';



export default function HomePage({ isLogin, setLogin, products }) {
    return(
        <div className="container">
        <aside>
            <NavVertical/>
        </aside>
        <main>
        <section className="blog-posts">
            <CardList isLogin={isLogin}  products = {products} />
        </section>
        </main>
        </div>
    );
}