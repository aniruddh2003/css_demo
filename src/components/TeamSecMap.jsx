import React from "react";
import Unknown from "../assets/unknown.jpg";

const TeamSecMap = () => {
  const fourth = [
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
  ];
  const third = [
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
  ];
  const second = [
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
    [Unknown, "Unkown Person", "Post", "Description"],
  ];
  const teams = [
    ["Fouth Year", fourth],
    ["Third Year", third],
    ["Second Year", second],
  ];
  return (
    <div>
      <div class="container xl:w-full w-11/12 mx-auto pt-16 overflow-y-hidden">
        <div class="w-full">
          <p class="text-gray-600 dark:text-gray-200 text-lg font-normal pb-3 sm:text-left text-center">
            BUILDING TEAM
          </p>
        </div>
        {teams.map((team) => (
          <div key={team}>
            <div className="w-full">
              <h1 class="xl:text-4xl lg:text-4xl text-3xl sm:text-left text-center text-gray-800 dark:text-white  font-extrabold sm:w-4/6 w-5/6 mx-auto sm:mx-0">
                {team[0]}
              </h1>
            </div>
            <div class="xl:flex lg:flex md:flex sm:flex flex-wrap justify-between pt-20">
              {team[1].map((member) => (
                <div key={member} class="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 dark:border-gray-700 pb-6">
                  <div class="w-full rounded h-56">
                    <img
                      src={member[0]}
                      alt="Display picture of Unknown person"
                      role="img"
                      class="object-cover h-full w-full overflow-hidden rounded shadow"
                    />
                  </div>
                  <div class="flex w-full items-center justify-between pt-6 pb-1">
                    <p class="text-xl font-normal text-gray-800 dark:text-white ">
                      {member[1]}
                    </p>
                    <div class="flex justify-center">
                      <a
                        aria-label="Open github"
                        role="link"
                        href="javascript:void(0)"
                        class="mx-2"
                      >
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </a>
                      <a
                        aria-label="Open twitter"
                        role="link"
                        href="javascript:void(0)"
                        class="mx-2"
                      >
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg2.svg"
                          alt="twiter"
                        />
                      </a>
                      <a
                        aria-label="Open instagram"
                        role="link"
                        href="javascript:void(0)"
                        class="mx-2"
                      >
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/white-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </a>
                    </div>
                  </div>
                  <p class="text-base text-gray-600 dark:text-gray-200 pb-3">
                    {member[2]}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-200 leading-6 font-normal">
                    {member[3]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSecMap;
