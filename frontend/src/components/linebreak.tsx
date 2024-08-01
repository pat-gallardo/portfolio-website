interface LinebreakProps {
    setTitle: string;
  }


const Linebreak: React.FC<LinebreakProps> = ({ setTitle }) => { 
    return (
        <>
        <div className='flex flex-col justify-center pt-20'>
            <div className="bg-[#fb8500] text-transparent">.</div>
            <div className="w-full absolute text-center text-white text-[60px] font-bold drop-shadow-[-2px_4px_#a85b03]">{setTitle}</div>
            <div className="bg-[#219ebc] p-3 text-transparent">.</div>
            <div className="bg-[#8ecae6] text-transparent">.</div>
        </div>
        </>
    )
}

export default Linebreak;