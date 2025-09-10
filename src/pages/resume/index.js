import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Resume = () => {
  const img_url = `${process.env.PUBLIC_URL}/images/resume.png`;
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1ue0FXB357NoPheAc7wKExotCLzNWFlsq";
  };

  return (
    <HelmetProvider>
      <Container className="pb-5"> {/* extra bottom padding */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Resume</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col>
            <h1 className="display-4 mb-4 text-center">Resume</h1>
            <hr className="t_border my-4 mx-auto" style={{ width: "80px" }} />
          </Col>
        </Row>

        {/* Resume image centered */}
        <Row className="sec_sp">
          <Col className="d-flex justify-content-center">
            <img
              src={img_url}
              alt="Resume"
              className="img-fluid"
              style={{ maxWidth: "800px", border: "5px solid #ddd" }}
            />
          </Col>
        </Row>

        {/* Download button centered with spacing */}
        <Row className="sec_sp mt-5"> {/* gap between img & button */}
          <Col className="d-flex justify-content-center">
            <Button
              onClick={handleDownload}
              className="download-btn"
              size="lg"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "2px solid #000",
                padding: "12px 28px",
                fontSize: "1.1rem",
                fontWeight: "600",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#000";
              }}
            >
              <FaDownload className="me-2" />
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
