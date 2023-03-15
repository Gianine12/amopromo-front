import { Link } from "react-router-dom"
import { NavUl } from "./style"

export const NavBar = () => {
  return(
    <NavUl>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/airport'>Airport</Link>
      </li>
    </NavUl>
  )
}