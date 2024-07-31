import { useState, useEffect } from "react";

interface LinebreakProps {
    setTitle: string;
  }


const Linebreak: React.FC<LinebreakProps> = ({ setTitle }) => { 
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    const updateHeight = () => {
        setViewportHeight(window.innerHeight);
      };

    useEffect(() => {
        // Add event listener to update height on resize
        window.addEventListener('resize', updateHeight);

        // Cleanup function to remove event listener
        return () => {
        window.removeEventListener('resize', updateHeight);
        };
    }, []);

    let dynamicPaddingTop = (viewportHeight / 5)

    return (
        <>
        <div className='flex flex-col justify-center ' style={{ paddingTop: `${dynamicPaddingTop}px` }}>
            <div className="bg-[#fb8500] text-transparent">.</div>
            <div className="w-full absolute text-center text-white text-[45px] font-bold montserrat drop-shadow-[-2px_4px_#a85b03]">{setTitle}</div>
            <div className="bg-[#219ebc] p-3 text-transparent">.</div>
            <div className="bg-[#8ecae6] text-transparent">.</div>
        </div>
        </>
    )
}

export default Linebreak;