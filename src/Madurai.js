import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MaduraiImg from "./img/Madurai.jpeg";
import Madurai1 from "./img/madurai1..jpeg";
import Madurai2 from "./img/madurai2.jpeg";
import Madurai3 from "./img/madurai3..jpeg";
import Madurai4 from "./img/madurai4..jpeg";

function Madurai() {
  return (
    <Container className="mt-5" id="madurai">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>07.Madurai</h3>
          <img src={MaduraiImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">"The Lotus City"</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is
              one of the oldest continuously inhabited cities of India. Ruled by
              Pandya kings for the longest time in its history, it is called as
              the 'Lotus City' as it was planned and built in the shape of a
              lotus. Madurai is known for Meenakshi Amman Temple, dedicated to
              the goddess Meenakshi with a sanctum for her consort,
              Sundareshwarar.
            </p>
            <p className="text-indent text-secondary">
              There are many other ancient temples in Madurai, including
              Thiruparankundram. It is one of the important old temples
              dedicated to Lord Muruga(Karthikeya) and is located on a hillock
              approximately 8 km from the city. Having trade ties with ancient
              Rome, the place holds a great cultural heritage. With bustling
              bazaars and fantastic street food, Madurai has heritage walks
              conducted throughout the day.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Madurai</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Madurai1} />
              <Card.Body>
                <Card.Title>Vaigai Dam</Card.Title>
                <Card.Text>
                  Vaigai Dam, a magnificent human-made structure, is constructed
                  over River Vaigai near Andipatti, Theni...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Madurai2} />
              <Card.Body>
                <Card.Title>Meghamalai</Card.Title>
                <Card.Text>
                  Often known as the "High Wavy Mountains", Meghamalai is a
                  petit yet beautiful place located in the...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Madurai3} />
              <Card.Body>
                <Card.Title>Samanar Hills</Card.Title>
                <Card.Text>
                  Located in Keelakuyilkudi village near Madurai, Samanar Hills
                  or Samanar Malai is a beautiful hill rock...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Madurai4} />
              <Card.Body>
                <Card.Title> Thirumalai Nayakar</Card.Title>
                <Card.Text>
                  Thirumalai Nayakar Palace was erected in 1636 AD in the city
                  of Madurai, by King Thirumalai Nayak...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Madurai;