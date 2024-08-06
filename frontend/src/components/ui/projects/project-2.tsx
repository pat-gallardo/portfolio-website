const Project2 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Home Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This is the home tab of the web application where the user need to sign-in to access the dashboard.
            </p>
          </div>
        );
      };
       
      const SkeletonTwo = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            User Account Creation
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">      
            This shows the page where you can create your own account to access the web-application.
            The account creation has CAPTCHA in it to provide security against users who spam accounts.
            </p>
          </div>
        );
      };
      const SkeletonThree = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Manage Account
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This shows your information and a setting to change password or delete your account.
            </p>
          </div>
        );
      };
      const SkeletonFour = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
              Update Account
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              You can change your username, email and password here.
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