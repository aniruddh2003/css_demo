import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import subroto from "../assets/subroto.jpeg";
import sajal from "../assets/Sajal.jpg";
import parag from "../assets/parag.jpg";
import animesh from "../assets/Animesh_photo.jpg";

const Advisor = () => {
  return (
    <div className="" >
      <h2 className="flex flex-col justify-center items-center md:text-6xl text-4xl text-white">
        Faculty Advisors
      </h2>{" "}
      <br />
      {/* <div className="flex justify-center items-center m-auto gap-10">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={subroto} className="h-[350px]" />
          <Card.Body>
            <Card.Title>Prof. SUBROTO NANDI</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>HOD and Counselor</ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={sajal} className="h-[350px]" />
          <Card.Body>
            <Card.Title>Prof. SAJAL MUKHOPADHYAY</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Faculty Advisor</ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={parag} className="h-[350px]" />
          <Card.Body>
            <Card.Title>Prof. PARAG KUMAR GUATHAKURTA</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Faculty Advisor</ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={animesh} className="h-[350px]" />
          <Card.Body>
            <Card.Title>Prof. ANIMESH DATTA</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Faculty Advisor</ListGroup.Item>
          </ListGroup>
        </Card>
      </div> */}
      <div class="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
        <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
          <img
            class="h-56 lg:h-80 w-full object-cover"
            src={subroto}
            alt="Subroto"
          />
          <div class="p-3">
            <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
              Prof. SUBROTO NANDI
            </h3>
            <span class="text-sm text-primary">HOD & Coordinator</span>
            <p class="paragraph-normal text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              nihil totam, corrupti autem repellat necessitatibus est
              reprehenderit accusantium ipsa facere.
            </p>
            <a
              class="mt-3 block"
              href="https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/subrata-nandi"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
          <img
            class="h-56 lg:h-80 w-full object-cover"
            src={sajal}
            alt="Sajal"
          />
          <div class="p-3">
            <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
              Prof. SAJAL MUKHOPADHYAY
            </h3>
            <span class="text-sm text-primary">Faculty Advisor</span>
            <p class="paragraph-normal text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              aspernatur repellendus quod recusandae nemo commodi incidunt id,
              accusantium facilis voluptates?
            </p>
            <a
              class="mt-3 block"
              href="https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/sajal-mukhopadhyay"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
          <img
            class="h-56 lg:h-80 w-full object-cover"
            src={parag}
            alt="Parag"
          />
          <div class="p-3">
            <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
              Prof. PARAG KUMAR GUATHAKURTA
            </h3>
            <span class="text-sm text-primary">Faculty Advisor</span>
            <p class="paragraph-normal text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repudiandae laudantium alias ipsa rerum illum dolores cupiditate
              beatae consequatur aspernatur?
            </p>
            <a
              class="mt-3 block"
              href="https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/parag-kumar-guhathakurta"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
          <img
            class="h-56 lg:h-80 w-full object-cover"
            src={animesh}
            alt="Animesh"
          />
          <div class="p-3">
            <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
              Prof. ANIMESH DATTA
            </h3>
            <span class="text-sm text-primary">Faculty Advisor</span>
            <p class="paragraph-normal text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              quos quidem debitis minima vel aliquid adipisci at aperiam?
              Dolore, neque?
            </p>
            <a
              class="mt-3 block"
              href="https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/animesh-dutta"
            >
              Read More &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
