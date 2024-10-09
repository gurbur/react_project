
import Cards from '../components/Cards';
import NavVertical from '../components/NavVertical';


const writings = [
    { title:"title1", top_line:"top line 1", id:1 },
    { title:"title2", top_line:"top line 2", id:2 },
    { title:"title3", top_line:"top line 3", id:3 },
    { title:"title4", top_line:"top line 4", id:4 },
  ];

export default function HomePage({ isLogin, setLogin }) {
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