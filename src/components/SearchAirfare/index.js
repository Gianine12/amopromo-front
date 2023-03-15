import { useEffect, useState } from 'react'
import { BsArrowLeftRight } from 'react-icons/bs'
import { ButoonSearch } from '../ButoonSearch'
import { InputD } from '../InputDate'

import { InputText } from "../InputText"
import { NewModal } from '../Modal'
import { Div, DivArrow, DivButoon, DivData, DivInput, DivPSearchAirfare, DivSearch } from "./style"

export const SearchAirfare = () => {

  const [exit, setExit] = useState()
  const [arrival, setArrival] = useState()
  const [exitCity, setExitCity] = useState()
  const [arrivalCity, setArrivalCity] = useState()
  const [dateGoing, setDataGoing] = useState()
  const [dateReturn, setDataReturn] = useState()
  const [exitLat, setExitLat] = useState()
  const [exitLon, setExitLon] = useState()
  const [arrivaltLat, setArrivaltLat] = useState()
  const [arrivaltLon, setArrivaltLon] = useState()
  const [search, setSearch] = useState([])

  const vallueSearch = (value) => {
    console.log(value)
    setSearch(value)
  }

  useEffect(()=>{
  },[])

  const [btn, setBtn] = useState(true)
  

  const setAiport = (data, val) => {
    let newData = data.split(':')

    if(val === 'exit'){
      setExit(newData[0])
      setExitCity(newData[1])
      setExitLat(newData[2])
      setExitLon(newData[3])
    }else{
      setArrival(newData[0])
      setArrivalCity(newData[1])
      setArrivaltLat(newData[2])
      setArrivaltLon(newData[3])
    }
  }

  const setDataValues = (value,val) => {
    if(val.toLowerCase() === 'going'){
      setDataGoing(value)
    }else{
      setDataReturn(value)
    }
  }

  useEffect(()=>{
    if(arrivalCity === exitCity){
      setBtn(true)
    }else{
      setBtn(false)
    }
    
  },[exitCity,arrivalCity,btn])

  return (
    <DivPSearchAirfare>
      <DivSearch>
        <Div>
          <DivInput>
            <label>Exit</label>
            <InputText
              setAiport={setAiport}
              validation="exit"
              placeholder="Search for Airport"
            />
          </DivInput>
          <DivArrow>
            <BsArrowLeftRight/>
          </DivArrow>
          <DivInput>
            <label>Arrival</label>
            <InputText
              setAiport={setAiport}
              validation="arrival"
              placeholder="Search for Airport"
            />
          </DivInput>
        </Div>
        <DivData>
          <div>
            <InputD
              setDataValues={setDataValues}
              text='Going'
            />
          </div>
          <div>
            <InputD
              setDataValues={setDataValues}
              text='Return'
            />
          </div>
        </DivData>
        <DivButoon>
          <ButoonSearch
            vallueSearch={vallueSearch}
            active={btn}
            exit={exit}
            arrival={arrival}
            dateGoing={dateGoing}
            dateReturn={dateReturn}
            exitLat={exitLat}
            exitLon={exitLon}
            arrivaltLat={arrivaltLat}
            arrivaltLon={arrivaltLon}
          />
        </DivButoon>
      </DivSearch> 
      <NewModal
        data={search}
      />
    </DivPSearchAirfare>
  )
}
