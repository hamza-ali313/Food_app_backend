import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DishCard from './DishCard.js';

const DishList = ({ data, deleteDish, handleExpandClick, expanded }) => {
  return (
    <Row className="chefdishes-sec">
      {data.map((item, i) => (
        <Col key={i} lg={4} className="mb-5">
          <DishCard
            item={item}
            deleteDish={deleteDish}
            handleExpandClick={handleExpandClick}
            expanded={expanded}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DishList;
