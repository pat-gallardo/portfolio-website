const Project1 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Home Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This is the main dashboard of the application here we can see the network id, ip address hostname and its state.
            </p>
          </div>
        );
      };
       
      const SkeletonTwo = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Searching Process
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">      
           This shows the result after running the application for the first time.
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
            Here you can filter the results if you wanted to look for the specific ip address.
            </p>
          </div>
        );
      };
      const SkeletonFour = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Exported List of Networks
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              The application has an option if you want to export the list and saved on a notepad.
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
          require('../../../assets/images/networks-1.png'),
        },
        {
          id: 2,
          content: <SkeletonTwo />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/networks-2.jpg'),
        },
        {
          id: 3,
          content: <SkeletonThree />,
          className: "col-span-1",
          thumbnail:
          require('../../../assets/images/networks-3.jpg'),
        },
        {
          id: 4,
          content: <SkeletonFour />,
          className: "md:col-span-2",
          thumbnail:
          require('../../../assets/images/networks-4.jpg'),
        },
      ];
    return cards
}

export default Project1;