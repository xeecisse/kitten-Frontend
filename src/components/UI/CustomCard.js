import React from 'react'
// import { useSelector } from 'react-redux'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { themeClass } from '../../variables'
import BackButton from './BackButton'

function CustomCard(props) {
  const { header, footer, back, headerRight, icon } = props
  // const activeBusiness = useSelector((state) => state.app.theme)

  return (
    <Card
      className={`${props.container} shadow`}
      // outline
      style={{
        // borderWidth: 1,
        // borderColor: activeBusiness.primary_color,
        // borderColor:themeClass,
        // borderStyle: 'solid',
        border: 'none'
      }}
    >
      {header && (
        <CardHeader
          // className={`py-2`}
          style={{
            // borderBottom: `1px solid ${themeClass}`,
            // backgroundColor: themeClass,
            border: 'none',
            color: "black",
            paddingTop: '.4rem',
            paddingBottom: '.4rem',
            backgroundColor: 'white'
          }}
          className={back ? 'm-0 align-items-center' : 'm-0'}
        >
          {back && (
            <div className="col-md-3">
              <BackButton text=' Back' />
            </div>
          )}
          <h5 className={back ? 'col-md-6 text-center text-white' : ''} style={{ fontWeight: '' }}>
            {icon}{' '}{header}</h5>
          {/* <div className={back ? 'col-md-6' : ''}>{header}</div> */}
          {headerRight && <div className="col-md-3">{headerRight}</div>}
        </CardHeader>
      )}
      <CardBody className={props.body} style={{ border: 'none' }}>{props.children}</CardBody>
      {footer && (
        <CardFooter
          style={{
            borderBottom: `1px solid ${themeClass}`,
            backgroundColor: themeClass,
            color: "black",
            // paddingTop: '.4rem',
            // paddingBottom: '.4rem',
          }}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}

export default CustomCard
