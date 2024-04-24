
import './Navbar.css'

function Navbar(){

    return (
        <>
            <ul className="nav justify-content-center navbar">
                <li className="nav-item">
                    <a className="nav-link links" aria-current="page" href="#">Home</a>  
                </li>

                <li className="nav-item">
                    <a className="nav-link links" href="#">About-Me</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link links" href="#">Proyects</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link links" aria-disabled="true">Contact</a>
                </li>
            </ul>
        </>
    )
}

export default Navbar;