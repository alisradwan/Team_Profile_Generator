import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurBoardOfDirectors() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="justify-content-center">
              <Image
                src={require("../assets/image/thrive2survive.jpg")}
                rounded
                width="200vw"
                height="200vw"
              />
            </Col>
            <Col className="pl-md-5">
              <h3 className="display-5 text-center text-lg-left text-light p-0-lg pt-4">
                Our Board Of Directors
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <Row>
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2253-1-683x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Charles Hanset – President </h3>
                <p>
                  Charles is the founder, and President of Thrive2Survive. He
                  started doing outreach when he got into recovery back in 2017.
                  His main goal was to provide resources to our unhoused
                  community. He would fill up the back of his little Honda
                  station wagon with clothes, food and up to date useful
                  resources to help people get off the streets and build a human
                  connection by using his own lived experiences. He has always
                  asked others to walk along with him so we can be more
                  effective in providing services. Charles genuinely believes
                  what we cannot do alone, we can do together. Currently, he is
                  the Outreach Supervisor for the Recovery Navigator Program for
                  Clark County where he and his team provide rapid SUD
                  (substance use disorder) crisis response for our community to
                  help prevent them from entering the justice system. He also is
                  a voting board member on the Southwest Washington Behavioral
                  Health Advisory Board since 2019. Charles has been on the
                  Clark County Opioid Task Force Steering Committee since it
                  started in 2019.
                </p>
                <h5>
                  {" "}
                  “A leader is a person who finds a way, makes the way, and
                  ultimately shows the way.”{" "}
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default OurBoardOfDirectors;
