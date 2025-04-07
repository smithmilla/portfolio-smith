import LinkedInIcon from "./icons/linkedInIcon";
import SendEmailIcon from "./icons/SendEmailIcon";
import InformationContact from "./information-contact";

const Presentation = () => {
    return (
    <section className="smj-main">
        <div className="smj-container-profile">
                <div className="smj-img">
                    <img className="smj-img-profile" src="../src/assets/img-profile.PNG" alt="Imagen Perfil Smith Milla" />
                </div>
                <a href="#" target="_blank" rel="noopener" className="smj-condition-status">Disponible para trabajar</a>
            </div>
            <h1 className="smj-h1">Hola, soy Smith</h1>
            <p className="smj-p">+2 años de experiencia como <span className="smj-span">desarrollador de software</span> de Lima, Perú 🇵🇪.
                <span className="smj-span"> Especializado en desarrollo back-end en aplicaciones web.</span></p>
            <nav className="smj-contact-information">
                <InformationContact description="Contactame" redirect="mailto:jhonmilla1607@gmail.com" target="_blank" rel="noopener noreferrer" role="link" className="smj-links">
                    <SendEmailIcon/>
                </InformationContact>
                <InformationContact description="LinkedIn" redirect="https://www.linkedin.com/in/smith-milla/" target="_blank" rel="noopener noreferrer" role="link" className="smj-links">
                    <LinkedInIcon/>
                </InformationContact>
            </nav>
    </section>
    );
}

export default Presentation;