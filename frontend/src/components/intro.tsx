const Intro = () => {
    return (
        <>
        <div className="flex flex-col-reverse sm:flex-row">
            <div className="pl-20 pb-8 w-[100%] sm:pt-32 sm:pl-32 sm:w-[60%]">
                <div className="text-white text-[56px] font-bold arimo mb-[-1.5rem]">Hi, I'm</div>
                <div className="text-[#ffb703] text-[56px] font-bold montserrat w-[365px] drop-shadow-[-2px_4px_#a85b03]">Juan Patrick Gallardo</div>
                <div className="text-white text-[28px] font-bold arimo">Professional Software Developer</div>
            </div> 
            <div className="sm:self-center sm:pt-0 pt-20">
                <img className="rounded-full ml-28 w-[50%] sm:ml-0 sm:w-[100%]" src={require('../assets/front-photo.png')} alt="profile-photo"></img>
            </div>
        </div>
        </>
    )
}

export default Intro;