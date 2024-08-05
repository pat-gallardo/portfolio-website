import { LayoutGrid } from "./ui/layout-grid";
import Project1 from "./ui/projects/project-1";
import Project2 from "./ui/projects/project-2";
import Project3 from "./ui/projects/project-3";
import Project4 from "./ui/projects/project-4";

const Projects = () => {
  const projectItems = [
    { key:1 , label: 'Network Tracking System Application',
       description: 'A desktop application developed using Java and Java UI stores information on a SQLite database. It tracks all connected devices on an active internet connection and can be used to detect if a suspected person has access to your local internet connection.',
       textFormat:"text-base text-white",
       cards: Project1(),
      },
    { key:2 , label: 'DTS: Document Tracking System Website',
       description: 'A website application built using PHP with the CodeIgniter framework stores data in a PHPMyAdmin database. It tracks all documents requested by the client to its users with ease and notifies the users when the documents have been received by the client.', 
       textFormat:"text-base text-white",
       cards: Project2(),
      },
    { key:3 , label: 'Meditrace: Information System for COVID-19 Vaccines, Volunteers, and Frontliners for a Barangay in Pasay City',
       description: 'A website application built using PHP with the CodeIgniter framework stores data in a PHPMyAdmin database. It stores all information about COVID-19 vaccine facilities in the barangay, including medical practitioners, volunteers, and currently available vaccines.',
       textFormat:"text-base text-white",
       cards: Project3(),
      },
    { key:4 , label: 'PRECALGURO: AI Desktop Application for Precalculus, Learning Management System.', 
      description: 'A desktop application developed using Python with PyQt for GUI. Used Deep Learning for its AI and stores the data on Google Firebase a cloud-based database. It displays a list of subjects, lessons, topics and exams about Precalculus. It also let\'s the customer use their own study guides and lessons. It records the users scores and grades at the end of each assessment exams.',
      textFormat:"text-base text-white",
      cards: Project4(),
    },
    ];


    return (
        <>
      <div>
      {projectItems.map((item, index) => (
        <div key={index} className="h-screen w-full">
        <LayoutGrid cards={item.cards} />
        <div key={index}>{item.label}</div>
      </div>
      ))}
      </div>
        </>
    )
}

export default Projects;