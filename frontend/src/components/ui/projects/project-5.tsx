const Project5 = () => {
    const SkeletonOne = () => {
        return (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Widget Interface
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            This shows the widget's features like contact Us and the widget can answer all kinds of questions within its data.
            </p>
          </div>
        );
      };
      
    const cards = [
        {
          id: 1,
          content: <SkeletonOne />,
          className: "md:col-span-4",
          thumbnail:
          require('../../../assets/images/ai-1.png'),
        }
      ];
    return cards
};

export default Project5;