import * as React from "react";
import SectionHeader from "../../components/SectionHeader";
import Timeline from "../../components/Timeline";
import EducationData from "../../data/education";

export default () => {
    return (<React.Fragment>
        <SectionHeader title="Education" icon="fa-book" />
        <Timeline itemType='education' data={EducationData}/>
    </React.Fragment>);
}