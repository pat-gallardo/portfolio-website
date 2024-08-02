import { HoverEffect } from "./ui/card-hover-effect";
import Services1 from "./ui/services-1"
import Services2 from "./ui/services-2"
import Services3 from "./ui/services-3"

const Services = () => {
    const servicesList = [
        {
        title: "AI Integration & Machine Learning",
        description:
          "Making AI's that can help your business strive",
        image: <Services1 />
      },
      {
        title: "Website & Application Development",
        description:
          "Making website that is user-friendly and croos platform",
        image: <Services2 />
        },
      {
        title: "Server & Database Management",
        description:
          "Having server or database issues? Let me know what it is",
        image: <Services3 />
      }]

    return (
        <>
         <div className="max-w-5xl mx-auto px-8">
            <HoverEffect className="" items={servicesList} />
        </div>
        </>
    )
}

export default Services