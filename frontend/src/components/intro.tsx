const Intro = () => {
    return (
        <>
        <div className="flex flex-row">
            <div className="pl-32 pt-32 w-[50%]">
                <div className="text-white text-[56px] font-bold arimo mb-[-1.5rem]">Hi, I'm</div>
                <div className="text-[#ffb703] text-[56px] font-bold montserrat w-[365px] drop-shadow-[-2px_4px_#a85b03]">Juan Patrick Gallardo</div>
                <div className="text-white text-[28px] font-bold arimo">Professional Software Developer</div>
            </div>
            <div>
                <img src={require('../assets/front-photo.png')} className="rounded-full"></img>
            </div>
        </div>
        </>
    )
}

export default Intro;