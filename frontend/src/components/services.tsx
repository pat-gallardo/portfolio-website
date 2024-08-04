"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Services1 from "./ui/services-1"
import Services2 from "./ui/services-2"
import Services3 from "./ui/services-3"

const Services = () => {

      const testimonials = [
        {
          quote:
            "Making AI's that can help your business strive",
          name: "Juan Patrick Gallardo",
          title: "AI Integration & Machine Learning",
          image: <Services1 />
        },
        {
          quote:
            "Making website that is user-friendly and cross platform",
          name: "Juan Patrick Gallardo",
          title: "Website & Application Development",
          image: <Services2 />
        },
        {
          quote:
            "Having server or database issues? Let me know what it is",
          name: "Juan Patrick Gallardo",
          title: "Server & Database Management",
          image: <Services3 />
        }
      ];

    return (
        <>
        <div className="px-8 py-12 mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        </>
    )
}

export default Services