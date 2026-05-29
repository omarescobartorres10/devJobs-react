import Header from "../layout/Header";



function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <section className="hero-section">
                <h1 className="hero-title">Encuentra el trabajo de tus sueños</h1>

                <p className="hero-subtitle">Únete a la más grande comunidad de desarrolladores y cuentra tu próxima
                    oportunidad. </p>

                <form id="hero-search-form" className="hero-search-form" role="search">
                    <div className="hero-search-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input class="hero-search-input" type="text"
                        placeholder="Buscar empleos por titulo, habilidad o empresa" required></input>
                    </div>

                    <button className="btn-blue" type="submit">Buscar</button>
                </form>
            </section>

            <section className="features-section">
                <header>
                    <div className="features-header-container">
                        <h2 className="features-title">¿Por qué DevJobs</h2>
                        <p className="features-subtitle">Bienvenido a DevJobs, la plataforma líder para conectar talento en
                            tecnología con las mejores
                            oportunidades laborales.</p>
                    </div>

                </header>


                <div className="feature-cards-section">
                    <article className="feature-card-item">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9" />
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        </svg>

                        <h3 className="feature-card-item-title">Encuentra el trabajo de tus sueños</h3>
                        <p className="feature-card-item-description">Busca miles de empleos de las mejores empresas de todo el
                            mundo</p>
                    </article>

                    <article className="feature-card-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        <h3 className="feature-card-item-title">Conecta con las mejores empresas</h3>
                        <p className="feature-card-item-description">Conecta con empresas que están contratando por tus
                            habilidades .</p>
                    </article>

                    <article className="feature-card-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l18 0" />
                            <path d="M5 21v-14l8 -4v18" />
                            <path d="M19 21v-10l-6 -4" />
                            <path d="M9 9l0 .01" />
                            <path d="M9 12l0 .01" />
                            <path d="M9 15l0 .01" />
                            <path d="M9 18l0 .01" />
                        </svg>
                        <h3 className="feature-card-item-title">Obten el salario que mereces</h3>
                        <p className="feature-card-item-description">Obtén el salaio que mereces con nuestra calculadora de
                            Salarios</p>
                    </article>
                </div>
            </section>
            <hr />
            <footer className="footer">
                <small className="footer-text">©2026 Devjobs. Todos los derechos reservados. </small>
            </footer>
            </main>
           
        </>
    )
}

export default LandingPage