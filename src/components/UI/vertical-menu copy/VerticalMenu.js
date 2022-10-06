import React from 'react'
import { themeClass } from '../../../variables'
// import { useSelector } from 'react-redux'
import menu from '../../../menu.png'
function VerticalMenu(props) {
  // const appTheme = useSelector((state) => state.app.theme)
  return (
    <div className="list-group">
      {props.title ? (

        <div>

          <span
            className="list-group-item list-group-item-action font-weight-bold"
            style={{
              backgroundColor: themeClass,
              color: 'white',
            }}
          >
            <img src={menu} alt=''/>{' '}
            {props.title}
          </span>
        </div>
      ) : null}
      {props.children}
    </div>
  )
}

export default VerticalMenu
