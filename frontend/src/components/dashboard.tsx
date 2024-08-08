import Navbar from "./navbar";
import Intro from "./intro";
import LineBreak from "./linebreak";
import About from "./about";
import Resume from "./resume";
import Services from "./services";
import Projects from "./projects";
import Contacts from "./Contacts";

const Dashboard = () => {
    return (
        <div className="overflow-x-hidden">
          <Navbar />
          <Intro /> 
          <LineBreak setTitle="ABOUT"/>
          <About />
          <LineBreak setTitle="RESUME"/>
          <Resume />
          <LineBreak setTitle="SERVICES"/>
          <Services />
          <LineBreak setTitle="PROJECTS"/>
          <Projects />
          <LineBreak setTitle="CONTACT"/>
          <Contacts />         
        </div> 
    )
}

export default Dashboard;
