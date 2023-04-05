import {React,useState,useEffect} from 'react'

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
    <div></div>
  )
}

export default Restaurant