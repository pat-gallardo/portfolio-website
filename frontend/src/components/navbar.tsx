import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group"

import { Badge } from "../components/ui/badge"


const Navbar = () => {
  return (
    <>
      <ToggleGroup type="single" className="flex 
      justify-between items-center w-full p-5 px-4 text-lg border bg-violet-900 text-violet-300">
          <ToggleGroupItem value="name" className="mr-auto text-xl">
          <a href="*">
              <div>Patrick Gallardo</div> 
              </a>
          </ToggleGroupItem>
          <div className="flex space-x-4">
              <ToggleGroupItem value="projects" className="hover:bg-violet-100 rounded hover:text-violet-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <a href="*">
                    <div>Projects</div>
                  </a>
              </ToggleGroupItem>
              <ToggleGroupItem value="about" className="hover:bg-violet-100 rounded hover:text-violet-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <a href="*">
                    <div>About</div>
                  </a>
              </ToggleGroupItem>
              <ToggleGroupItem value="contacts" className="hover:bg-violet-100 rounded hover:text-violet-900 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                  </svg>
                  <a href="*">
                    <div>Contacts</div>
                    <Badge variant="destructive" className="absolute -top-2 -right-2 bg-red-600 text-white text-base w-6 h-6 flex items-center justify-center rounded-full p-0 hover:bg-red-800">2</Badge>
                  </a>
              </ToggleGroupItem>
          </div>
      </ToggleGroup>
    </>
  )
}

export default Navbar;