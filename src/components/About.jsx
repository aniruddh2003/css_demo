import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col m-auto justify-center w-4/5 md:text-justify text-justify leading-tight"
    >
      <h2 className="flex flex-col justify-center items-center md:text-6xl text-4xl mt-12 mb-12">
        About Us
      </h2>
      <p className="md:text-4xl text-2xl pb-12 leading-[2rem] lg:leading-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, amet
        voluptatum eligendi, ducimus ullam magnam nobis asperiores debitis,
        nulla mollitia doloribus odit obcaecati adipisci alias culpa. Rerum
        tenetur ipsam consequuntur.{" "}
      </p>
      <p className="md:text-4xl text-2xl pb-6 leading-[2rem] lg:leading-10">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex
        quis commodi accusamus aliquid nesciunt blanditiis ab fugiat quo nisi?
        Aperiam, fugit distinctio. Ea non, excepturi cumque possimus libero
        repellendus quo optio magnam incidunt cupiditate officiis in? Quia
        consequatur ipsa at, nulla sed eum saepe!{" "}
      </p>
      <p className="md:text-4xl text-2xl mb-12 pb-6 leading-[2rem]">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ratione.
      </p>
    </div>
  );
};

export default About;
