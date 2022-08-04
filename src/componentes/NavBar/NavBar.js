import './NavBar.scss';
import Cart from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (
        <header>
            <h1>Hel</h1>

            <ul>
                <Link to ="/"><li><button>INICIO</button></li></Link>
                <Link to ="/mangas"><li><button>MANGAS</button></li></Link>
                <Link to ="/libros"><li><button>LIBROS</button></li></Link>
            </ul>

           <Cart />
        </header>
    )
}

export default NavBar;