import '../../styles/components/layout/Layout.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/panaderia pops.jpeg" alt="Logo" className='fotoprincipal'></img>
                <h1>Pananderia Pops</h1>
            </div>
        </header>
    );
}

export default Header;