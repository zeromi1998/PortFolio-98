import * as React from "react";
import "./styles.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
export default function TimelineBar() {
  return (
    <>
      <h2 className="skill-head">Work Experience</h2>
      <Timeline position="">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.white"
          >
            March 2022-Jan 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography className="typographyHeading" variant="h6" component="span">
              Sworks.io
            </Typography>
            <Typography className="typography" >Software Engineer</Typography>
            {/* <ul>
              <li>
                Responsible for developing web-based applications based on
                client requirements using React.js using Typescript.
              </li>
              <li>
                worked on the backend for the dashboard of the product sRide
                using Node.js (Express.js) developed REST API for admin
                dashboard for various clients by using specific database
                configurations using Node.js
              </li>

              <li>
                worked on an E-commerce wine web application written API and did
                integration on web site Also, did deployment of the backend
                server to the AWS EC2 instance
              </li>
              <li>
                worked on a storybook for creating various react components and
                doing CI/CD and publishing the package of that particular
                component using GIT for the reusability of components in future
                projects
              </li>
            </ul> */}
            <Typography className="typography" >Technology:  React.js,Node.js,Express.js,Nest.js,Git</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            align="right"
            color="text.white"
          >
            Dec 2020 - March 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography className="typographyHeading" variant="h6" component="span">
              Byny Technology
            </Typography>
            <Typography  className="typography" variant="ul" component="li">
              Associate Trainee
            </Typography>
            {/* <ul>
              <li>
                Responsible for developing smart360 field force appointment app
                using flutter and integrated API.
              </li>
              <li>
                Successfully completed field force marketing module, consumer
                survey, location survey, and campaign UI
              </li>
            </ul> */}
            <Typography className="typography"  component="p">Technology: Flutter , Dart</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <hr/>
    </>
  );
}
