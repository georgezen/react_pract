import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink
                                className='nav-link'
                                to="/">
                                Home
                            </NavLink>

                            <NavLink
                                className='nav-link'
                                to="/counter">
                                Contador
                            </NavLink>
                            <NavLink
                                className='nav-link'
                                to="/form">
                                Formulario
                            </NavLink>

                            <NavLink
                                className='nav-link'
                                to="/formReduce">
                                Form con el Reduce
                            </NavLink>

                            <NavLink
                                className='nav-link'
                                to="/conversor">
                                Conversor
                            </NavLink>

                            <NavLink
                                className='nav-link'
                                to="/crudApi">
                                Crud de una Api
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
