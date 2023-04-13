import { NavLink } from "react-router-dom"
import { ModalContext } from "../Pages/Root";
import { useContext } from "react";

const Header = () => {
    const {toggleModal} = useContext(ModalContext);
    return (
        <header className="header">
            <div className="header-wrapper">
                <NavLink to={'/'} className="logo">LOGOTIP</NavLink>

                <ul className="header-nav">
                    <li>Главная</li>
                    <li onClick={toggleModal}>Модалка</li>

                </ul>
            </div>
        </header>
    )
}

export default Header