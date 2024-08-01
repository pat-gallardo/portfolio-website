import Navbar from "./navbar";
import Intro from "./intro";
import LineBreak from "./linebreak";
import About from "./about";
import Skills from "./skills";

const Dashboard = () => {
    return (
        <div className="overflow-x-hidden">
          <Navbar />
          <Intro />
          <LineBreak setTitle="ABOUT"/>
          <About />
          <Skills />
          <LineBreak setTitle="RESUME"/>
          <LineBreak setTitle="SERVICES"/>
          <LineBreak setTitle="PORTFOLIO"/>
          <LineBreak setTitle="CONTACT"/>
        </div> 
    )
}

export default Dashboard;