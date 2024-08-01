const Skills = () => {
    const skillsItems = [
        'Programming (Windows, Mac)',
        'Relational and Non-Relational Databases',
        'Cross-platform Software Testing/ Unit Testing',
        'Application Deployment',
        'Git Versioning',
        'Machine Learning',
        'Artificial Intelligence',
    ];

    const expertiseItems = [
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
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Skills</div>
                    {skillsItems.length > 0 ? (
                        <ul className="list-disc list-inside text-left space-y-2">
                            {skillsItems.map((skill, index) => (
                                <li key={index} className="text-white text-lg break-words">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white">No skills available.</p>
                    )}
            </div>
            <br></br>
            <div className="flex flex-col justify-center">
                <div className="w-full text-[#8ecae6] font-bold text-[40px] montserrat ">Expertise</div>
                {expertiseItems.length > 0 ? (
                    <ul className="list-disc list-inside text-left space-y-2">
                        {expertiseItems.map((skill, index) => (
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