import axios from "axios"
import { useEffect, useState } from "react"

import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi'
import { DivInputt } from "./style"

export const InputText = ({placeholder, validation,setAiport}) => {
  const [data,setData] = useState([])

  const setValues = (value) => {
    if(placeholder == 'exit'){
      setAiport(value,validation)
    }else{
      setAiport(value,validation)
    }
  }

  const requestUpdateList = () => {
    axios({
      method: 'get',
      baseURL: 'http://127.0.0.1:8000/'
    })
    .then((resp) => {
      setData(resp.data)
    })
  }

  useEffect(() => {
    requestUpdateList()
  },[])

  return(
    <DivInputt>
      {validation === 'exit' ?
        <GiAirplaneDeparture/>
      :
        <GiAirplaneArrival/>
      }
      <select onChange={(e) => setValues(e.target.value)} placeholder={placeholder}>
        <option value='-1'>---</option>
        {data.map((item) => {
          return(
            <>
              <option value={`${item.iata}:${item.city}:${item.lat}:${item.lon}`}>{item.city}</option>
            </>
          )
        })}
      </select>
    </DivInputt>
  )
}
