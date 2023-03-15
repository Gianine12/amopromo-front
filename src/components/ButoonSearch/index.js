import axios from "axios"
import { useState, useEffect } from "react"

import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from './style'

export const ButoonSearch = ({exit, arrival, dateGoing, dateReturn, active,exitLat,exitLon, arrivaltLat,arrivaltLon, vallueSearch}) => {


  const setData = (value) => {
    vallueSearch(value)
  }
  
  const handlerClick = () => {

    const data = {
      departure_airport: exit,
      arrival_airport: arrival,
      departure_date: dateGoing,
      dateReturn: dateReturn,
      lat1:exitLat,
      long1:exitLon,
      lat2:arrivaltLat,
      long2:arrivaltLon,
    }

    axios({
      method: 'post',
      baseURL: 'http://127.0.0.1:8000/search_value/',
      data: data
    })
    .then((response) => {
      setData(response.data)
    })
  }
  

  return(
    <Button disabled={active} onClick={handlerClick}>
      Search
      <AiOutlineSearch/>
    </Button>
  )
}
