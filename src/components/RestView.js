import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup'
import './Restcsscard.css'
import Reviews from "./Reviews";
import OperatingTime from "./OperatingTime";

function RestView() {
  // a state to hold data from the api
  var [Allrestaurants, setRestaurants] = useState([]);

  // a function to call api
  const fetchRest = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => {
      setRestaurants(data.restaurants);
    });
  };

  const params = useParams();
  // console.log(params.id);
  // console.log(Allrestaurants);

  const restaurant = Allrestaurants.find((item) => item.id == params.id);
  console.log(restaurant);
  
  useEffect(() => {
    fetchRest();
  }, []);

  return (
    <>
      {restaurant ? (
        <Row>
          <Col id='cal' lg={6} md={6} className="p-5 ms-5 test-center">
            <img
              className="rounded border"
              src={restaurant.photograph}
              style={{ height: "500px" }}
              alt=''
            ></img>
          </Col>
          <Col id='cal' className="mt-5 me-5">
            <ListGroup variant="flush">
              <ListGroup.Item><h1 className="text-success">{restaurant.name}</h1></ListGroup.Item>
              <ListGroup.Item><p>Neighbourhood <strong className="fs-5">{restaurant.neighborhood}</strong></p></ListGroup.Item>
              <ListGroup.Item><p>Cuisine  <strong className="fs-5">{restaurant.cuisine_type}</strong></p></ListGroup.Item>
              <ListGroup.Item><p>Address <strong className="fs-5">{restaurant.address}</strong></p></ListGroup.Item>
              <ListGroup.Item>
                 <div className="ps-5 mt-3 " > <OperatingTime timedata={restaurant.operating_hours}/> </div>
                 <div className="ps-5 mt-3 ms-4 "><Reviews review={restaurant.reviews}/></div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
}

export default RestView;
