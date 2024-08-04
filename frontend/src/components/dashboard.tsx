import Navbar from "./navbar";
import Intro from "./intro";
import LineBreak from "./linebreak";
import About from "./about";
import Resume from "./resume";
import Services from "./services";
import Projects from "./projects";

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
        </div> 
    )
}

export default Dashboard;