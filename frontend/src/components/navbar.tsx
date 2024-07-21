import {
    ToggleGroup,
    ToggleGroupItem,
  } from "../components/ui/toggle-group"

const Navbar = () => {
    return (
      <>    
        <ToggleGroup type="single" className="nav-group">
         <ToggleGroupItem value="name">
            <div>Patrick Gallardo </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="projects" >
          <div>Projects</div>
        </ToggleGroupItem>
        <ToggleGroupItem value="about">
          <div>About</div>
        </ToggleGroupItem>
        <ToggleGroupItem value="contacts">
          <div>Contacts</div>
        </ToggleGroupItem>
        </ToggleGroup>
      </>
    )
}

export default Navbar;