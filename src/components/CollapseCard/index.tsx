import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { CollapseCardProps } from "./types";

const CollapseCard: React.FC<CollapseCardProps> = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="border-2 border-black rounded-0">
      <Card.Body className="bg-white">
        <Card.Title className="d-flex justify-content-between align-items-center ">
          <strong>{title}</strong>
          <Button
            onClick={toggleOpen}
            aria-expanded={isOpen}
            className="bg-white text-black border-0"
          >
            <strong>{isOpen ? "-" : "+"}</strong>
          </Button>
        </Card.Title>
        {isOpen && <Card.Text>{body}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default CollapseCard;
