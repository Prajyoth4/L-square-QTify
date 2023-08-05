import { AccordionDetails, AccordionSummary, Accordion } from "@mui/material";
import React from "react";
import ExpandIcon from "./ExpandIcon";
import "./Accordion.css";

const FaqAccordion = () => {
  return (
    <div className="faq-wrapper">
      <h1>FAQs</h1>
      <div className="accordion-wrapper">
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            style={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "10px",
              border: "1px solid white",
            }}
            expandIcon={<ExpandIcon />}
          >
            Is QTify free to use?
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
          >
            Yes! It is 100% free, and has 0% ads!
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            style={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "10px",
              border: "1px solid white",
            }}
            expandIcon={<ExpandIcon />}
          >
            Can I download and listen to songs offline?
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;
