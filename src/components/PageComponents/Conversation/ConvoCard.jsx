import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ConvoCardForm1 from "./ConvoCardForm1";
import footerStyles from '../../footer.module.css'

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'

const ConvoCard = (props) => {
  return (
    <section >
      <Container >
        <Row>
          <Col>
                <div className="outerConvo">
                <ConvoCardForm1 />
                </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
                  <a href="https://facebook.com"><FaFacebook /></a> 
                  <a href="https://instagram.com"><FaInstagram /></a>
                  <a href="https://twitter.com"><FaTwitter /></a>
                  <a href="https://linkedin.com"><FaLinkedin /></a>
              </li>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConvoCard;
