const projectsItem = ({projectTitle, projectDescription, projectImage, projectTechnologies, projectDetails}) => {
    return(
        <div className="smj-project-item">
            <article className="smj-project-img">
                <img src={projectImage} alt=""/>
            </article>
            <article className="smj-project-content">
                <div className="smj-project-title">
                    <h2>{projectTitle}</h2>
                </div>
                <div className="smj-project-technologies">
                    <ul className="smj-project-list-technologies">
                    {
                        projectTechnologies.map((t) => (
                            <li key={t.technologiesKey} className={`smj-project-list-technologies-item ${t.technologiesColorClass}`}>
                                <t.technologiesIcon/> {t.technologiesName}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="smj-project-description">{projectDescription}</div>
                <div className="smj-project-details">
                    <ul className="smj-project-list-details">
                    {
                        projectDetails.map((d) => (
                                <li key={d.detailKey}>
                                    <a href={d.detailLink} target="_blank" rel="noopener noreferrer" role="link">
                                         <d.detailIcon/> {d.detailName}
                                    </a>
                                </li>
                        ))
                    }
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default projectsItem;