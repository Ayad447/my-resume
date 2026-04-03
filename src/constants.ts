import { ResumeData, Project, VideoTestimonial, G2Review } from './types';

export const RESUME_DATA: ResumeData & {
  projects: Project[],
  profilePhoto: string,
  videoTestimonials: VideoTestimonial[],
  g2Reviews: G2Review[]
} = {
  name: "Syed Ayad Ali",
  title: "Regional Project Head - US East",
  profilePhoto: "https://vepimg.b8cdn.com/uploads/vjfnew/1000002326/content/files/17752301501725301259706-jpg1775230150.jpg",
  summary: "Experienced Senior Project Manager gifted at meeting tight deadlines, driving business opportunities and working well in team-based environments. Engaging and personable to manage key milestones and deliver exemplary customer service.",
  contact: {
    phone: "+92-342-4489513",
    email: "ayad447@hotmail.com",
    linkedin: "https://www.linkedin.com/in/ayad-ali-a342b36b/"
  },
  projects: [
    {
      title: "Automated Post Event Dashboard",
      description: "Developed an event analytics dashboard using Claude AI to provide real-time insights to customers.",
      impact: "Reduced reporting time from 2 weeks to 30 minutes, eliminating 100% of manual PDF creation workload.",
      tags: ["AI Integration", "Analytics", "Automation", "Claude AI"],
      caseStudy: {
        challenge: "We used to share raw data to our clients after the event/project was delivered. We also had a dedicated 2 person team who from these raw files used to create pdf files that could be shared with our clients but in peak times the pdf report creation can go from 1 week to 2 week timeline.",
        solution: "Create a dashboard that will be 2 fold. The users will first upload all relevant information and the dashboard will show them an interactive cleaned version of the stats. The team will then verify and export this as an HTML so the interactivity remains intact.",
        results: "We reduced the work from 2 weeks to 30 minutes. The clients used to get the details almost just after the event or project was concluded creating significant increase in the satisfaction of the product."
      }
    },
    {
      title: "Webinar Management System",
      description: "Introduced a comprehensive system to handle complex webinar sessions for enterprise-level customers.",
      impact: "Created a new revenue stream and significantly reduced client churn for enterprise accounts.",
      tags: ["System Design", "Enterprise", "Resource Management", "Vendor Management"],
      caseStudy: {
        challenge: "In some large scale conferences where the event can host more than 200 sessions, it can become difficult for clients to manage themselves.",
        solution: "Create a webinar management team which is going to receive these requests from enterprise clients. This team will work as a shared resource working on multiple fronts. Project Manager will be providing information to these team and the resource allocation will be done by regional heads.",
        results: "A new revenue stream was added as enterprise clients were willing to pay extra for this service. This also increase the loyalty and reduce churn for that client."
      }
    },
    {
      title: "WCAG & ADA Compliance Initiative",
      description: "Collaborated with product and legal teams to achieve full WCAG compliance across all event platforms.",
      impact: "Contributed to 10% of total revenue by enabling partnerships with compliance-critical clients like Microsoft and Nationwide.",
      tags: ["Accessibility", "WCAG 2.1", "ADA Compliance", "Revenue Growth"],
      caseStudy: {
        challenge: "The platform was initially not WCAG or ADA compliant. The only thing that we used to add was a contrast changer and a third party tool that would read screens. Most screen readers are using JAWS or NVDA on their desktop to work around the websites that requires appropriate keyboard handling.",
        solution: "Work with WCAG document to make elements on the platform accessible. This includes adding focus, keyboard navigation, alt text to interactive elements and images. We further extended this to our mobile app and made it accessible for our consumers.",
        results: "The platform became fully WCAG compliant, contributing to 10% of our revenue and securing clients like Microsoft, Lilly, and Nationwide who only work with ADA compliant partners."
      }
    },
    {
      title: "Fortune 500 & US Govt Strategic Partnerships",
      description: "Led projects for high-profile clients including Lilly, General Motors, Amazon, DARPA, and CMS.",
      impact: "Ensured strict legal and ADA compliance, providing strategic insights for government and enterprise standards.",
      tags: ["Strategic Leadership", "Compliance", "Fortune 500", "Government"]
    }
  ],
  videoTestimonials: [
    { url: "https://player.vimeo.com/video/875484591", title: "Girls Who Code" },
    { url: "https://player.vimeo.com/video/1145909200", title: "Unversity of Maryland Global Campus" },
    { url: "https://player.vimeo.com/video/1117793916", title: "Children Tumor Foundation" },
    { url: "https://player.vimeo.com/video/841793777", title: "University of Massachusetts" }
  ],
  g2Reviews: [
    {
      url: "https://www.g2.com/products/vfairs/reviews/vfairs-review-7718181",
      author: "Brigade Events",
      rating: 5,
      snippet: "Syed was extremely responsive to our multitude of live updates throughout the span of our multi day event. There was no way we could have pushed out the number of individual messages and push notifications without him."
    },
    {
      url: "https://www.g2.com/products/vfairs/reviews/vfairs-review-8734629",
      author: "General Motors",
      rating: 5,
      snippet: "Syed Ayad Ali is the best part of vFairs. He is attentive, professional, and fantastic with follow up."
    },
    {
      url: "https://www.g2.com/products/vfairs/reviews/vfairs-review-10052896",
      author: "Hospital for Special Surgery",
      rating: 5,
      snippet: "It has been a fantastic experience working with Syed's team to develop a customized platform for event management and registration, supporting both our front-end and back-end needs, including the implementation of integrations with other software. "
    }
  ],
  experience: [
    // ... existing experience
    {
      title: "Regional Project Head - US East",
      company: "vFairs",
      period: "Feb 2024 - Present",
      description: [
        "Accountable for overseeing the project implementation in the US East region.",
        "Handling the top 10% of clients located in the US East, ensuring their needs are met.",
        "Tasked with the training and advancement of team members.",
        "Focused on boosting renewal rates by providing clients and project managers with optimal tools to enhance customer experience.",
        "Fostered a collaborative environment, promoting teamwork and knowledge sharing among team members."
      ]
    },
    {
      title: "Senior Project Manager and Team Lead",
      company: "vFairs",
      period: "Feb 2023 - Feb 2024",
      description: [
        "Collaborate with clients to understand their event objectives, audience, and desired outcomes.",
        "Planning, organizing, and overseeing events from conception to execution.",
        "Source, negotiate with, and manage external vendors and service providers.",
        "Provide guidance on technical requirements, troubleshoot issues, and oversee platform setup and configuration."
      ]
    },
    {
      title: "Senior Project Manager",
      company: "vFairs",
      period: "Feb 2022 - Jan 2023",
      description: [
        "Supervise event operations, ensuring that all technical aspects run smoothly.",
        "Work closely with cross-functional teams to ensure alignment with overall organizational goals.",
        "Brainstorming and implementing ideas that can improve product, automating things to improve efficiencies.",
        "Identifying risks and escalating things before the project derails."
      ]
    },
    {
      title: "Project Manager Level 2",
      company: "vFairs",
      period: "Aug 2020 - Feb 2022",
      description: [
        "Handled clients from US and Canada region, managing around 35 projects in 2021 with approximate contract value of 1.2 Million USD.",
        "Involved in implementing Accessibility standards (WCAG 2.1) to target a new market.",
        "Achieved a renewal rate of approximately 25% in 2021.",
        "Managed and handled a team of 2 project managers and 2 project coordinators."
      ]
    },
    {
      title: "Sales Executive",
      company: "Basic Chemical Industries",
      period: "Dec 2016 - June 2018",
      description: [
        "Developed and nurtured industrial portfolio to achieve yearly sales of 4.5 million Saudi Riyal in Fiscal Year 2017.",
        "Amplified sales of Riyadh Region by 1.5 million Saudi Riyals by negotiating and securing contract from ARASCO.",
        "Efficiently managed portfolio of almost 25 Key Account customers such as ARASCO, PEPSI Co., Coca Cola.",
        "Reduced Account Receivables by 80%."
      ]
    },
    {
      title: "Trainee-Process Engineer",
      company: "Lotte Chemical Pakistan Limited",
      period: "July 2014 - Nov 2015",
      description: [
        "Evaluated the design of Gas type shell and tube heat exchanger.",
        "Redesigned the process control of soda ash addition to reduce the by 33%.",
        "Investigated and proposed solutions to reduce the choking of lines from Alumina Desiccant.",
        "Coordinated ongoing maintenance and housekeeping of the plant by being part of TPM activities."
      ]
    }
  ],
  education: [
    {
      degree: "MBA",
      institution: "Lahore University of Management Sciences",
      period: "Jun 2018 - June 2020"
    },
    {
      degree: "Chemical Engineering",
      institution: "University of Engineering and Technology",
      period: "Sep 2010 - July 2014"
    }
  ],
  skills: [
    { name: "Key Account Management", level: "Excellent", category: "Professional" },
    { name: "Relationship Cultivation & Retention", level: "Excellent", category: "Professional" },
    { name: "Project Delivery", level: "Excellent", category: "Professional" },
    { name: "UI/UX Design", level: "Excellent", category: "Professional" },
    { name: "Project Planning", level: "Excellent", category: "Professional" },
    { name: "AI Prompt Engineering", level: "Very Good", category: "Professional" }
  ]
};
