import { useEffect, useState } from "react"
import axios from "axios"
import { MdOutlineAirplanemodeInactive, MdOutlineAirplanemodeActive } from 'react-icons/md'

import { Table } from "./style"

export const TableAirport = () => {
  const [data,setData] = useState([])
  const [att, setAtt] = useState(true)

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

  useEffect(() => {
    requestUpdateList()
  },[att])

  const handleClick = (item) => {
    setAtt(!att)
    item.active = !item.active
    axios({
      method: 'put',
      baseURL: 'http://127.0.0.1:8000/active_or_deactive/',
      data: item
    })
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Airport</th>
          <th>City</th>
          <th>State</th>
          <th>Lat</th>
          <th>Lon</th>
          {/* <th>Obs</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.iata}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.lat}</td>
              <td>{item.lon}</td>
              {/* <td>{item.obs}</td> */}
              <td>
                {item.active ?
                  <>
                    <a onClick={() => handleClick(item)}>
                      <MdOutlineAirplanemodeActive/>
                    </a>
                  </>
                  :
                  <>
                    <a onClick={() => handleClick(item)}>
                      <MdOutlineAirplanemodeInactive/>
                    </a>
                  </>
                }
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
