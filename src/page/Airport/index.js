import { NavBar } from "../../components/Navbar"
import { TableAirport } from "../../components/TableAirpot"
import { SearchAirfare } from "../../components/SearchAirfare"

export const Airport = () => {
  return (
    <div>
      <NavBar/>
      <SearchAirfare/>
      <TableAirport/>
    </div>
  )
}