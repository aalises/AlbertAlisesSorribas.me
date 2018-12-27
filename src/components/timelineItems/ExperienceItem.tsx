import * as React from "react";

export default ({period, headingIcon, place, title, company, iconURL, responsabilities, technologies, accomplishments}) => {
    return(
        <div className="timeline-item">
            <div className="timeline-marker is-icon is-48x48">
                <i className={`fa ${headingIcon}`}></i>
            </div>
            <div className="timeline-content">
                <p className="heading">{period}</p>
                <div className="box">
                    <div className="columns">
                        <div className="column">
                            <figure className="image is-64x64">
                                <img src={`assets/icons/${iconURL}`} />
                            </figure> 
                        </div>
                        <div className="column is-four-fifths">
                            <h1 className="title is-size-5">{title}</h1>
                            <h6 className="subtitle is-size-6">{company}</h6>
                            <h6 className="subtitle is-size-6"><i>{place}</i></h6>
                            <div className="content" style={{fontSize: '14px'}}>
                                <h2 className="title is-size-6 has-text-grey-dark">Responsabilities</h2>
                                <ul>
                                    {responsabilities.map((el,idx) => <li key={`resp-${idx}`}>{el}</li>)}                                    
                                </ul>
                                <h2 className="title is-size-6 has-text-grey-dark">Technologies</h2>
                                <ul>
                                    {technologies.map((el, idx) => <li key={`tech-${idx}`}>{el}</li>)}                                    
                                </ul>
                                <h2 className="title is-size-6 has-text-grey-dark">Accomplishments</h2>
                                <ul>
                                    {accomplishments.map((el, idx) => <li key={`acc-${idx}`}>{el}</li>)}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}