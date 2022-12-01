import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
    <main className="holder">
        <div className="homeimg">
            <img src="img/bienvenidos Pops.jpeg" alt="Bienvenidos" className='Home'></img>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>A una experiencia gratificante que va a satisfacer hasta los paladares mas exquisitos, con puro sabor y hecho con mucho cariño.</p>
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span class="cita">Simplemente Excelente</span>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;