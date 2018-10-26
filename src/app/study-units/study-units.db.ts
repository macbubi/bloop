export const initialState = {
  studyUnits: [{
    title: 'Summary #1',
    thumbImagePath: 'https://www.catalysts.cc/wp-content/uploads/2016/09/summary.png',
    description: 'Simple Description',
    keywords: ['Summary', 'Ariel', 'Molucules'],
    type: 'summary', // TODO: change to StudyUnitType
    degree: 'Electrical Engineering', // TODO: change to Degree
    university: 'Tel-Aviv University', // TODO: change to University
    course: 'Electricity 101', // TODO: change to Course
    createdAt: '01.11.2018', // TODO: change to Date format
    updatedAt: '21.12.2018', // TODO: change to Date format
    views: 68,
    downloads: 21
  }, {
    title: 'Magnetic Pulses',
    thumbImagePath: 'https://www.catalysts.cc/wp-content/uploads/2016/09/summary.png',
    description: 'Simple Description',
    keywords: ['Summary', 'Ariel', 'Molucules'],
    type: 'summary', // TODO: change to StudyUnitType
    degree: 'Electrical Engineering', // TODO: change to Degree
    university: 'Tel-Aviv University', // TODO: change to University
    course: 'Electricity 101', // TODO: change to Course
    createdAt: '22.10.2018', // TODO: change to Date format
    updatedAt: '23.10.2018', // TODO: change to Date format
    views: 40,
    downloads: 5
  }, {
    title: 'Electic Currents',
    thumbImagePath: 'https://www.catalysts.cc/wp-content/uploads/2016/09/summary.png',
    description: 'Simple Description',
    keywords: ['Summary', 'Ariel', 'Molucules'],
    type: 'summary', // TODO: change to StudyUnitType
    degree: 'Electrical Engineering', // TODO: change to Degree
    university: 'Tel-Aviv University', // TODO: change to University
    course: 'Electricity 101', // TODO: change to Course
    createdAt: '01.11.2018', // TODO: change to Date format
    updatedAt: '21.12.2018', // TODO: change to Date format
    views: 68,
    downloads: 21
  }, {
    title: 'Angular 5',
    thumbImagePath: 'https://www.catalysts.cc/wp-content/uploads/2016/09/summary.png',
    description: 'This teaches you angular 5',
    keywords: ['Angular', 'Web', 'programming'],
    type: 'resources', // TODO: change to StudyUnitType
    degree: 'Software Engineering', // TODO: change to Degree
    university: 'Tel-Aviv University', // TODO: change to University
    course: 'Front End 101', // TODO: change to Course
    createdAt: '01.11.2018', // TODO: change to Date format
    updatedAt: '21.12.2018', // TODO: change to Date format
    views: 1568,
    downloads: 321
  }],
  search: {
    degree: '',
    university: '',
    course: '',
    searchTerm: '',
    filter: {
      type: []
    },
    sort: {
      sortBy: '',
      sortOrder: ''
    }
  }
};
