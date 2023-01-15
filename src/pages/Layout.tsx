import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="wrapper">

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tickets">Tickets</Link>
                    </li>
                    <li>
                        <Link to="/information">Information</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            </div>
    )
};

export default Layout;
