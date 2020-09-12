import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import ConvoCard from "../Conversation/ConvoCard";

const HomeCard2 = props => {
  return (
    <section>
        <div className="video-bg" /*style={{display: 'none'}}*/>
          <video autoPlay muted loop>
            <source
              src={props.videoBg}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="wrapper">
          <Container fluid style={{marginTop: '5%'}}>
            <Row>
              <Col>
                <div className="justify-center text-center align-center" style={{marginTop: '15%'}}>
                <div
                  className=" logo "
                  id="logo-wrapper"
                  style={{
                    backgroundImage:
                      `url(${props.logo})`,
                  }}
                />
                <h1 className=" title " id="title">
                  Namaste Yoga Studio
                </h1>
                <h3 className=" subtitle " id="subtitle">
                  Relax your mind body and soul
                </h3>
                <div id="show-social" className=" social " />
                </div>
              </Col>
              <Col>
                  <ConvoCard />
              </Col>
            </Row>
          </Container>
        </div>
    </section>
  );
};

export default HomeCard2;
