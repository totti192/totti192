
import './styles/styles.css';

function App() {
  return (
    <div className="App">
    <header>
        <ul className="navbar">
            <li>
                <img src="./media/logo.png" alt="imagen" className="logo"/>
            </li>
            <li><button className="button mainButton">nuevo post</button></li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <img src="./media/buscar.png" alt="imagen" className="logoBuscar button"/>
                </div>
            </li>
            <li><button className="button secundaryButton">Login</button></li>
            <li><button className="button mainButton">Registro</button></li>
        </ul>
    </header>
    <main>
        <h1 className="titulo">RAZAS DE PERROS</h1>
        <ul className="cartas">
            <li className="tipoCarta">
                <div className="contenedorImagen">
                    <img src="./media/Pastor alemán.jpg" alt="Pastor Aleman"/> 
                </div>
                <span className="breedTitle">
                    Pastor Aleman 
                </span>             
            </li>
            <li className="tipoCarta">
                <div className="contenedorImagen">
                    <img src="./media/Rottweiler.jpg" alt="Rottweiler"/> 
                </div>
                <span className="breedTitle">
                    Rottweiler  
                </span>             
            </li>
        </ul>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
