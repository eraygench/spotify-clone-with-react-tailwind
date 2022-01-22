import { Icon } from "Icons";
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} exact activeClassName="bg-active text-white" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="home" size={24} />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} exact activeClassName="bg-active text-white" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="search" size={24} />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} exact activeClassName="bg-active text-white" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="collection" size={24} />
                        </span>
                        Kitaplığım
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu