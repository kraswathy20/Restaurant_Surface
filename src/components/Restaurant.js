import {React,useState,useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restcsscard.css'
function Restaurant() {
    // state to hold the data from the api
    var [restaurantList,setRestaurant]=useState([])
    // function to call Api
    const fetchData=async()=>{
     const result = await fetch('/restaurants.json')
     result.json().then(
      data=>{
        setRestaurant(data.restaurants)
      }
     )
    }

    console.log(restaurantList);

    useEffect(()=>{
      fetchData()
    },[])
  return (
    <Row>
      {
        restaurantList.map(item=>(
          <Col className='p-5' lg={4} md={6} id='cal'>
              <Restcard restdata={item}></Restcard>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurant