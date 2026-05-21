function Header() {
    return (
        <header>
            <div>
                <h1>DevJobs</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Empleos</a>
                    </li>
                    <li>
                        <a href="#">Empresas</a>
                    </li>
                    <li>
                        <a href="#">Salarios</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button>Subir CV</button>
                <button>Iniciar Sesión</button>
            </div>
        </header>
    );
}

export default Header;