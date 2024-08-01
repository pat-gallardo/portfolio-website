const Skills = () => {
    const skills = [
        'Programming (Windows, Mac)',
        'Relational and Non-Relational Databases',
        'Cross-platform Software Testing/ Unit Testing',
        'Application Deployment',
        'Git Versioning',
        'Machine Learning',
        'Artificial Intelligence',
    ];

    const expertise = [
        'Python (Flask, Qt, Jupyter)',
        'HTML',
        'CSS (Tailwind, Bootstrap)',
        'JavaScript (TypeScript, React)',
        'PHP (CodeIgniter)',
        'SQL (Postgres)',
        'NoSQL (Firebase, MongoDB)',
    ];

    return (
        <>
        <div className="flex flex-col sm:flex-row text-center items-center justify-center pt-10">
            <div className="w-full sm:w-1/2 items-center flex flex-col justify-center pb-[2rem] sm:pb-0">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Skills</div>
                    {skills.length > 0 ? (
                        <ul className="list-disc list-inside text-left space-y-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="text-white text-lg break-words">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white">No skills available.</p>
                    )}
            </div>
            <div className="w-full sm:w-1/2 items-center flex flex-col justify-center">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Expertise</div>
                {expertise.length > 0 ? (
                    <ul className="list-disc list-inside text-left space-y-2">
                        {expertise.map((skill, index) => (
                            <li key={index} className="text-white text-lg">
                                {skill}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-white">No expertise available.</p>
                )}
            </div> 
        </div>
        </>
    )
}

export default Skills;