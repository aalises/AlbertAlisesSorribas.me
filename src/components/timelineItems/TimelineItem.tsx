
import * as React from "react";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

export default ({type, ...rest}) => {
    const props : any = rest;
    const Item = (type) => {
        switch(type){
            case 'experience':
                return <ExperienceItem {...props} />  
            case 'education':
                return <EducationItem {...props} />      
        }
    }

    return (<React.Fragment>{Item(type)}</React.Fragment>)
}