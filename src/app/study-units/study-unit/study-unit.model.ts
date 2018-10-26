export interface StudyUnit {
  title: string;
  thumbImagePath: string;
  description: string;
  keywords: string[];
  type: string; // TODO: change to StudyUnitType
  degree: string; // TODO: change to Degree
  university: string; // TODO: change to University
  course: string; // TODO: change to Course
  createdAt: string; // TODO: change to Date format
  updatedAt: string; // TODO: change to Date format
  views: number;
  downloads: number;

  // Future features:
  // createdBy: User;
  // images: StudyUnitImage[];
  // videos: StudyUnitVideo[];
  // files: StudyUnitFile[];
  // comments: Comment[];
  // rateable: Rateable;
  // likeable: Likeable;
}
