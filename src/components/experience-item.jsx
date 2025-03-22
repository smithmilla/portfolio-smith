const experienceItem = ({jobPosition, jobCompany, jobTime, jobDetails}) => {
    return (
        <div className="smj-timeline">
            <div className="smj-timeline-item">
                <div className="smj-timeline-dot"></div>
                <div className="smj-job">
                    <h3 className="smj-job-position">{jobPosition}</h3>
                    <h4 className="smj-job-company">{jobCompany}</h4>
                    <span className="smj-job-time">{jobTime}</span>
                </div>
                <div className="smj-details-job">
                    <p>{jobDetails}</p>
                </div>
            </div>  
        </div>
    );
}

export default experienceItem;