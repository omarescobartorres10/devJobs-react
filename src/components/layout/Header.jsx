

function Header() {
    return (
        <header className="header">
            <div className="header-logo-container">
                 <svg class="header-logo-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 8l-4 4l4 4" />
                <path d="M17 8l4 4l-4 4" />
                <path d="M14 4l-4 16" />
            </svg>
                <h2 className="header-logo-title">DevJobs</h2>
                <nav className="header-nav">
                <ul className="header-nav-links">
                    <li>
                        <a className="header-nav-link"  href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="header-nav-link" href="#">Empleos</a>
                    </li>
                    <li>
                        <a className="header-nav-link" href="#">Empresas</a>
                    </li>
                    <li>
                        <a className="header-nav-link" href="#">Salarios</a>
                    </li>
                </ul>
            </nav>
            </div>
            
            <div className="header-actions-container">
                <div className="header-actions-links">
                    <li><a className="link-blue" href="#">Iniciar Sesión</a></li>
                    <img 
                        className="header-actions-profile-pic" 
                        src="https://avatars.githubusercontent.com/u/60507236?v=4" 
                        alt="foto de perfil" 
                        width="30" 
                        height="30" 
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;