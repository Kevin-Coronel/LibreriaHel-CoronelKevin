import './NavBar.scss';
import Cart from '../CartWidget/CartWidget';

const NavBar = () =>{
    return (
        <header>
            <h1>Hel</h1>

            <ul>
                <li><button>Inicio</button></li>
                <li><button>Libros</button></li>
                <li><button>Mangas</button></li>
                <li><button>Comics</button></li>
            </ul>

           <Cart />
        </header>
    )
}

export default NavBar;