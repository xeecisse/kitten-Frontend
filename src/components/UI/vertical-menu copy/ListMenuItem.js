import React from 'react';
// import { useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { themeClass } from '../../../variables';
// import { primaryColor } from '../../../utils/constants';

function ListMenuItem(props) {
  // const appTheme = useSelector((state) => state.app.theme)
  const location = useLocation()
  const active = location.pathname.includes(props.route)

  return (
    <Link
      to={props.route}
      className="list-group-item list-group-item-action"
      style={
        active
          ? {
              backgroundColor:themeClass ,
              borderLeft: `5px solid ${themeClass}`,
              borderRight: `5px solid ${themeClass}`,
              color:"white"
            }
          : null
      }
    >
      {props.children}
    </Link>
  )
}

export default ListMenuItem

// {/* <span
//       className="list-group-item list-group-item-action"
//       style={
//         active
//           ? { backgroundColor: '#eee', borderLeft: `3px solid blue` }
//           : null
//       }
//     >
//       {props.children}
//       {/* {props.children}</p> */}
//     </span> */}
