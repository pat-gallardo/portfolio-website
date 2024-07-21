import {
    ToggleGroup,
    ToggleGroupItem,
  } from "../components/ui/toggle-group"

const Navbar = () => {
    return (
        <>
         <ToggleGroup type="single">
         <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <div className="h-4 w-4">Patrick Gallardo </div>
        </ToggleGroupItem>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <div className="h-4 w-4">Projects </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <div className="h-4 w-4">About </div>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <div className="h-4 w-4">Contacts </div>
      </ToggleGroupItem>
    </ToggleGroup>
        </>
    )
}

export default Navbar;