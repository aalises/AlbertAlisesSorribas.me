import { Component } from "react";

//Data
interface ExperienceData {
    period: string,
    title: string,
    company: string,
    headingIcon: string,
    place: string,
    iconURL: string,
    responsabilities: any[],
    technologies: any[],
    accomplishments: any[],
    additional_content?: any
}

interface EducationData {
    headingIcon: string, 
    period: string, 
    place: string,
    iconURL: string, 
    university: string, 
    GPA: string, 
    degree: string, 
    specialization: any[], 
    courses: any[],
    additional_content?: any
}

interface TimelineProps {
    itemType: 'experience' | 'education',
    data: TimelineDataObject[]
}

interface TimelineDataObject {
    id: 'header' | 'item',
    medium? : boolean
    data: any
}