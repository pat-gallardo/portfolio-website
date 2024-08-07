const Project4 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Student Home Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This shows the Student side of the application, which we can browse along
            </p>
          </div>
        );
      };
       
      const SkeletonTwo = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Assessment Test 
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">      
            This is the assessment test part of the application, this assessments consists of 10 questions
            that can be answered by typing your answer.
            </p>
          </div>
        );
      };
      const SkeletonThree = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Data and Results tab
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This is a Teachers side feature, data and results tab which we can see are the 
            information of the students and their scores to the exams along with a graph represented.
            </p>
          </div>
        );
      };
      const SkeletonFour = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Test/Exams Creation tab
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              This is a promising feature of the application in which the Teachers can also create their
              own questions with solutions, that can be used in the assessment or exams.
            </p>
          </div>
        );
      };
      
    const cards = [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-2",
          thumbnail:
          require('../../../assets/images/thesis-1.png'),
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/thesis-2.jpg'),
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/thesis-3.jpg'),
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
          require('../../../assets/images/thesis-4.jpg'),
        },
      ];
    return cards
}

export default Project4;