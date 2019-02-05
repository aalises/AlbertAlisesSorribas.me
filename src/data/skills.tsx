const Frontend = [
  { label: 'Javascript', value: 90 },
  { label: 'Typescript', value: 70 },
  { label: 'React.js stack (React, Redux, React Router, etc)', value: 85 },
  { label: 'HTML5/CSS , SASS, Styled Components, Bulma', value: 80 },
  { label: 'Webpack / Parcel', value: 60 },
  { label: 'Qt (C++)', value: 75 },
]

const Backend = [
  { label: 'Python', value: 70 },
  { label: 'Node.js', value: 80 },
  { label: 'REST APIs (Flask, Swagger, SQLAlchemy)', value: 70 },
  { label: 'mongoDB', value: 55 },
  { label: 'Express.js', value: 40 },
]

const TestingCI = [
  { label: 'Docker', value: 65 },
  { label: 'Jenkins', value: 60 },
  { label: 'Cypress', value: 70 },
  { label: 'Jest + Puppeteer', value: 80 },
  { label: 'PyTest', value: 50 },
]

const Graphics = [
  { label: 'Unity3D', value: 80 },
  { label: 'Three.js', value: 70 },
  { label: 'Cg', value: 50 },
  { label: 'Vuforia', value: 50 },
]

const Languages = [{ label: 'Spanish', value: 100 }, { label: 'Catalan', value: 100 }, { label: 'English', value: 90 }]

const Other = [
  { label: 'Git', value: 90 },
  { label: 'Agile/Scrum methodologies', value: 90 },
  { label: 'Blender / Photoshop', value: 45 },
  { label: 'LaTeX', value: 75 },
]

const dataObject: SkillsData[] = [
  { title: 'Front-End Web Development', data: Frontend, color: 'info' },
  { title: 'Back-End Web Development', data: Backend, color: 'success' },
  { title: 'Testing and CI/CD', data: TestingCI, color: 'warning' },
  { title: '3D Graphics and VR/AR Development', data: Graphics, color: 'danger' },
  { title: 'Languages', data: Languages, color: 'primary' },
  { title: 'Other', data: Other, color: 'dark' },
]

export default dataObject
