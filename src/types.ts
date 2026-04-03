export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string;
}

export interface Project {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  caseStudy?: CaseStudy;
}

export interface VideoTestimonial {
  url: string;
  title: string;
}

export interface G2Review {
  url: string;
  author: string;
  rating: number;
  snippet: string;
}

export interface Experience {
// ... existing
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  level: 'Excellent' | 'Very Good' | 'Good';
  category: 'Professional' | 'Technical';
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}
