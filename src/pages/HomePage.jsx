
import Cards from '../components/Cards';
import NavVertical from '../components/NavVertical';



export default function HomePage({ isLogin, setLogin, writings }) {
    return(
        <div className="container">
        <aside>
            <NavVertical/>
        </aside>
        <main>
        <section className="blog-posts">
            <Cards isLogin={isLogin}  writings = {writings} />
        </section>
        </main>
        </div>
    );
}