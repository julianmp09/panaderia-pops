import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main class="holder">
        <div class="historia">
            <h2>Historia</h2>
            <p>Somos un grupo de emprendedores venezolanos que gracias a su amor por la pastaleria y panaderia hizo un sueño hecho realidad. Poder fusionar lo mejor de dos culturas y crear una panaderia llena de sabor.</p>
        </div>
        <div class="personal">
            <h2>Personal</h2>
            <div class="personas">
                <div class="persona">
                    <img src="img/yuli.png" alt="empleada1" class="fotoempleados" />
                    <h5>Yuliana Martinez</h5>
                    <h6>Maestra Pastelera</h6>
                    <p>Elaboramos postres argentinos, venezolanos y de otras nacionalidades. Mi amor por la cocina hace que tengamos una cocina de calidad para satisfacer las necesidades de nuestros clientes.</p>
                </div>
                <div class="persona">
                    <img src="img/noemi.png" alt="empleada2" class="fotoempleados" />
                    <h5>Noemi Martinez</h5>
                    <h6>Pastelera</h6>
                    <p>Contamos con una basta experiencia en preparar productos de panaderia y pasteleria que nos caracteriza como una buena opcion para las personas de nuestra localidad.
                    </p>
                </div>
            </div>
        </div>
    </main>
    );
}

export default NosotrosPage;