const About = () => {
    const aboutMessage = "I am Patrick and I developed applications that improve and raise your business' income by leveraging advanced analytics, automation and user-firendly interfaces to streamline operations and enhance customer engagement."
    const aboutNextMessage = "I used AI and utilized machine learning in developing applciatiosn and I am also updated on latest developing practices like AGILE and SCRUM."
    return (
        <>
        <div className="flex mt-[5%] mb-[5%] flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-1/2  sm:self-center sm:pt-0 pt-20 ml-20 mr-20 sm:ml-5 sm:mr-5">
                <img className="saturate-150 opacity-50 sm:ml-0 sm:w-full" src={require('../assets/front-photo2.png')} alt="profile-photo"></img>
            </div>
            <div className="flex flex-col gap-[10%] w-full sm:w-1/2 ml-[10%]">
                <div className="text-white text-[28px] montserrat ">{aboutMessage}</div>
                <div className="text-white text-[28px] montserrat ">{aboutNextMessage}</div>
            </div> 
        </div>
        <div className="bg-white p-[0.5px] text-sm text-transparent">.</div>
        </>
    )
}


export default About;