import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Resume = () => {
  const img_url = `${process.env.PUBLIC_URL}/images/resume.jpg`
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=143ZCD6FQKXtLn6H42kBR1p6geZjsU6fQ";
  };
    return (
      <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col >
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
          {/* <iframe
              src="https://drive.google.com/file/d/1CMi7Uc-df-a7HSRV7LzP8mNIeQFmIB_U/preview"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe> */}
          <img 
              src= {img_url} alt="" />

            </Col>
            </Row>

            {/* <Row className="sec_sp">
                    
                      <Col>
                      <Link to="#" onClick={handleDownload} className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Download Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  
                      </Col>
                    </Row> */}
      </Container>
    </HelmetProvider>
  )
}
