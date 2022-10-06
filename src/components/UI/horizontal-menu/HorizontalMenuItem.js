import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function HorizontalMenuItem(props) {
  const location = useLocation()
  const active = props.active || location.pathname.includes(props.route)
  
  return (
    <li className="nav-item text-white">
      <Link
        to={props.route}
        className={`${
          active && 'active border border-secondary'
        } nav-link p-1 px-2`}
        style={{ fontSize: active ? 16 : 14, fontWeight: 'bold' }}
      >
        {props.children}
      </Link>
    </li>
  )
}

export default HorizontalMenuItem
