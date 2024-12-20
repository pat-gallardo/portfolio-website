const About = () => {
    const aboutMessage = "I am Patrick and I developed applications that improve and raise your business' income by leveraging advanced analytics, automation and user-firendly interfaces to streamline operations and enhance customer engagement."
    const aboutNextMessage = "I used AI and utilized machine learning in developing applciatiosn and I am also updated on latest developing practices like AGILE and SCRUM."
    return (
        <>
        <div className="flex mt-[5%] mb-[5%] flex-col sm:flex-row justify-between 2xl:justify-center 2xl:gap-4">
            <div className="sm:w-1/2 sm:pt-0 pt-[1rem] sm:pl-[2rem] 2xl:pl-[20rem]">
                <img className="h-[22rem] pt-[2rem] pl-0 sm:pl-[2.5rem] opacity-50 sm:opacity-75 relative aspect-[1] 
                object-contain mt-10 sm:mt-5 scale-[2.3] 
                block ml-auto mr-auto" src={require('../assets/images/front-photo2.png')} alt="profile-photo"></img>
            </div>
            <div className="sm:w-1/2 flex flex-col m-3 p-3 sm:ml-[10%] z-10 text-wrap 2xl:ml-0 2xl:pr-[30rem]">
                <div className="w-full text-white text-lg montserrat ">{aboutMessage}</div>
                <br></br>
                <div className="w-full text-white text-lg montserrat ">{aboutNextMessage}</div>
            </div> 
        </div>
        </>
    )
}


export default About;