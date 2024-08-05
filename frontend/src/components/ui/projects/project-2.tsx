const Project2 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Home Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A desktop application developed using Java and Java UI stores information on a SQLite database. 
            It tracks all connected devices on an active internet connection and can be used to detect if a suspected person has access to your local internet connection.
            </p>
          </div>
        );
      };
       
      const SkeletonTwo = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Tracking Network Results
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">      
            A website application built using PHP with the CodeIgniter framework stores data in a PHPMyAdmin database. 
            It tracks all documents requested by the client to its users with ease and notifies the users when the documents have been received by the client.
            </p>
          </div>
        );
      };
      const SkeletonThree = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Filtered IP Address
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A website application built using PHP with the CodeIgniter framework stores data in a PHPMyAdmin database. It stores all information about COVID-19 vaccine facilities in the barangay, including medical practitioners, volunteers, and currently available vaccines.
            </p>
          </div>
        );
      };
      const SkeletonFour = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Downloaded List of Networks
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              A desktop application developed using Python with PyQt for GUI. Used Deep Learning for its AI and stores the data on Google Firebase a cloud-based database.
              It displays a list of subjects, lessons, topics and exams about Precalculus. It also let's the customer use their own study guides and lessons. 
              It records the users scores and grades at the end of each assessment exams.
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
          require('../../../assets/images/softeng1-1.png'),
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/softeng1-2.png'),
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/softeng1-3.png'),
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
          require('../../../assets/images/softeng1-4.png'),
        },
      ];
    return cards
}

export default Project2;