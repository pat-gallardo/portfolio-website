import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group"

import { useState } from "react"

const menuItems = [
  { key:1 ,value: 'home', label: 'Home', link: '#', textFormat:"text-base text-white"},
  { key:2 ,value: 'about', label: 'About Me', link: '#', textFormat:"text-base text-white"},
  { key:3 ,value: 'services', label: 'Services', link: '#', textFormat:"text-base text-white"},
  { key:4 ,value: 'portfolio', label: 'Portfolio', link: '#', textFormat:"text-base text-white"},
  { key:5 ,value: 'contact', label: 'Contact', link: '#', textFormat:"text-lg text-[#ffb703] font-bold",},
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ToggleGroup type="single" className={`flex sticky fixed sm:relative
      sm:justify-end items-center w-full p-5 px-4 md-5 text-lg ${isMenuOpen ?'flex-col sm:flex-row bg-[#219ebc]' : ''}`}>
          <div className="sm:hidden flex absolute right-11 top-[10px]">
            <button onClick={openMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8 text-[#ffb703]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="space-x-4 hidden sm:flex montserrat">         
          {menuItems.map((item) => (
              <ToggleGroupItem value={item.value} key={item.key} className="hover:underline hover:underline-offset-4">
                  <a href={item.link} className={item.textFormat}>
                    <div>{item.label}</div>
                  </a>
              </ToggleGroupItem>           
          ))}
          </div>
          {isMenuOpen &&( 
            <div className="flex flex-col sm:hidden">         
          {menuItems.map((item) => (
            <ToggleGroupItem value={item.value} className="hover:underline hover:underline-offset-4">
                <a href={item.link} className={item.textFormat}>
                  <div>{item.label}</div>
                </a>
            </ToggleGroupItem>           
        ))}
        </div>
      )}
      </ToggleGroup>
    </>
  )
}

export default Navbar;