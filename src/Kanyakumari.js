import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import KaniyakumariImg from "./img/Kanyakumari.jpeg";
import Kaniya1 from "./img/kanyakumari1 (1).jpeg";
import Kaniya2 from "./img/kanyakumari1(2).jpeg";
import Kaniya3 from "./img/kanyakumari1(3).jpeg";
import Kaniya4 from "./img/kanyakumari1(4).jpeg";

function Kanyakumari() {
  return (
    <Container className="mt-5" id="kaniyakumari">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>05.Kanyakumari</h3>
          <img src={KaniyakumariImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">"Cape Comorin or The Land's End"</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Kanyakumari Tourism Bordered by the three seas - Arabian, Indian
              and the Bay of Bengal, Kanyakumari is the southernmost tip of the
              Indian Peninsula. A small coastal town in the state of Tamil Nadu,
              Kanyakumari was earlier known as Cape Comorin.
            </p>
            <p className="text-indent text-secondary">
              Kanyakumari offers the marvellous confluence of the Bay of Bengal,
              the Arabian Sea and the Indian ocean meeting together at a point.
              But, this is not a miracle, the miracle lies in the beauty that
              the water of three seas does not mix, you can clearly distinguish
              between the turquoise blue, deep blue and sea green waters of the
              three seas. To enjoy the best view of sunset and sunrise, you can
              visit the Triveni Sangam point and the famous View tower. The town
              has a mountainous terrain with elevated patches of hills. coconut
              trees and lined with paddy fields.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Kanyakumari</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Kaniya1} />
              <Card.Body>
                <Card.Title>Kanyakumari Beach</Card.Title>
                <Card.Text>
                  Located in the southernmost part of India, Kanyakumari beach
                  with its beautiful hue- changing beaches...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Kaniya2} />
              <Card.Body>
                <Card.Title>Vivekananda Memorial</Card.Title>
                <Card.Text>
                  The magnificent Vivekananda Rock Memorial is located on a
                  small island off Kanyakumari. It has the picturesque...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Kaniya3} />
              <Card.Body>
                <Card.Title>Thiruvalluvar Status</Card.Title>
                <Card.Text>
                  Dedicated to the accomplished philosopher and poet
                  Thiruvalluvar, this beautiful statue finds itself...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Kaniya4} />
              <Card.Body>
                <Card.Title> Thirparappu Falls</Card.Title>
                <Card.Text>
                  Located at a distance of about 55 kilometers from waters of
                  the Thirparappu... Kanyakumari, the cascading
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

export default Kanyakumari;