import { Link } from "react-router-dom"
import './NavLinkHeader.scss';
import { navLinks } from "./NavLinks";
const blockName = 'nav-link-header';
export const NavLinkHeader = () =>{
    return (
        <ul className={blockName}>
            {
                navLinks.map(val => (
                        <li className={`${blockName}__list`} key={val.path}>
                        <Link to={val.path}>{val.title}</Link>
                        </li>
                    )
                )
            }
            
        </ul>
    )
}