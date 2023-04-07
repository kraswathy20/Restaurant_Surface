import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
function Reviews({ review }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="success"
      >
        Reviews
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                review.map(item=>(
                    <Card body style={{ width: "400px" }}>
                        <h6>{item.name} : {item.date}</h6>
                        <p>Rating : {item.rating}</p>
                        <p>Comments : {item.comments}</p>
                    </Card>
                ))
                
                
                }
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Reviews;
