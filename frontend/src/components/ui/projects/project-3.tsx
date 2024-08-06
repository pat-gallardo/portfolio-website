const Project3 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Home Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This is the home tab of the web application where we can see the contents of the 
            website also other tabs that the application provides like tracker, information about the vaccines and more.
            </p>
          </div>
        );
      };
       
      const SkeletonTwo = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Features Section
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">      
            This displays the features that the web application provides, 
            we can view the list of vaccines, the healthworkers free that 
            day or the following days and much more.
            </p>
          </div>
        );
      };
      const SkeletonThree = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Administrator Side
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This shows the administrator side of the web application where the head of 
            the healthworkers in the Barangay has access.
            </p>
          </div>
        );
      };
      const SkeletonFour = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Personal Information and Vaccine Information
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              This is the Personal Information and Vaccine Information form, in which 
              we can fill up to let our Barangay know if we already have been vaccinated.
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
          require('../../../assets/images/softeng2-1.png'),
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/softeng2-2.png'),
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/softeng2-3.png'),
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
          require('../../../assets/images/softeng2-4.png'),
        },
      ];
    return cards
}

export default Project3;