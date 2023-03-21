import * as React from "react";
import "./styles.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  const experienceObj = [
    {
      date: "March 2022-Jan 2023",
      companyName: "Sworks.io",
      position: "Software Engineer",
      location: "Pune,MH",
      workDetails: [
        "Responsible for developing web-based applications based on client requirements using React.js using Typescript.",
        "worked on the backend for the dashboard of the product sRide using Node.js (Express.js) developed REST API for admin dashboard for various clients by using specific database configurations using Node.js",
        "worked on an E-commerce wine web application written API and did integration on web site Also, did deployment of the backend server to the AWS EC2 instance",
        "worked on a storybook for creating various react components and doing CI/CD and publishing the package of that particular component using GIT for the reusability of components in future projects",
      ],
    },
    {
      date: "Dec 2020 - March 2022",
      companyName: "Bynry Technology",
      position: "Associate Trainee",
      location: "Pune,MH",
      workDetails: [
        "Responsible for developing smart360 field force appointment app using flutter and integrated API.",
        "Successfully completed field force marketing module, consumer  survey, location survey, and campaign UI",
      ],
    },
  ];
  return (
    <div id="experience">
      <h2 className="xper-head">Experience</h2>
      <VerticalTimeline>
        {experienceObj.map((data) => {
          return (
            <>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgba(184, 178, 178, 0.11)",
                  color: "#fff",
                }}
                className="vertical-timeline-element--work"
                date={data.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
                // icon={<WorkIcon />}
              >
                <h3 className="timeline-head">{data.companyName}</h3>
                <h3 className="vertical-timeline-element-title">
                  {" "}
                  {data.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle ">
                  {data.location}
                </h4>
                {data.workDetails.map((data) => {
                  return (
                    <ul className="Timeline-list">
                      <li>{data}</li>
                    </ul>
                  );
                })}
              </VerticalTimelineElement>
            </>
          );
        })}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(184, 178, 178, 0.11)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 2022-Jan 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Sworks.io</h3>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Pune,MH.</h4>
          <ul className="timeline-list">
            <li>
              Responsible for developing web-based applications based on client
              requirements using React.js using Typescript.
            </li>
            <li>
              worked on the backend for the dashboard of the product sRide using
              Node.js (Express.js) developed REST API for admin dashboard for
              various clients by using specific database configurations using
              Node.js
            </li>
            <li>
              worked on an E-commerce wine web application written API and did
              integration on web site Also, did deployment of the backend server
              to the AWS EC2 instance
            </li>
            <li>
              worked on a storybook for creating various react components and
              doing CI/CD and publishing the package of that particular
              component using GIT for the reusability of components in future
              projects
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(184, 178, 178, 0.11)",
            color: "#fff",
          }}
          className="vertical-timeline-element--work"
          date="Dec 2020 - March 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Byny Technology</h3>
          <h3 className="vertical-timeline-element-title">
            {" "}
            Associate Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Pune,MH.</h4>
          <ul className="Timeline-list">
            <li>
              Responsible for developing smart360 field force appointment app
              using flutter and integrated API.
            </li>
            <li>
              Successfully completed field force marketing module, consumer
              survey, location survey, and campaign UI
            </li>
          </ul>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
      <hr />
    </div>
  );
};

export default Timeline;
