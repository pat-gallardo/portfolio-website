import Navbar from "./navbar";
import Intro from "./intro";
import LineBreak from "./linebreak";
import About from "./about";
import Resume from "./resume";
import Services from "./services";
import Projects from "./projects";
import Contacts from "./Contacts";
import FooterPage from "./Footer";

const Dashboard = () => {
    return (
        <div className="overflow-x-hidden">
          <Navbar />
          <Intro /> 
          <LineBreak setTitle="ABOUT" setLink="about"/>
          <About />
          <LineBreak setTitle="RESUME" setLink="resume"/>
          <Resume />
          <LineBreak setTitle="SERVICES" setLink="services"/>
          <Services />
          <LineBreak setTitle="PROJECTS" setLink="projects"/>
          <Projects />
          <LineBreak setTitle="CONTACT" setLink="contact"/>
          <Contacts />     
          <FooterPage />    
        </div> 
    )
}

export default Dashboard;
