import * as React from "react";

export default ({data}) => {
    return(
        <React.Fragment>
        {data.map(el => {
            return(
                <div key={`contact-${el.icon}`}>
                    <span>
                        <i style={{paddingRight: '1rem'}} className={el.icon}></i>
                        <i>{el.field}</i>
                    </span>
                </div>
            )
        })}
        </React.Fragment>
    )
}