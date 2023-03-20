import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";
import Content from "./Content";
import img3 from "../assets/img3.png";
import css from "../assets/css.jpg";
import Workicon from "./Workicon";

function Timeline1(props) {
  const timeline = [
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 1",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 2",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 3",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 4",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 5",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
    [
      "15-09-2023 to 18-09-2023",
      css,
      "Event 6",
      img3,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur eum voluptas accusamus rerum consequatur asperiores eligendi dolores provident corrupti ratione beatae nesciunt obcaecati, molestiae iste inventore harum deserunt.",
    ],
  ];
  return (
    <>
      <div className="timeline object-cover" id="events">
        <h2 className="flex flex-col justify-center items-center md:text-6xl text-4xl ">
          Events Conducted
        </h2>{" "}
        <br />
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "10px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={css} />}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          ></VerticalTimelineElement>
          {timeline.map((event) => (
            <VerticalTimelineElement
              key={event}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#000",
                color: "#fff",
                position: "relative",
                paddingBlockStart: "4em",
                fontSize: "20px",
              }}
              date={event[0]}
              contentArrowStyle={{ borderRight: "10px solid  rgb(0 0 0)" }}
              icon={<Workicon img_src={event[1]} />}
              iconStyle={{
                boxShadow: "0 0 6px 4px black",
                background: "white",
                padding: "0.2em",
              }}
            >
              <Content
                name={event[2]}
                image={event[3]}
                alt={event[2]}
                about={event[4]}
              />
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "10px solid  rgb(0 0 0)" }}
            icon={<Workicon img_src={css}/>}
            iconStyle={{
              boxShadow: "0 0 6px 4px black",
              background: "white",
              padding: "0.2em",
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline1;
