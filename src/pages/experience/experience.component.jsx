import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/experience.jpg";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Card>
            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Developer Students Club</Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  <strong className="body-title-style ">Full Stack Developer</strong>
                  <br />
                  <strong>Technology:</strong> React JS, Node JS, Express JS, Mongo DB
                    <br />
                  <strong>Duration:</strong> September 2020 - 2021
                    <br />
                  <strong> Description </strong>
                  <li><strong>Intro</strong> Developer Student Club powered by Google Developers is a platform to help solve the challenges .</li>


                  <li>DSC aims to provide students with the resources, opportunities and, experience necessary to be industry-ready</li>

                  <li><strong>Organised</strong> offline events throughout my working span.
                      to the business requirements.</li>
                  {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}




                </Card.Text>
              </div>
            </Card.Body>
          </Card>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
