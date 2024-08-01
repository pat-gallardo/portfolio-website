import Skills from "./skills";
const educationItems = [
    {   label: 'SCIENCE & TECHNOLOGY ENGINEERING MATHEMATICS', 
        date: '2018 - 2019',
        school: 'Del Pilar Academy', 
        city: 'Imus City, Cavite'},
    {   label: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE', 
        date: '2020 - 2023',
        school: 'Technological University of the Philippines', 
        city: 'Manila City, Cavite'},
  ];

const profesionalItems = [
    {   label: 'BACKEND API DEVELOPMENT INTERN', 
        date: '2023 - 2023',
        company: '4Gives', 
        description: {
            1: 'Developed and tested API services that enhance the operations and features being developed',
            2: 'Developed testing parameters and automatic API testing using API testing applications for seamless coding'
        },
    },
    {   label: 'AI SOFTWARE DEVELOPER ASSOCIATE', 
        date: '2023 - 2024',
        company: 'Journey Better Business Group Inc.', 
        description: {
            1: 'Developed software solutions to automate customer operatiosn and enhance services',
            2: 'Developed and enhanced web-based AI software platforms',
            3: 'Enhanced existing code developed and add useful features that greatly improves the quality of software',
            4: 'Debugged existing AI software programs to ensure seamless operation',
            5: 'Gathered and filtered production-based data used in creating diagnostic, data reviews and data presentatiosn',
            6: 'Developed data filtering queries that ensures proper gathering of data.'
        },
    }
  ];

const Resume = () => {
    return (
        <>
        <div className="flex flex-col sm:flex-row text-left pt-10 ml-5 ">
            <div className="w-full sm:w-1/2 flex flex-col justify-center pb-[2rem] sm:pb-0">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Education</div>
                    {educationItems.map((item, index) => (
                        <div key={index} className="w-full text-white break-words">
                            <div className="text-lg">{item.label}</div>
                            <div className="leading-loose">{item.date}</div>
                            <div className="italic">{item.school}</div>
                            <div>{item.city}</div>
                            <br></br>
                        </div>
                    ))}
            <Skills />
            </div>
            <div className="w-full sm:w-1/2 items-center flex flex-col">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Experience</div>
                {profesionalItems.map((item, index) => (
                    <div key={index} className="w-full text-white break-words">
                        <div className="text-lg">{item.label}</div>
                        <div className="leading-loose">{item.date}</div>
                        <div className="italic">{item.company}</div>
                        <ul className="list-disc list-inside text-left space-y-3 mt-2">
                        {Object.values(item.description).map((desc, index) => (
                            <li key={index} className="text-base pl-1 leading-tight">
                                {desc}
                            </li>
                        ))}
                    </ul>
                    <br></br>
                    </div>
          ))}
            </div> 
        </div>
        <div>
            </div>
        </>
    )
}

export default Resume;