const About = () => {
    const aboutMessage = "I am Patrick and I developed applications that improve and raise your business' income by leveraging advanced analytics, automation and user-firendly interfaces to streamline operations and enhance customer engagement."
    const aboutNextMessage = "I used AI and utilized machine learning in developing applciatiosn and I am also updated on latest developing practices like AGILE and SCRUM."
    return (
        <>
        <div className="flex mt-[5%] mb-[5%] flex-col sm:flex-row justify-between">
            <div className="sm:w-1/2 sm:self-center sm:pt-0 pt-[1rem] ml-5 pr-[2.5rem] sm:mr-5">
                <img className="saturate-150 opacity-50 sm:ml-0 sm:w-full" src={require('../assets/front-photo2.png')} alt="profile-photo"></img>
            </div>
            <div className="sm:w-1/2 flex flex-col sm:w-1/2 m-3 p-3 sm:ml-[10%] text-wrap">
                <div className="w-full text-white text-lg montserrat ">{aboutMessage}</div>
                <br></br>
                <div className="w-full text-white text-lg montserrat ">{aboutNextMessage}</div>
            </div> 
        </div>
        </>
    )
}


export default About;