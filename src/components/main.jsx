const MainContent = () => {
    return (
        <main>
            <div className="smj-img">
                <img className="smj-img-profile" src="../src/assets/profile.PNG" alt="Imagen Perfil Smith Milla" />
            </div>
            <h1 className="smj-h1">Hola, soy Smith</h1>
            <p>+2 años de experiencia como <span className="smj-span">desarrollador de software</span> de Lima, Perú 🇵🇪.
                <span className="smj-span">Especializado en desarrollo back-end en aplicaciones web.</span></p>
            <nav>
                <a href="mailto:jhonmilla1607@gmail.com" target="_blank" rel="noopener noreferrer" role="link"> " Contactame "</a>
                <a href="https://www.linkedin.com/in/jhon-smith-milla-jacinto/" target="_blank" rel="noopener noreferrer" role="link"> " LinkedIn" </a>
            </nav>
        </main>
    );
}

export default MainContent;