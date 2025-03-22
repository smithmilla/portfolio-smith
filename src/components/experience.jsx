import ExperienceItem from "./experience-item";
import ExperiencieIcon from "./icons/experience"
import ExperienceData from "./data/experience"


const experiencie = () => {
    return (
        <section className="smj-experience">
            <h2 className="smj-h2">
                <ExperiencieIcon/> Experiencia Laboral
            </h2>
            {ExperienceData.map(({jobKey, jobPosition, jobCompany, jobTime, jobDetails})=> (
                <ExperienceItem key={jobKey} jobPosition={jobPosition} jobCompany={jobCompany} jobTime={jobTime} jobDetails={jobDetails}/>
            ))}
        </section>
    );
}

export default experiencie;