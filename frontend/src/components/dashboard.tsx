import Navbar from "./navbar";
import Intro from "./intro";
import LineBreak from "./linebreak";
import About from "./about";
import Resume from "./resume"

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
          <LineBreak setTitle="PORTFOLIO"/>
          <LineBreak setTitle="CONTACT"/>
        </div> 
    )
}

export default Dashboard;