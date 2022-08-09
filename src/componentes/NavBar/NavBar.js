import './NavBar.scss';
import Cart from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (
        <header>
            <Link to="/"><h1>Hel</h1></Link>

            <ul>
                <Link to ="/"><li><button>INICIO</button></li></Link>
                <Link to ="/category/mangas"><li><button>MANGAS</button></li></Link>
                <Link to ="/category/libros"><li><button>LIBROS</button></li></Link>
            </ul>

           <Cart />
        </header>
    )
}

export default NavBar;