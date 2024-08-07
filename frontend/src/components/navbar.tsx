const menuItems = [
  { key:1 ,value: 'home', label: 'Home', link: '#', textFormat:"text-base text-white"},
  { key:2 ,value: 'about', label: 'About', link: '#', textFormat:"text-base text-white"},
  { key:3 ,value: 'services', label: 'Services', link: '#', textFormat:"text-base text-white"},
  { key:4 ,value: 'portfolio', label: 'Projects', link: '#', textFormat:"text-base text-white"},
  { key:5 ,value: 'contact', label: 'Contact', link: '#', textFormat:"text-base text-[#ffb703] font-bold",},
];

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#219ebc] fixed z-20">
        <div className="flex-none">
        </div>
        <div className="flex-1">
          </div>
          <div className="flex-none">
          <div className='transition-all duration-700 ease-in-out'>
            <div className="space-x-4 hidden sm:flex montserrat">         
            {menuItems.map((item, index) => (
              <a href={item.link} key={index} className={`${item.textFormat} 
              hover:underline hover:underline-offset-4`}>
                <div>{item.label}</div>
              </a>
            ))}
          </div>
          </div>
          <div className="drawer drawer-end sm:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-[#023047]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
              </label>
            </div>
            <div className="drawer-side z-20">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-[#219ebc] text-base-content min-h-full w-60 p-4">
                {/* Sidebar content here */}
                {menuItems.map((item, index) => (
              <li key={index} ><a href={item.link} className={`${item.textFormat}
              hover:underline hover:underline-offset-4`}>
                <div>{item.label}</div>
              </a>
              </li>
            ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;