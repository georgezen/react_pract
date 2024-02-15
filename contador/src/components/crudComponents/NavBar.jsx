import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <ul>
                <li>
                    <Link className='blanquito' to="/">Home</Link>
                </li>
                <li>
                    <Link className='blanquito' to="/nuevo">Nuevo</Link>
                </li>

            </ul>

        </>
    )
}

export default NavBar
