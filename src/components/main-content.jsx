import Presentation from "./presentation";
import Experience  from "./experience";
import Projects from "./projects";

const MainContent = () => {
    return (
        <main className="smj-main-content">
            <Presentation/>
            <Experience/>
            <Projects/>
        </main>
    );
}

export default MainContent;