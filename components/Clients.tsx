import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data/idx";

const Clients = () => {
  return (
    // outer parent div
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Shoutouts from <span className="text-purple"> Awesome Clients</span>
      </h1>

      {/* Testimonoals div */}
      <div className="flex flex-col items-center max-lg:mt-10 ">
        {/* Testomonial card  */}

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
